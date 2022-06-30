
- [Create a Maven Spring Core project in Eclipse EE 2022 (if you want to play with beans for example):](#create-a-maven-spring-core-project-in-eclipse-ee-2022-if-you-want-to-play-with-beans-for-example)
- [Create a Maven Spring MVC app using Eclipse EE (2022)](#create-a-maven-spring-mvc-app-using-eclipse-ee-2022)
- [API using spring boot + persistence layer (JPA & Hibernate) + content negotiation (JSON & XML)](#api-using-spring-boot--persistence-layer-jpa--hibernate--content-negotiation-json--xml)

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


## API using spring boot + persistence layer (JPA & Hibernate) + content negotiation (JSON & XML)


* head to https://start.spring.io/ and Create a spring boot project.
    * dependecies: WEB, JPA, Mysql, Lmobok
    * Java 11

* Unzip the project 

* Open with Eclipse. File -> Import -> Exising Maven Project

* add this dependency to pom.xml

	```xml
	<dependency>
		<groupId>com.fasterxml.jackson.dataformat</groupId>
		<artifactId>jackson-dataformat-xml</artifactId>
		<version>2.13.3</version>
	</dependency>
	```

	this will help us respond to API requests with *XML* content.

* add this content to **application.properties**:

	```properties
	#setting the media type parameter name as mediaType,
	#meaning that our GET API requests will end with ?mediaType=json
	#or ?mediaType=xml 
	spring.mvc.contentnegotiation.favor-parameter=true
	spring.mvc.contentnegotiation.parameter-name=mediaType

	server.servlet.context-path=/project

	spring.datasource.url=jdbc:mysql://localhost:3306/employees_db
	spring.datasource.username=root
	spring.datasource.password=root


	spring.jpa.show-sql=true
	spring.jpa.format-sql=true
	spring.jpa.hibernate.ddl-auto=update
	spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
	```
* Create a database *employees_db*

* create 4 packages *dao, entity, service rest*

* Create the **Employee** entity

	```java
	package com.alae.programming.jpa.entity;

	import lombok.AllArgsConstructor;
	import lombok.Data;
	import lombok.NoArgsConstructor;

	import javax.persistence.*;

	@Entity
	@Table(name = "employees")
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public class Employee {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id")
		private int id;

		@Column(name = "first_name")
		private String firstName;

		@Column(name = "last_name")
		private String lastName;

		@Column(name = "email")
		private String email;
	}
	```

* Create the *DAO* interface **EmployeeDao**

	```java
	package com.alae.programming.jpa.dao;

	import java.util.List;

	import com.alae.programming.jpa.entity.Employee;

	public interface EmployeeDao {

		List<Employee> findAll();
		Employee findById(int id);
		Employee save(Employee employee);
		Employee deleteById(int id);
		void deleteAll();

	}
	```

* Create the first *DAO* implmenetation using **Hibernate**

	```java
	package com.alae.programming.jpa.dao;

	import java.util.List;

	import javax.persistence.EntityManager;

	import org.hibernate.Session;
	import org.hibernate.query.Query;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.context.annotation.Primary;
	import org.springframework.stereotype.Repository;
	import org.springframework.transaction.annotation.Transactional;

	import com.alae.programming.jpa.entity.Employee;

	@Repository
	@Primary
	public class EmployeeDaoImpl implements EmployeeDao{

		private final EntityManager entityManager;

		@Autowired
		public EmployeeDaoImpl(EntityManager entityManager){
			this.entityManager = entityManager;
		}

		@Override
		public List<Employee> findAll() {
			Session session = entityManager.unwrap(Session.class);
			Query<Employee> query = session.createQuery("from Employee ", Employee.class);
			return query.getResultList();
		}

		@Override
		public Employee findById(int id) {
			Session session = entityManager.unwrap(Session.class);

			return session.get(Employee.class, id);
		}

		@Override
		@Transactional
		public Employee save(Employee employee) {
			Session session = entityManager.unwrap(Session.class);
			session.saveOrUpdate(employee);
			return employee;
		}

		@Override
		@Transactional
		public Employee deleteById(int id) {
			Session session = entityManager.unwrap(Session.class);
			Employee employee = session.get(Employee.class, id);

			if(employee != null){
				session.delete(employee);
			}
			return employee;
		}

		@Override
		@Transactional
		public void deleteAll() {
			Session session = entityManager.unwrap(Session.class);
			session.createQuery("delete from Employee").executeUpdate();
		}
		
	}
	```


* Create the second *DAO* implementation using **JPA**

	```java
	package com.alae.programming.jpa.dao;

	import java.util.List;

	import javax.persistence.EntityManager;
	import javax.persistence.TypedQuery;
	import javax.transaction.Transactional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Repository;

	import com.alae.programming.jpa.entity.Employee;

	@Repository
	public class EmployeeDaoJpaImpl implements EmployeeDao {
		private final EntityManager entityManager;

		@Autowired
		public EmployeeDaoJpaImpl(EntityManager entityManager) {
			this.entityManager = entityManager;
		}

		@Override
		public List<Employee> findAll() {
			TypedQuery<Employee> query = entityManager.createQuery("from Employee", Employee.class);
			return query.getResultList();

		}

		@Override
		public Employee findById(int id) {
			Employee employee = entityManager.find(Employee.class, id);
			return employee;
		}

		@Override
		@Transactional
		public Employee save(Employee employee) {
			Employee dbEmployee = entityManager.merge(employee);
			return dbEmployee;
		}

		@Override
		@Transactional
		public Employee deleteById(int id) {

			Employee employee = entityManager.find(Employee.class, id);
			if (employee != null) {
				entityManager.remove(employee);
			}

			return employee;
		}

		@Override
		@Transactional
		public void deleteAll() {
			entityManager.createQuery("delete from Employee").executeUpdate();
			
		}
	}
	```


* Create the *service* interface **EmployeeService**

	```java
	package com.alae.programming.jpa.service;

	import java.util.List;

	import com.alae.programming.jpa.entity.Employee;

	public interface EmployeeService {
		List<Employee> findAll();
		Employee findById(int id);
		Employee save(Employee employee);
		Employee deleteById(int id);
	}
	```

* Create the *service* impl **EmployeeServiceImpl**

	```java
	package com.alae.programming.jpa.service;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.beans.factory.annotation.Qualifier;
	import org.springframework.stereotype.Service;
	import org.springframework.transaction.annotation.Transactional;

	import com.alae.programming.jpa.dao.EmployeeDao;
	import com.alae.programming.jpa.entity.Employee;


	@Service
	public class EmployeeServiceImpl implements EmployeeService{

		private final EmployeeDao employeeDao;

		@Autowired
		public EmployeeServiceImpl(EmployeeDao employeeDao){
			this.employeeDao = employeeDao;
		}

		@Override
		@Transactional
		public List<Employee> findAll() {
			return employeeDao.findAll();
		}

		@Override
		@Transactional
		public Employee findById(int id) {
			return employeeDao.findById(id);
		}

		@Override
		@Transactional
		public Employee save(Employee employee) {
			return employeeDao.save(employee);
		}

		@Override
		@Transactional
		public Employee deleteById(int id) {
			return employeeDao.deleteById(id);
		}
	}
	```

* Add this *bean* to the class annotated with **@SpringBootApplication**

	```java
	@Bean
	CommandLineRunner initDatabase(EmployeeDao employeeDao) {
		return args -> {
			employeeDao.deleteAll();
			
			employeeDao.save(new Employee(0, "alae", "touba", "alae@gmail.com"));
			employeeDao.save(new Employee(0, "yassine", "capitos", "yassine@gmail.com"));
		};
	}
	```

	This will delete all employees in the DB and insert two new ones at each app startup. 

* Lets create the **API endpoints** in the class **EmployeeRestController**

	```java
	package com.alae.programming.jpa.rest;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import com.alae.programming.jpa.entity.Employee;
	import com.alae.programming.jpa.service.EmployeeService;

	@RestController
	@RequestMapping("/api/employees")
	public class EmployeeRestController {

		private final EmployeeService employeeService;

		@Autowired
		public EmployeeRestController(EmployeeService employeeService){
			this.employeeService = employeeService;
		}

		@GetMapping(path = "")
		public List<Employee> findAll(){
			return employeeService.findAll();
		}

		@GetMapping(path = "/{employeeId}")
		public Employee findById(@PathVariable int employeeId){
			return employeeService.findById(employeeId);
		}

		@PostMapping(path = "")
		public Employee save(@RequestBody Employee employee){
			//If id is 0, save will add the object to DB
			//Else, it will just update it
			employee.setId(0); 
			return employeeService.save(employee);
		}

		@PutMapping(path = "")
		public Employee update(@RequestBody Employee employee){
			return employeeService.save(employee);
		}

		@DeleteMapping(path = "/{employeeId}")
		public Employee delete(@PathVariable int employeeId){
			return employeeService.deleteById(employeeId);
		}
	}
	```

* From eclipse, head tp the class annotated with **@SpringBootApplication** and run as -> Java App

* Test the API, example: GET http://localhost:8080/project/api/employees?mediaType=xml