# Create a Maven wep app and deploy to Tomcat

(I have Tomcat 8.5 installed as well as JDK 8 and maven 3.6.1)

1. make sur you have the `CATALINA_HOME` ENV VAR setup with tomcat directory.

2. make sur you have `%CATALINA_HOME%\bin` added to the **PATH** env var

3. start the tomcat server
    ```bash
    startup.bat
    ```

4. verify Tomcat is running on localhost:8080

5. from Intellij Idea, create maven web app project (i named it demo10).\
  the archtype: org.apache.maven.archetype:maven-archetype-webapp 

6. change the Java version on pom.xml

    ```xml
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
      </properties>
    ```

7. add these two dependencies
    ```xml
    <dependency>
        <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
      <scope>provided</scope>
    </dependency>

    <!-- https://mvnrepository.com/artifact/org.apache.commons/commons-lang3 -->
    <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-lang3</artifactId>
      <version>3.12.0</version>
    </dependency>
    ```

    the scope of the first dependency is **provided**, meaning that it will be in the classpath only during the build and test phases. It won’t get bundeled in the generated war artifact that we are going to deploy to tomcat. so the dependency is just for us to write and compile code in this case, and tomcat in its lib folder has this jar `servlet-api.jar`.


    the scope of the second dependency is **compile** (no scope == default scope == compile), meaning that the dependency will be in the classpath in all phases on a project build, test and run. And it will be bundeled in the generated war file that we ae going to deploy to tomcat.

8. Create this class **com.example.servlets.HelloWorldServlet**

    ```java
    package com.example.servlets;

    import java.io.IOException;

    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;

    import org.apache.commons.lang3.StringUtils;

    @WebServlet("/helloworld")
    public class HelloWorldServlet extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
          throws ServletException, IOException {
        
        resp
          .getWriter()
          .println("hello world! " + StringUtils.equalsIgnoreCase("alae", "ALAE"));
      }
    }
    ```

9. generate the **war** file thats going to be deployed to the server

    ```bash
    mvn package
    ```

    this will execute the `package` phase and all the preceding phases.

    The generated WAR will be found at the `target` directory

10. copy the WAR file to the `%CATALINA_HOME%\webapps` folder

11. head to ***http://localhost:8080/WAR-NAME/helloworld*** and you'll see the hello world message => Successfully deployed a WAR java app to tomcat