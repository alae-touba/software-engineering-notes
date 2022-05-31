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

