# how to deploy a spring boot war file to tomcat server (deploy to standalone tomcat server)

1. My config:
   - jdk 17
   - tomcat 10

2. create a spring boot project using spring initializier and Intellij IDEA:
   - packaging: war
   - build: maven
   - java: 17

3. You need to do these 2 steps (but since you created the project using spring initializier and Intellij IDEA they are automatically done):

1. add tomcat as a provided dependency (meaning it will only be there during build and thats what we want, because in runtime, we will provide tomcat by deploying the project to tomcat)
    
    ```xml
    <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-tomcat</artifactId>
          <scope>provided</scope>
      </dependency>
    ```
    
2. extend this class `extends SpringBootServletInitializer`.
    
    In our case, this was the code automatically added:
    
    ```java
    public class ServletInitializer extends SpringBootServletInitializer {
    
        @Override
        protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
            return application.sources(SpringBootDeploymentApplication.class);
        }
    
    }
    ```
    

Add an endpoint /hello to test the project:

```java
@SpringBootApplication
@RestController
public class SpringBootDeploymentApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootDeploymentApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Tomcat!";
    }

}
```

package the project:

```java
.\mvnw package //we are using the bundled maven
```

A war will be generated in `target` folder of the project

Copy the war to tomcat `webapps` folder

![Untitled](Untitled.png)

start tomcat:

```powershell
cd 'C:\Program Files\Apache Software Foundation\apache-tomcat-10.1.17\bin'
.\catalina.bat run
```

open the browser and head to:

[http://localhost:8080/spring-boot-deployment-0.0.1-SNAPSHOT/hello](http://localhost:8080/spring-boot-deployment-0.0.1-SNAPSHOT/hello)

![Untitled](Untitled%201.png)