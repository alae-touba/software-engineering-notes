
- [Create a Maven Spring Core project in Eclipse EE 2022 (if you want to play with beans for example):](#create-a-maven-spring-core-project-in-eclipse-ee-2022-if-you-want-to-play-with-beans-for-example)
- [Create a Maven Spring MVC app using Eclipse EE (2022)](#create-a-maven-spring-mvc-app-using-eclipse-ee-2022)

## Create a Maven Spring Core project in Eclipse EE 2022 (if you want to play with beans for example):

* Create a maven quick start project 
* Change the java version in **pom.xml**
* Add the spring context dependency (includes spring core, aop, etc)

    ```xml
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.2.4.RELEASE</version>
    </dependency>
    ```

* Change Java version on pom.xml 

    ```xml
    <properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.release>11</maven.compiler.release>
	</properties>
    ```

    and right click on the project -> Maven -> Update Project


* Create a resources folder by right clicking on the project -> new Source Folder. Fill the folder name as: **src/main/resources**.

    This will add this folder automatically to classpath.


* Create an *application-context.xml* inside of *src/main/resources*

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xmlns:context="http://www.springframework.org/schema/context"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">
    
        <bean id="myCoach"
            class="com.alae.programming.newProj.BaseballCoach"> 
        </bean>
    </beans>  
    ```

* Create an interface *Coach*:

    ```java
    package com.alae.programming.TestSpringCore;

    public interface Coach {
        
        String getDailyWorkout();
    }
    ```

* Create an implmentation of it:

    ```java
    package com.alae.programming.TestSpringCore;

    public class BaseballCoach implements Coach{

        @Override
        public String getDailyWorkout() {
            return "baseball coach workout!!!!";
        }

    }
    ```

* Create a Driver class

    ```java
    package com.alae.programming.TestSpringCore;

    import org.springframework.context.ApplicationContext;
    import org.springframework.context.support.ClassPathXmlApplicationContext;

    public class App {
        public static void main( String[] args ) {
            // load the spring configuration file
            ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");

            // retrieve bean from spring container
            Coach theCoach = context.getBean("myCoach", Coach.class);

            System.out.println(theCoach.getDailyWorkout());
        }
    }
    ```

## Create a Maven Spring MVC app using Eclipse EE (2022)

* Create a Maven webapp project -> web app (*org.apache.maven.archetypes.maven-archetype-webapp*)
* Change the java version in pom.xml and right click on the project -> Maven -> Update project
  
    ```xml
    <properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.source>11</maven.compiler.source>
		<maven.compiler.target>11</maven.compiler.target>
	</properties>
    ```
* Right click on the project -> properties -> targeted runtime -> tomcat
* Add Spring MVC (org.springframework.spring-webmvc), jstl (javax.servlet.jstl)dependencies to pom.xml
* Create a java folder inside src/main
* Create two packages com.alae.config & com.alae.controllers

* Create a class **com.alae.config.FrontController**

    ```java
    package com.alae.config;

    import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

    public class FrontController extends AbstractAnnotationConfigDispatcherServletInitializer {
        @Override
        protected Class<?>[] getRootConfigClasses() {
            return null;
        }
        @Override
        protected Class<?>[] getServletConfigClasses() {
            return new Class[] { WebMvcConfig.class };
        }
        @Override
        protected String[] getServletMappings() {
            return new String[] { "/" };
        }
    }
    ```
    
* Create a class **com.alae.config.WebMvcConfig**  


    ```java
    package com.alae.config;
    
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.ComponentScan;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.servlet.config.annotation.EnableWebMvc;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
    import org.springframework.web.servlet.view.InternalResourceViewResolver;
    
    @Configuration
    @EnableWebMvc
    @ComponentScan("com.alae")
    public class WebMvcConfig implements WebMvcConfigurer {
    
        @Bean
        public InternalResourceViewResolver getInternalResourceViewResolver() {
            InternalResourceViewResolver vr = new InternalResourceViewResolver();
            vr.setPrefix("/WEB-INF/views/");
            vr.setSuffix(".jsp");
            return vr;
        }
    }
    ```

* Create a views folder isnide WEB-INF

* Create a posts.jsp file under **WEB-INF/views/**

* create a class named **com.alae.controllers.PostsController**

    ```java
    package com.alae.controllesr;

    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RequestParam;

    @Controller
    @RequestMapping("/posts")
    public class PostsController {
        @RequestMapping("/")
        public String posts() {
            return "posts";         
        }
    }
    ```

* Right click on the project -> Run as -> Run on server
* Go to the browser and go to http://localhots:8080/#project_name#/posts 
