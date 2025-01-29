# Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [The authentication flow](#the-authentication-flow)
  - [1. User Submits Credentials:](#1-user-submits-credentials)
  - [2. Request Intercepted by Filter Chain:](#2-request-intercepted-by-filter-chain)
  - [3. UsernamePasswordAuthenticationFilter Attempts Authentication:](#3-usernamepasswordauthenticationfilter-attempts-authentication)
  - [4. Authentication Manager is Invoked:](#4-authentication-manager-is-invoked)
  - [5. Authentication Providers are Consulted:](#5-authentication-providers-are-consulted)
  - [6. UserDetailsService Retrieves User Details:](#6-userdetailsservice-retrieves-user-details)
  - [7. Password Comparison:](#7-password-comparison)
  - [8. Authentication Success or Failure:](#8-authentication-success-or-failure)
  - [9. SecurityContext is Updated:](#9-securitycontext-is-updated)
  - [10. User is Authenticated:](#10-user-is-authenticated)
- [Discussing the main authentication components (classes/interfaces involved)](#discussing-the-main-authentication-components-classesinterfaces-involved)
  - [AbstractAuthenticationProcessingFilter: Foundation for Authentication Filters](#abstractauthenticationprocessingfilter-foundation-for-authentication-filters)
  - [SecurityContextHolder: Managing the SecurityContext](#securitycontextholder-managing-the-securitycontext)
  - [SecurityContext: Carrying Authentication Information](#securitycontext-carrying-authentication-information)
  - [Authentication: Representing User Credentials](#authentication-representing-user-credentials)
  - [GrantedAuthority: Defining User Authorities](#grantedauthority-defining-user-authorities)
  - [AuthenticationManager: Orchestrating Authentication Flow](#authenticationmanager-orchestrating-authentication-flow)
  - [ProviderManager: Default Implementation of AuthenticationManager](#providermanager-default-implementation-of-authenticationmanager)
  - [AuthenticationProvider: Perform Specific Authentication](#authenticationprovider-perform-specific-authentication)
  - [DaoAuthenticationProvider](#daoauthenticationprovider)
  - [UserDetailsService](#userdetailsservice)
  - [Request Credentials with AuthenticationEntryPoint](#request-credentials-with-authenticationentrypoint)

# Introduction

When exploring the official Spring Framework documentation on servlet authentication architecture, you'll encounter these fundamental classes and interfaces:

1. **AuthenticationEntryPoint** - Initiates the authentication process when an unauthenticated user attempts to access a secured resource.
2. **AbstractAuthenticationProcessingFilter** - Serves as a base class for filters that intercept authentication requests.
3. **AuthenticationManager** - The primary interface for orchestrating the authentication process.
4. **ProviderManager** - The default implementation of AuthenticationManager, responsible for managing a collection of AuthenticationProvider instances.
5. **AuthenticationProvider** - Performs a specific type of authentication.
6. **Authentication** - Represents the authentication request and, upon successful authentication, the authenticated user's details.
7. **GrantedAuthority** - Represents a permission granted to an authenticated user (e.g., roles, scopes).
8. **SecurityContextHolder** - A helper class that provides access to the SecurityContext.
9. **SecurityContext** - Contains the Authentication object of the currently authenticated user.
10. **UserDetailsService** - Core interface used to retrieve user-related data, typically from a database or other persistent storage.

# The authentication flow

Let's delve into the Spring Security authentication flow using a standard username/password scenario (like form-based login or Basic Auth for APIs). Here's a breakdown of the steps, highlighting the key components involved:

## 1. User Submits Credentials:

The user provides their username and password through a login form or another authentication mechanism.

## 2. Request Intercepted by Filter Chain:

The HTTP request enters the servlet filter chain. Spring Security uses a DelegatingFilterChainProxy to delegate to a chain of Spring Security-specific filters.

One of the main filters that is almost always enabled in the filter chain is the `ExceptionTranslationFilter` which can handle security-related exceptions, such as `AuthenticationException` or `AccessDeniedException` that are thrown during the authentication process, so it delegates to `AuthenticationEntryPoint` in the case of `AuthenticationException` for example.

The `UsernamePasswordAuthenticationFilter`, an implementation of `AbstractAuthenticationProcessingFilter`, is responsible for intercepting and handling username/password authentication requests.

## 3. UsernamePasswordAuthenticationFilter Attempts Authentication:

If the request matches a specific URL (usually /login by default), the `UsernamePasswordAuthenticationFilter` attempts to extract the username and password from the request. It creates an instance of `UsernamePasswordAuthenticationToken`, implementing the `Authentication` interface, to hold the authentication data.

## 4. Authentication Manager is Invoked:

The `UsernamePasswordAuthenticationFilter` calls the configured `AuthenticationManager` to perform authentication. The `ProviderManager`, a default implementation of `AuthenticationManager`, manages a list of `AuthenticationProvider` instances.

## 5. Authentication Providers are Consulted:

The `ProviderManager` iterates through its list of `AuthenticationProvider` instances. Each `AuthenticationProvider` is responsible for a specific type of authentication and uses its `supports()` method to indicate whether it can handle the current authentication request. In the case of username/password authentication, the `DaoAuthenticationProvider` is commonly used. It relies on a `UserDetailsService` to retrieve user details.

## 6. UserDetailsService Retrieves User Details:

The `DaoAuthenticationProvider` calls the configured `UserDetailsService` to retrieve user details based on the provided username. The `UserDetailsService` typically loads user details from a database or any other persistent storage.

## 7. Password Comparison:

The retrieved user details include the stored password (usually encoded). The `DaoAuthenticationProvider` uses a `PasswordEncoder` to compare the encoded stored password with the raw password provided by the user during login.

```java
// Inside DaoAuthenticationProvider's additionalAuthenticationChecks method:
if (!passwordEncoder.matches(presentedPassword, userDetails.getPassword())) {
	throw new BadCredentialsException("Incorrect password");
}
```

## 8. Authentication Success or Failure:

If the passwords match, authentication is successful. The `AuthenticationProvider` returns a fully populated `Authentication` object with the user's details and authorities. This `Authentication` object is usually a different instance than the one passed in, with the authenticated flag set to true.

If authentication fails, an exception, usually `BadCredentialsException`, is thrown. This exception propagates up to the `ExceptionTranslationFilter` which in turns uses the `AuthenticationEntryPoint` to start the authentication process (e.g., redirect to login). Common `AuthenticationException` types include:

- *BadCredentialsException*: Incorrect password.
- *UsernameNotFoundException*: User not found.
- *LockedException*: User account is locked.
- *DisabledException*: User account is disabled.

## 9. SecurityContext is Updated:

Upon a successful authentication, the **`SecurityContextHolder`** is updated with the new **`SecurityContext`**.

The **`SecurityContext`** now holds the authenticated **`Authentication`** object.

Upon successful authentication, the `SecurityContextHolder` is updated with the new `SecurityContext`. The SecurityContext now holds the authenticated `Authentication` object. 

## 10. User is Authenticated:

The user is now considered authenticated, and subsequent requests within the same session will carry the user's security context (if its a session based auth)

# Discussing the main authentication components (classes/interfaces involved)

Now, let’s try to dive a bit deeper into each one of these (and some more).

## AbstractAuthenticationProcessingFilter: Foundation for Authentication Filters

A filter is a component that intercept and process HTTP requests and responses in a web application (middlewares in some other frameworks). Filters in Spring Security are part of the filter chain, which is a series of filters that are executed in a specific order to perform various security-related tasks.

The **`AbstractAuthenticationProcessingFilter`** is a base class for filters that handle authentication. It simplifies the creation of custom authentication filters by providing common functionality.

key Responsibilities:

1. **Processing Authentication Requests**: intercepts requests that require authentication.
2. **Extracting Credentials**: extracts authentication credentials (like username and password) from the request.
3. **Delegating Authentication**: delegates the authentication process to the configured **`AuthenticationManager`**.

key methods :

- **doFilter**

    The **`doFilter`** method handles requests.

    This code snipped is taken from the open source code of spring security.

    ```java
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
      HttpServletRequest request = (HttpServletRequest) req;
      HttpServletResponse response = (HttpServletResponse) res;

      // Check if the request matches the URL pattern
      if (requiresAuthentication(request, response)) {
        // Process authentication
        Authentication authResult = attemptAuthentication(request, response);
        if (authResult == null) {
            // If authentication is not successful, return
        }

        // Successful authentication
        successfulAuthentication(request, response, chain, authResult);
      } else {
        // If not an authentication request, proceed with the chain
        chain.doFilter(request, response);
      }
    }
    ```

- **attemptAuthenticatication**

    An abstract method that must to be implemented by filters implementing the **`AbstractAuthenticationProcessingFilter`**.  It performs the actual authentication attempt.

    ```java
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)
            throws AuthenticationException {

      try {
        // Extract credentials (e.g., username and password)
        String username = getUserNameFromRequest(request);
        String password = getPasswordFromRequest(request);

        // Create an authentication token
        UsernamePasswordAuthenticationToken authRequest =
        new UsernamePasswordAuthenticationToken(username, password);

        // Delegate authentication to the AuthenticationManager configured
        return this.getAuthenticationManager().authenticate(authRequest);
      } catch (AuthenticationException e) {
        // Handle authentication failure, log the error, etc.
        throw e; // Re-throw or wrap in a custom exception
      }

    }
    ```

- **successfulAuthentication**

    called upon successfull authentication.

    snippet taken from the open source code of spring security:

    ```java
    protected void successfulAuthentication(HttpServletRequest request,
                HttpServletResponse response, FilterChain chain, Authentication authResult)
                throws IOException, ServletException {
      // ...
      // setting the authentication on the security context (meaning the request)
      // is now authenticated
      SecurityContextHolder.getContext().setAuthentication(authResult);
      // ...
    }
    ```

    Some out of the box implementations of this class are:

    - **UsernamePasswordAuthenticationFilter:** Processes username/password authentication, typically used in form-based login.
    - **BasicAuthenticationFilter:** Handles HTTP Basic Authentication (username/password in the Authorization header).

## SecurityContextHolder: Managing the SecurityContext

A helper class that stores the `SecurityContext` of the current thread. It provides static methods to access and manage the `SecurityContext`.

we'll see an example later of how we may work with it.

## SecurityContext: Carrying Authentication Information

The `SecurityContext` holds crucial information about the authenticated user. It's the central repository for accessing authentication details throughout the request-response lifecycle.

The `SecurityContext` is retrieved from the `SecurityContextHolder` and encapsulates the `Authentication` object representing the currently authenticated user (the principal). If you need to get any info (username, authorities, etc) of the current logged in user, you’ll need to get the `SecurityContext` first. Its is typically stored in a `SecurityContextRepository`. By default, it's stored in the `HttpSessionSecurityContextRepository`, which means it's associated with the user's HTTP session.

If the `SecurityContext` contains a non null `Authentication` value, then the current user/request is authenticated.

An example of how we may use the `SecurityContextHolder` and the `SecurityConetxt` and `Authentication` to get authenticated user info:
```java
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  @GetMapping("/userinfo")
  public String userInfo() {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    
    Authentication authentication = securityContext.getAuthentication();
    
    if (authentication != null && authentication.isAuthenticated()) {
      // Extract user details
      Object principal = authentication.getPrincipal();
      if (principal instanceof User) {
          User user = (User) principal;
          return "Hello " + user.getUsername();
      } else {
          return "Hello, anonymous user!";
      }
    }
    return "No authenticated user found.";
  }
}
```

In a tiered application, `SecurityContextHolder` makes it straightforward to access security info in different layers web, service, data access.\
Also, common security checks like "is this user authenticated?" or "does this user have this role?" can be performed easily by accessing the `SecurityContext`



## Authentication: Representing User Credentials

The **`Authentication`** interface is a key player in the Spring Security authentication flow.

The **`Authentication`** plays two key roles:

1. **As an Input to the Authentication Process**:  It stores the credentials (such as username and password) provided by the user attempting to authenticate (input to the `AuthenticationManager`).
2. **As an Output from the Authentication Process**:  It holds the authenticated principal (user details) and their granted authorities (roles/permissions) after successful authentication. The `Authentication` object returned by `AuthenticationManager` is usually a different instance than the one passed in. It's a fully populated object with the principal, authorities, and authenticated flag set to true.

## GrantedAuthority: Defining User Authorities

Authorities, such as roles or scopes, are represented by the **`GrantedAuthority`** interface. These authorities are attached to the **`Authentication`** object and are used to define what actions or resources a user can access.

An example code to show how to get the list of granted authorities of the current logged in user:

```java
// Get the security context
SecurityContext securityContext = SecurityContextHolder.getContext();

// Get the authentication object
Authentication authentication = securityContext.getAuthentication();

if (authentication != null) {
  // Get the authorities
  Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

  // Convert authorities to a list of strings
  List<String> authoritiesList = authorities
    .stream()
    .map(GrantedAuthority::getAuthority)
    .collect(Collectors.toList());
}
```

## AuthenticationManager: Orchestrating Authentication Flow

The `AuthenticationManager` defines how authentication is performed in Spring Security. It's the API that Spring Security's filters use to authenticate users.

This is an interface (so an implementation must be provided to perform the authentication) with an authenticate method.

```java
Authentication authenicate(Authentication authentication);
```

The input parameter `Authentication` object contains the credentials provided by the user (such as username and password).

The returned `Authentication` object (if authentication is successful) contains the authenticated principal (typically the user details) and their granted authorities (roles/permissions).

If `AuthenticationManager` throws an `AuthenticationException`, it typically propagates up to the `ExceptionTranslationFilter` which in turns uses the `AuthenticationEntryPoint` to start the authentication process (typically by redirecting to a login page or returning an HTTP status like 401 Unauthorized in REST scenarios.).

## ProviderManager: Default Implementation of AuthenticationManager

**`ProviderManager`** is the most common implementation of the **`AuthenticationManager`**.It manages a collection of **`AuthenticationProvider`** instances, each responsible for a specific type of authentication.

During authentication, `ProviderManager` iterates through these providers, finds one that supports the given `Authentication` object using the supports() method, and delegates authentication to it.

spring security source code:

```java
class ProviderManager implements AuthenticationManager {

	private List<AuthenticationProvider> providers = Collections.emptyList();

	// Construct a ProviderManager using the given AuthenticationProviders
	ProviderManager(List<AuthenticationProvider> providers) {
		// ...
	}

	Authentication authenticate(Authentication authentication) {
		//...
		Class<? extends Authentication> toTest = authentication.getClass();
		Authentication result = null;

		for (AuthenticationProvider provider: getProviders()) {
        // Check if this provider supports the presented authentication type
			if (!provider.supports(toTest)) {
				continue;
			}

			try {
				result = provider.authenticate(authentication);
			} catch (AuthenticationException e) {
				// ...
			}
      // ...
    }
  }
}
```

When a user attempts to authenticate (e.g., by logging in), the **`ProviderManager`** iterates through its list of providers registrated with it and it delegates the authentication request to the first provider that supports the authentication type (e.g., username/password, token-based, etc.).

One of the strengths of using `ProviderManager` is the ability to extend or customize the authentication process by adding custom AuthenticationProviders. This allows developers to implement business-specific authentication logic or integrate with external services for authentication.

## AuthenticationProvider: Perform Specific Authentication

An **`AuthenticationProvider`** is used by the **`ProviderManager`** to perform a specific type of authentication, such as database authentication, LDAP authentication, or custom authentication mechanisms.

This is an interface that defines the contract for components responsible for validating user credentials.

So, developers can implement custom **`AuthenticationProvider`** instances to integrate Spring Security with their authentication logic.

This interface has many OOTB implementations, the most common is **`DaoAuthenticationProvider`** (we’ll talk more about it later):
- Retrieves user details from a **`UserDetailsService`** (usually backed by a database).
- Validates credentials (e.g., username and password).

You can also provide your own implemenatation of `AuthenticationProvider` if you need to control the authentication logic:

```java
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
      final String name = authentication.getName();
      final String password = authentication.getCredentials().toString();

      // Authenticate against third-party and return an Authentication object
      return authenticateAgainstThirdPartyAndGetAuthentication(name, password);
    }

    @Override
    public boolean supports(Class<?> authentication) {
      return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
```

The **`AuthenticationProvider`** interface has only 2 methods: **authenticate** and **supports**.

- **authenticate**: takes an **`Authentication`** (the we saw earlier) object as input. This object encapsulates the user's credentials (typically username and password) to be validated. The provider performs the verification logic and returns a fully populated **`Authentication`** object containing the authenticated user's details (username, authorities) if successful. If verification fails, it throws an **`AuthenticationException`**
- **supports**: This method allows the provider to indicate if it can handle the specific type of **`Authentication`** object presented. This helps **`ProviderManager`** efficiently delegate authentication attempts. (in the example, the **CustomAuthenticationProvider** is able to handle the **`UsernamePasswordAuthenticationToken`** which is a type of authentication that holds a username and password as the name says)

## DaoAuthenticationProvider

The `DaoAuthenticationProvider` is an OOTB `AuthenticationProvider` implementation that authenticates users based on credentials stored in a data access object (DAO), such as a database.

Its core responsibility is to authenticate the user by comparing their credentials (sent with the HTTP request) with credentials stored in a database or other data source.

The `authenticate` method is the core of the authentication process. It takes an `Authentication` object (typically `UsernamePasswordAuthenticationToken`) as input, retrieves user details from the `UserDetailsService`, compares the provided password with the stored password, and returns an authenticated `Authentication` object if successful.

```java
@Override
public Authentication authenticate(Authentication authentication)
        throws AuthenticationException {
  // Retrieve user details from UserDetailsService
  UserDetails user = userDetailsService.loadUserByUsername(authentication.getName());

  // Compare passwords
  if (!passwordEncoder.matches(authentication.getCredentials().toString(), user.getPassword())) {
      throw new BadCredentialsException("Invalid credentials");
  }

  // Authentication successful
  return new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities());
}
```

The **`DaoAuthenticationProvider`** uses the **`UserDetailsService`** to get the details about a username (sent in the request credentials).

## UserDetailsService

The **`UserDetailsService`** is a core interface in Spring Security. It is used to retrieve user-related data (such as username, password, authorities).

It has a single method, **`loadUserByUsername(String username).`** This method takes a username as input and returns a **`UserDetails`** object. This **`UserDetails`** object contains the user’s information, which Spring Security uses for authentication and authorization.

This interface is typically used by **`DaoAuthenticationProvider`** to load user details during the authentication process.

## Request Credentials with AuthenticationEntryPoint

The **`AuthenticationEntryPoint`** is an interface in Spring Security that defines a single method, **`commence`**, which is invoked when a user tries to access a resource that requires authentication but they are not authenticated and did not provide any auth credentials .

It is used in situations where:
- A client (user or application) makes a request to a protected resource.
- The client has not provided any credentials, or the provided credentials are invalid.
- Spring Security intercepts the request and determines that the client needs to be authenticated.

In such situations you may wanna for example:
- Redirect the client to a login page (common for web applications).
- Send an HTTP response with a status code and headers that prompt the client to provide credentials (common for APIs).

You can create custom implementations of the **`AuthenticationEntryPoint`** interface to define what should happen when an unauthenticated request is received. For example, in a RESTful API, you might want to return a 401 Unauthorized status code with a JSON error message.

```java
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

  @Override
  public void commence(HttpServletRequest req, HttpServletResponse res,
                      AuthenticationException authException) throws IOException {
    // Set the response status to 401 Unauthorized
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

    // Set the response content type to application/json
    response.setContentType("application/json");

    // Write a JSON message to the response body
    response.getWriter().write("{\"error\": \"Unauthorized access - please provide valid credentials.\"}");
  }
}
```