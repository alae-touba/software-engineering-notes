- [Hibernate](#hibernate)
  - [set up a java project to work with hibernate (using maven quickstart)](#set-up-a-java-project-to-work-with-hibernate-using-maven-quickstart)
  - [Hibernate CRUD operations](#hibernate-crud-operations)
  - [hibernate one to one mapping (unidirictional)](#hibernate-one-to-one-mapping-unidirictional)
  - [hiberanate one to one mapping (bidirictional)](#hiberanate-one-to-one-mapping-bidirictional)
  - [hibernate OneToMany mapping (bidirectional)](#hibernate-onetomany-mapping-bidirectional)


# Hibernate


## set up a java project to work with hibernate (using maven quickstart)

* create a maven quick start project

* add dependencies to: mysql connector, hibernate orm

* create a database named: **hibernate-testing-db**

* create the hibernate configuration file: **hibernate.cfg.xml** inside **src/main/resources** (or inside any folder that is in the classpath)

    ```xml
    <!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

    <hibernate-configuration>

        <session-factory>

            <!-- JDBC Database connection settings -->
            <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="connection.url">jdbc:mysql://localhost:3306/hibernate-testing-db</property>
            <property name="connection.username">root</property>
            <property name="connection.password"></property>

            <!-- JDBC connection pool settings ... using built-in test pool -->
            <property name="connection.pool_size">100</property>

            <!-- Select our SQL dialect -->
            <property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>

            <!-- Echo the SQL to stdout -->
            <property name="show_sql">true</property>

            <!-- Set the current session context -->
            <property name="current_session_context_class">thread</property>

            <!-- create tables if they dont exist (automatically), otherwise update-->
            <property name="hbm2ddl.auto">update</property>
        </session-factory>

    </hibernate-configuration>
    ```

* create the entity: a class named **Student**:
    
    ```java
    package org.example;

    import javax.persistence.*;

    @Entity
    @Table(name = "students")
    public class Student {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private String email;

        public Student(){}

        public Student(String firstName, String lastName, String email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        @Override
        public String toString() {
            return "Student{" +
                    "id=" + id +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
    ```

    **@GeneratedValue(strategy = GenerationType.AUTO)** indicates that the persistence provider should automatically pick an appropriate strategy for the particular database. This is the default GenerationType, i.e. if we just use @GeneratedValue annotation then this value of GenerationType will be used.

* create the Main class class (named **App**) to test this:
    
    ```java
    package org.example;


    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;


    public class App {
        public static void main( String[] args ) {

            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {
                // create a student object
                System.out.println("Creating new student object...");
                Student tempStudent = new Student("alae", "touba", "alae@gmail.com");

                // start a transaction
                session.beginTransaction();

                // save the student object
                System.out.println("Saving the student...");
                session.save(tempStudent);

                // commit transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }
    }
    ```

after executing the code we will notice that the table "students" gets created automatically and after each execution it gets updated!


## Hibernate CRUD operations

* set up a java project to work with hibernate (using maven quickstart)

* create a maven quick start project

* add dependencies to: mysql connector, hibernate orm

* create a database named: **hibernate-testing-db**

* create the hibernate configuration file: **hibernate.cfg.xml** inside **src/main/resources** (or inside any folder that is in the classpath)

    ```xml
    <!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

    <hibernate-configuration>

        <session-factory>

            <!-- JDBC Database connection settings -->
            <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="connection.url">jdbc:mysql://localhost:3306/hibernate-testing-db</property>
            <property name="connection.username">root</property>
            <property name="connection.password"></property>

            <!-- JDBC connection pool settings ... using built-in test pool -->
            <property name="connection.pool_size">100</property>

            <!-- Select our SQL dialect -->
            <property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>

            <!-- Echo the SQL to stdout -->
            <property name="show_sql">true</property>

            <!-- Set the current session context -->
            <property name="current_session_context_class">thread</property>

            <!-- create tables if they dont exist (automatically), otherwise update-->
            <property name="hbm2ddl.auto">update</property>
        </session-factory>

    </hibernate-configuration>
    ```

* create the entity: a class named **Student**:
    
    ```java
    package org.example;

    import javax.persistence.*;

    @Entity
    @Table(name = "students")
    public class Student {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private String email;

        public Student(){}

        public Student(String firstName, String lastName, String email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        @Override
        public String toString() {
            return "Student{" +
                    "id=" + id +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
    ```

    **@GeneratedValue(strategy = GenerationType.AUTO)** indicates that the persistence provider should automatically pick an appropriate strategy for the particular database. This is the default GenerationType, i.e. if we just use @GeneratedValue annotation then this value of GenerationType will be used.


Now for each operation (i.e delete, read, update, etc) I will create a Driver class (Main class) that shows how to the operation.

* create a class named **PrimaryKeyDemo**:

    here we will see how to save entites without primary key value (primary keys will be generated automatically).

    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    public class PrimaryKeyDemo {

        public static void main(String[] args) {

            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {
                // create 3 student objects
                System.out.println("Creating 3 student objects...");
                Student s1 = new Student("alae", "touba", "alae@gmail.com");
                Student s2 = new Student("hamza", "jebbar", "hamza@jebbar.com");
                Student s3 = new Student("khalil", "elbasri", "khalil@yahoo.fr");

                // start a transaction
                session.beginTransaction();

                // save the student object
                System.out.println("Saving the students...");
                session.save(s1);
                session.save(s2);
                session.save(s3);

                // commit transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }
    }
    ```

    notice that i didnt specify the primary key and it will be generated AUTOmatically **(@GeneratedValue(strategy = GenerationType.AUTO))**.

    Here is a look at the table that gets created and populated.

    ![](imgs/001.png)


* create a class named: **ReadStudentDemo**

    here we will see how to get an entity with primary key.
    
    ```java
    package org.example;
    
    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;
    
    public class ReadStudentDemo {
        public static void main(String[] args) {
            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {
                int id = 1;

                session.beginTransaction();

                // retrieve student based on the id: primary key
                System.out.println("\nGetting student with id: " + id);

                Student student = session.get(Student.class, id);

                System.out.println("Get complete: " + student);

                // commit the transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }
    }
    ```

    Here is the Output in the console:
    ```
    ....
    Get complete: Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    Done!
    ```

* create a class named **QueryStudentsDemo**:
    
    we will see how to use HQL (hibernate query language) to query students.

    ```java
    package org.example;

    import java.util.List;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    import javax.persistence.TypedQuery;

    public class QueryStudentDemo {

        public static void main(String[] args) {

            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {

                // start a transaction
                session.beginTransaction();

                // query students
                TypedQuery<Student> typedQuery = session.createQuery("from Student",
                                                            Student.class);

                List<Student> students = typedQuery.getResultList();

                // display the students
                System.out.println("all students in DB");
                displayStudents(students);

                // query students: lastName='Doe'
                students = session
                                .createQuery("from Student s where s.lastName='touba'",
                                        Student.class)
                                .getResultList();

                // display the students
                System.out.println("\n\nStudents who have last name of touba");
                displayStudents(students);

                // query students: lastName='touba' OR firstName='hamza'
                students = session
                                .createQuery("from Student s where"
                                    + " s.lastName='touba' OR s.firstName='hamza'",
                                        Student.class)
                                .getResultList();

                System.out.println("\n\nStudents who have lastname of touba OR firstname of hamza");
                displayStudents(students);

                // query students where email LIKE '%gmail.com'
                students = session
                                .createQuery("from Student s where"
                                        + " s.email LIKE '%gmail.com'", Student.class)
                                .getResultList();

                System.out.println("\n\nStudents whose email ends with gmail.com");
                displayStudents(students);

                // commit transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }

        private static void displayStudents(List<Student> students) {
            for (Student tempStudent : students) {
                System.out.println(tempStudent);
            }
        }
    }
    ``` 

    Here is the ouput in the console:
    
    ```bash
    all students in DB
    Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    Student{id=2, firstName='hamza', lastName='jebbar', email='hamza@jebbar.com'}
    Student{id=3, firstName='khalil', lastName='elbasri', email='khalil@yahoo.fr'}
    ...

    Students who have last name of touba
    Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    ...

    Students who have lastname of touba OR firstname of hamza
    Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    Student{id=2, firstName='hamza', lastName='jebbar', email='hamza@jebbar.com'}
     ...

    Students whose email ends with gmail.com
    Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    ```

* create a class named **DeleteStudentDemo**:
    
    we will see how to delete an entity using primary key and using a query (HQL)

    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;
    public class DeleteStudentDemo {

        public static void main(String[] args) {

            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {
                int id = 1;

                session.beginTransaction();

                // retrieve student based on the id: primary key
                System.out.println("\nGetting student with id: " + id);

                Student myStudent = session.get(Student.class, id);

                // delete the student
                System.out.println("Deleting student: " + myStudent);
                session.delete(myStudent);

                session.getTransaction().commit();

                // delete student id=2
                System.out.println("Deleting student id=2");
                id = 2;

                session = factory.getCurrentSession();
                session.beginTransaction();
                session.createQuery("delete from Student where id=2").executeUpdate();

                // commit the transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }
    }
    ```

    here is the console's output:
    
    ```bash
    Getting student with id: 1
    ...
    Deleting student: Student{id=1, firstName='alae', lastName='touba', email='alae@gmail.com'}
    ...
    Deleting student id=2
    ...
    Done!
    ```

    now if we go and see the content of the database we will see that the users with id 1 and 2 are gone.

* create a class named **UpdateStudentDemo**
    we will see how easy to get an entity with its primary key and update it and also how to use HQL to update multiple entities.


    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    public class UpdateStudentDemo {

        public static void main(String[] args) {

            // create session factory
            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();

            // create session
            Session session = factory.getCurrentSession();

            try {
                int id = 1;

                session.beginTransaction();

                // retrieve student based on the id: primary key
                System.out.println("\nGetting student with id: " + id);

                Student myStudent = session.get(Student.class, id);

                System.out.println("Updating student...");
                myStudent.setFirstName("Scooby");

                // commit the transaction
                session.getTransaction().commit();

                // NEW CODE
                session = factory.getCurrentSession();
                session.beginTransaction();

                // update email for all students
                System.out.println("Update email for all students");

                session.createQuery("update Student set email='foo@gmail.com'")
                        .executeUpdate();

                // commit the transaction
                session.getTransaction().commit();

                System.out.println("Done!");
            }
            finally {
                factory.close();
            }
        }
    }
    ```

    here is how the db looks like now

    ![](imgs/002.png)

## hibernate one to one mapping (unidirictional)

This is a full example of OneToOne.

We will have two tables:\
**instructors** (id, first_name, last_name, email, instructor_detail_id) \
**instructors_details**(id, youtube_channel, hobby)
		
a constructor has a constructor detail and each instructor detail belongs to only one instructor => OneToOne.

instructor_detail_id is a foreign key that references the instructor's detail in the instructor_detail table
	
This a unidirectional OneToOne, meaning that we only can go from instructor to instructor's detail

* create a maven quick start project

* add dependencies to: mysql connector, hibernate orm

* create a database named: **hibernate-testing-db** (tables will be gererated automatically)

* create the hibernate configuration file: **hibernate.cfg.xml** inside **src/main/resources** (or inside any folder that is in the classpath)

    ```xml
    <!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

    <hibernate-configuration>

        <session-factory>

            <!-- JDBC Database connection settings -->
            <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="connection.url">jdbc:mysql://localhost:3306/hibernate-testing-db</property>
            <property name="connection.username">root</property>
            <property name="connection.password"></property>

            <!-- JDBC connection pool settings ... using built-in test pool -->
            <property name="connection.pool_size">100</property>

            <!-- Select our SQL dialect -->
            <property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>

            <!-- Echo the SQL to stdout -->
            <property name="show_sql">true</property>

            <!-- Set the current session context -->
            <property name="current_session_context_class">thread</property>

            <!-- create tables if they dont exist (automatically), otherwise update-->
            <property name="hbm2ddl.auto">update</property>
        </session-factory>

    </hibernate-configuration>
    ```

* create a class named **Instructor**

    ```java
    package org.example;

    import javax.persistence.*;

    @Entity
    @Table(name = "instructors")
    public class Instructor {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id")
        private int id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private  String email;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "instructor_detail_id")
        private InstructorDetail instructorDetail;

        public Instructor(){}

        public Instructor(String firstName, String lastName, String email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public InstructorDetail getInstructorDetail() {
            return instructorDetail;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setInstructorDetail(InstructorDetail instructorDetail) {
            this.instructorDetail = instructorDetail;
        }

        @Override
        public String toString() {
            return "Instructor{" +
                    "id=" + id +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
    ```

* create a class named **InstrucotorDetail**
  
    ```java
    package org.example;


    import javax.persistence.*;

    @Entity
    @Table(name = "instructors_details")

    public class InstructorDetail {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name = "youtube_channel")
        private String youtubeChannel;

        @Column(name = "hobby")
        private String hobby;

        public InstructorDetail(){}

        public InstructorDetail(String youtubeChannel, String hobby){
            this.youtubeChannel = youtubeChannel;
            this.hobby = hobby;
        }

        public int getId() {
            return id;
        }

        public String getYoutubeChannel() {
            return youtubeChannel;
        }

        public String getHobby() {
            return hobby;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setYoutubeChannel(String youtubeChannel) {
            this.youtubeChannel = youtubeChannel;
        }

        public void setHobby(String hobby) {
            this.hobby = hobby;
        }

        @Override
        public String toString() {
            return "InstructorDetail{" +
                    "id=" + id +
                    ", youtubeChannel='" + youtubeChannel + '\'' +
                    ", hobby='" + hobby + '\'' +
                    '}';
        }
    }
    ```

* (creating an instructor with its instructor detail) create a Main class:

    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    public class Main {
        public static void main(String[] args) {

            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Instructor.class)
                    .addAnnotatedClass(InstructorDetail.class)
                    .buildSessionFactory();

            Session session = factory.getCurrentSession();

            try{
                //create instuctor
                Instructor instructor = new Instructor("alae", "touba", "alae@gmail.com");

                //create instructor's detail
                InstructorDetail instructorDetail = new InstructorDetail("www.youtube.com/channel",
                        "programming");

                //link them
                instructor.setInstructorDetail(instructorDetail);

                session.beginTransaction();

                //save the instructor object in the instructors table
                //=> this will save also the instuctorDetail object in instructors_details table
                // because of CASCADING
                session.save(instructor);

                session.getTransaction().commit();
            }finally {
                factory.close();
            }
        }
    }
    ```

    we created an instance of the **Instructor** class and an instance of the **InstructorDetail** class and then we linked them togeter and we save the **Instructor** instance. After executing the code both instances will be saved saved to the DB into 2 different tables (instructors).

    Here is the content of the DB:

    ![](imgs/003.png)   



* creating only an instructor
    
    ```java
    session.beginTransaction();
    Instructor instructor = new Instructor("yassine", "capitos", "yassine@gmail.com");
	session.save(instructor);
    session.getTransaction().commit();
    ```
    ![](imgs/004.png)
    
    notice the column **instructor_detaill_id** is NULL.

* creating a instructor detail and linking it to an existing instructor in the db
    
    we will link this instructor detail to the previous instructor (yassine)

    ```java
    session.beginTransaction();
    
    InstructorDetail instructorDetail = new InstructorDetail("youtube", "video games");
    Instructor instructor = session.get(Instructor.class, 1);
    instructor.setInstructorDetail(instructorDetail);
    
    session.getTransaction().commit();
    ```

    ![](imgs/005.png)

* deleting an instructor:

    ```java
    session.beginTransaction();
    Instructor instructor = session.get(Instructor.class, 1);

    //test if instructor with id 1 exists in the DB because get returns null if it founds nothing
    if(instructor != null){
        // delete the instructor with id 1 from the instructors table
        // => this will also delete the instructor detail associated with this instructor
        // from the instructors_details table because of cascading deletes
        session.delete(instructor);
    }

    session.getTransaction().commit();
    ```    

    we got the instructor with id 1 and we deleted it from **instructors** table, this will also delete its associated detail from **instructors_details** table.

    ![](imgs/006.png)


* deleting an instructor's details

    ```java
    session.beginTransaction();

    //getting the instructor
    Instructor instructor = session.get(Instructor.class, instructorId);   

    //getting the instructor's detail
    InstructorDetail instructorDetail = instructor.getInstructorDetail();  

    //breaking the link
    instructor.setInstructorDetail(null); 

    //deleting the instructor's detail
    session.delete(instructorDetail); 	

    session.getTransaction().commit();
    ```

* updating an instructor
    
    ```java
    session.beginTransaction();

    Instructor instructor = session.get(Instructor.class, instructorId);
    instructor.setFirstName("alex");

    session.getTransaction().commit();
    ```
    
    
* updating an instructor detail
	
	* method1: directly by its id (<=>instructor's detail id):
    
        ```java
		session.beginTransaction();

		InstructorDetail instructorDetail = session.get(InstructorDetail.class, instructorDetailId);
		instructorDetail.setYoutubeChannel("youtube/channel01");

		session.getTransaction().commit();
        ```

	* method2: by the instructor:

        ```java
        session.beginTransaction();

        //getting the instructor
        Instructor instructor = session.get(Instructor.class, instructorId);	

        //getting its instructor detail and modifyng it
        instructor.getInstructorDetail().setYoutubeChannel("youtube");	

        session.getTransaction().commit();
        ```
        

## hiberanate one to one mapping (bidirictional)

We will have two tables in the db:\
**instructors** (id, first_name, last_name, email, instructor_detail_id) \
**instructors_details**(id, youtube_channel, hobby)
		
a constructor has a constructor detail and each instructor detail belongs to only one instructor => OneToOne.

instructor_detail_id is a foreign key that references the instructor's detail in the instructor_detail table


This relationship will be bidirictioanl which means we can go from an instructor to its instructors details and vice versa.

* create a maven quick start project

* add dependencies to: mysql connector, hibernate orm

* create a database named: **hibernate-testing-db** (tables will be gererated automatically)

* create the hibernate configuration file: **hibernate.cfg.xml** inside **src/main/resources** (or inside any folder that is in the classpath)

    ```xml
    <!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

    <hibernate-configuration>

        <session-factory>

            <!-- JDBC Database connection settings -->
            <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="connection.url">jdbc:mysql://localhost:3306/hibernate-testing-db</property>
            <property name="connection.username">root</property>
            <property name="connection.password"></property>

            <!-- JDBC connection pool settings ... using built-in test pool -->
            <property name="connection.pool_size">100</property>

            <!-- Select our SQL dialect -->
            <property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>

            <!-- Echo the SQL to stdout -->
            <property name="show_sql">true</property>

            <!-- Set the current session context -->
            <property name="current_session_context_class">thread</property>

            <!-- create tables if they dont exist (automatically), otherwise update-->
            <property name="hbm2ddl.auto">update</property>
        </session-factory>

    </hibernate-configuration>
    ```

* create a class named **Instructor**

    ```java
    package org.example;

    import javax.persistence.*;

    @Entity
    @Table(name = "instructors")
    public class Instructor {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id")
        private int id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private  String email;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "instructor_detail_id")
        private InstructorDetail instructorDetail;

        public Instructor(){}

        public Instructor(String firstName, String lastName, String email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public InstructorDetail getInstructorDetail() {
            return instructorDetail;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setInstructorDetail(InstructorDetail instructorDetail) {
            this.instructorDetail = instructorDetail;
        }

        @Override
        public String toString() {
            return "Instructor{" +
                    "id=" + id +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
    ```

* create a class named **InstrucotorDetail**
  
    ```java
    package org.example;


    import javax.persistence.*;

    @Entity
    @Table(name = "instructors_details")

    public class InstructorDetail {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name = "youtube_channel")
        private String youtubeChannel;

        @Column(name = "hobby")
        private String hobby;

        @OneToOne(mappedBy = "instructorDetail", cascade = CascadeType.ALL)
        private Instructor instructor;

        public InstructorDetail(){}

        public InstructorDetail(String youtubeChannel, String hobby){
            this.youtubeChannel = youtubeChannel;
            this.hobby = hobby;
        }

        public int getId() {
            return id;
        }

        public String getYoutubeChannel() {
            return youtubeChannel;
        }

        public String getHobby() {
            return hobby;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setYoutubeChannel(String youtubeChannel) {
            this.youtubeChannel = youtubeChannel;
        }

        public void setHobby(String hobby) {
            this.hobby = hobby;
        }

        public Instructor getInstructor() {
            return instructor;
        }

        public void setInstructor(Instructor instructor) {
            this.instructor = instructor;
        }

        @Override
        public String toString() {
            return "InstructorDetail{" +
                    "id=" + id +
                    ", youtubeChannel='" + youtubeChannel + '\'' +
                    ", hobby='" + hobby + '\'' +
                    '}';
        }
    }
    ```

* creating instructor and its instructor detail
    same as one to one unid

	```java
    //create instuctor
    Instructor instructor = new Instructor("alae", "touba", "alae@gmail.com");

    //create instructor's detail
    InstructorDetail instructorDetail = new InstructorDetail("www.youtube.com/channel",
            "programming");

    //link them
    instructor.setInstructorDetail(instructorDetail);

    session.beginTransaction();

    //save the instructor object in the instructors table
    //=> this will save also the instuctorDetail object in instructors_details table
    // because of CASCADING
    session.save(instructor);

    session.getTransaction().commit();
    ```
* creating an instructor
	same as OneToOne uni
    ```java
    session.beginTransaction();
    Instructor instructor = new Instructor("yassine", "capitos", "yassine@gmail.com");
	session.save(instructor);
    session.getTransaction().commit();
    ```
* creating an instructor detail and linking it to an existing instructor in the db
	same as OneToOne uni
    
    ```java
     session.beginTransaction();
    
    InstructorDetail instructorDetail = new InstructorDetail("youtube", "video games");
    Instructor instructor = session.get(Instructor.class, 1);
    instructor.setInstructorDetail(instructorDetail);
    
    session.getTransaction().commit();
    ```
* updating an instructor
	same as OneToOne uni

    ```java
    session.beginTransaction();

    Instructor instructor = session.get(Instructor.class, instructorId);
    instructor.setFirstName("alex");

    session.getTransaction().commit();    
    ```
* updating an instructor detail
	same as OneToOne uni

    * method1: directly by its id (<=>instructor's detail id):
    
        ```java
		session.beginTransaction();

		InstructorDetail instructorDetail = session.get(InstructorDetail.class, instructorDetailId);
		instructorDetail.setYoutubeChannel("youtube/channel01");

		session.getTransaction().commit();
        ```

	* method2: by the instructor:

        ```java
        session.beginTransaction();

        //getting the instructor
        Instructor instructor = session.get(Instructor.class, instructorId);	

        //getting its instructor detail and modifyng it
        instructor.getInstructorDetail().setYoutubeChannel("youtube");	

        session.getTransaction().commit();
        ```

* get the instructor from the instructor detail object

    here is what we have in the db now:

    ![](imgs/007.png)

    ```java
    int instructorDetailId = 6;

    session.beginTransaction();

    //get the instructor's detail from table (instructors_details)
    InstructorDetail instructorDetail = session.get(InstructorDetail.class, instructorDetailId);

    if(instructorDetail != null){
        // get the instructor
        Instructor instructor = instructorDetail.getInstructor();

        System.out.println(instructorDetail);
        System.out.println(instructor);
    }


    session.getTransaction().commit();
    ```

    here is the output in the console:

    ```bash
    ...
    InstructorDetail{id=6, youtubeChannel='www.youtube.com/channel', hobby='programming'}
    Instructor{id=5, firstName='alae', lastName='touba', email='alae@gmail.com'}
    ```

* deleting instructor's detail (will delete instructor also)

    ```java
    int instructorDetailId = 6;

    session.beginTransaction();

    InstructorDetail instructorDetail = session.get(InstructorDetail.class, instructorDetailId);
    if(instructorDetail != null){
        // delete the instructor's detail from the instructors_details table
        // =>will also delete the instructor from the instructors table
        // because of cascade ALL that we have in the InstructorDetail class
        session.delete(instructorDetail);
    }

    session.getTransaction().commit();
    ```

* deleteing the instructor's detail without deleting the instructor
	we dont want cascading delete in the InstructorDetail.java entity
	so we will change its code to look like this
	
    ```java
    @OneToOne(mappedBy = "instructorDetail", cascade = {
            CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH
    })
    private Instructor instructor;
    ```

    now here is the code to delete the instrcutor's details (from instructors_details table) without deleting the instructor (from instructors table)

    ```java
    int instructorDetailId = 8;

    session.beginTransaction();

    InstructorDetail instructorDetail = session.get(InstructorDetail.class, instructorDetailId);

    if(instructorDetail != null){
        // remove the associated object reference
        // break bidirectional link
        instructorDetail.getInstructor().setInstructorDetail(null);

        // delete instructor detail from "instructors_details" table
        session.delete(instructorDetail);
    }

    session.getTransaction().commit();
    ```

## hibernate OneToMany mapping (bidirectional)


We will have 3 entities: Instructor, InstructorDetail, Course .

an instrcutor has one instrcutor detail and an instrcutor detail belongs to an instrcutor => one to one.

an instructor has many courses & a course belongs to only one instrucor => ManyToMany.


* create a maven quick start project

* add dependencies to: mysql connector, hibernate orm

* create a database named: **hibernate-testing-db** (tables will be generated )

* create the hibernate configuration file: **hibernate.cfg.xml** inside **src/main/resources** (or inside any folder that is in the classpath)

    ```xml
    <!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

    <hibernate-configuration>

        <session-factory>

            <!-- JDBC Database connection settings -->
            <property name="connection.driver_class">com.mysql.cj.jdbc.Driver</property>
            <property name="connection.url">jdbc:mysql://localhost:3306/hibernate-testing-db</property>
            <property name="connection.username">root</property>
            <property name="connection.password"></property>

            <!-- JDBC connection pool settings ... using built-in test pool -->
            <property name="connection.pool_size">100</property>

            <!-- Select our SQL dialect -->
            <property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>

            <!-- Echo the SQL to stdout -->
            <property name="show_sql">true</property>

            <!-- Set the current session context -->
            <property name="current_session_context_class">thread</property>

            <!-- create tables if they dont exist (automatically), otherwise update-->
            <property name="hbm2ddl.auto">update</property>
        </session-factory>

    </hibernate-configuration>
    ```
* create the **Instructor** entity

    ```java
    package org.example;

    import javax.persistence.*;
    import java.util.*;

    @Entity
    @Table(name = "instructors")
    public class Instructor {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id")
        private int id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private  String email;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "instructor_detail_id")
        private InstructorDetail instructorDetail;

        @OneToMany(mappedBy = "instructor", cascade = {
                CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH
        })
        private List<Course> courses;

        public Instructor(){}

        public Instructor(String firstName, String lastName, String email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }


        public void setId(int id) {
            this.id = id;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public InstructorDetail getInstructorDetail() {
            return instructorDetail;
        }

        public void setInstructorDetail(InstructorDetail instructorDetail) {
            this.instructorDetail = instructorDetail;
        }


        public List<Course> getCourses() {
            return courses;
        }

        public void setCourses(List<Course> courses) {
            this.courses = courses;
        }

        //convenience method
        public void addCourse(Course course){
            if(courses == null){
                courses = new ArrayList<>();
            }

            courses.add(course);
        }


        @Override
        public String toString() {
            return "Instructor{" +
                    "id=" + id +
                    ", firstName='" + firstName + '\'' +
                    ", lastName='" + lastName + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
    ```

* create the **InstructorDetail** entity

    ```java
    package org.example;


    import javax.persistence.*;

    @Entity
    @Table(name = "instructors_details")

    public class InstructorDetail {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name = "youtube_channel")
        private String youtubeChannel;

        @Column(name = "hobby")
        private String hobby;

        @OneToOne(mappedBy = "instructorDetail", cascade = {
                CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH
        })
        private Instructor instructor;


        public InstructorDetail(){}

        public InstructorDetail(String youtubeChannel, String hobby){
            this.youtubeChannel = youtubeChannel;
            this.hobby = hobby;
        }

        public int getId() {
            return id;
        }

        public String getYoutubeChannel() {
            return youtubeChannel;
        }

        public String getHobby() {
            return hobby;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setYoutubeChannel(String youtubeChannel) {
            this.youtubeChannel = youtubeChannel;
        }

        public void setHobby(String hobby) {
            this.hobby = hobby;
        }

        @Override
        public String toString() {
            return "InstructorDetail{" +
                    "id=" + id +
                    ", youtubeChannel='" + youtubeChannel + '\'' +
                    ", hobby='" + hobby + '\'' +
                    '}';
        }

        public Instructor getInstructor() {
            return instructor;
        }

        public void setInstructor(Instructor instructor) {
            this.instructor = instructor;
        }
    }
    ```

* create the **Course** entity

    ```java
    package org.example;


    import javax.persistence.*;

    @Entity
    @Table(name = "courses")
    public class Course {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id")
        private int id;

        @Column(name = "title")
        private String title;

        @ManyToOne(cascade = {
                CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH
        })
        @JoinColumn(name = "instructor_id")
        private Instructor instructor;

        public Course(String title){
            this.title = title;
        }

        public Course(){}

        public Course(String title, Instructor instructor) {
            this.title = title;
            this.instructor = instructor;
        }

        public int getId() {
            return id;
        }

        public String getTitle() {
            return title;
        }

        public void setId(int id) {
            this.id = id;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public void setInstructor(Instructor instructor) {
            this.instructor = instructor;
        }

        public Instructor getInstructor() {
            return instructor;
        }

        @Override
        public String toString() {
            return "Course{" +
                    "id=" + id +
                    ", title='" + title + '\'' +
                    '}';
        }
    }
    ```

* create an instructor and associate an instructor details to it, and also associat some courses to it

    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    public class Main {
        public static void main(String[] args) {

            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Instructor.class)
                    .addAnnotatedClass(InstructorDetail.class)
                    .addAnnotatedClass(Course.class)
                    .buildSessionFactory();

            Session session = factory.getCurrentSession();

            try{

                session.beginTransaction();

                Instructor instructor = new Instructor("yassine", "capi", "yassine gmail");

                InstructorDetail instructorDetail = new InstructorDetail("youtube", "video games");
                instructor.setInstructorDetail(instructorDetail);

                Course course1 = new Course("course1");
                Course course2 = new Course("course2");

                instructor.addCourse(course1);
                instructor.addCourse(course2);

                course1.setInstructor(instructor);
                course2.setInstructor(instructor);

                session.save(instructor);

                session.save(course1);
                session.save(course2);

                session.getTransaction().commit();
            }finally {
                factory.close();
            }
        }
    }
    ```

    here is what the DB looks like after executing this code:

    ![](imgs/008.png)

* create courses for an instructor (we have the instructor stored in the DB)

    ```java
    session.beginTransaction();

    var course = new Course("course title");
    var instructor = session.get(Instructor.class, 9);
    course.setInstructor(instructor);
    session.save(course);

    session.getTransaction().commit();
    ```

* linking an existing instructor with an existing course (we have the instructor and the course both already in the DB, we just have to link them)

    * lets create first an instructor and a course (unrelated) in the DB.

    ```java
    package org.example;

    import org.hibernate.Session;
    import org.hibernate.SessionFactory;
    import org.hibernate.cfg.Configuration;

    public class Main {
        public static void main(String[] args) {

            SessionFactory factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Instructor.class)
                    .addAnnotatedClass(InstructorDetail.class)
                    .addAnnotatedClass(Course.class)
                    .buildSessionFactory();

            Session session = factory.getCurrentSession();

            try{
                // create an instructor
                session.beginTransaction();
                Instructor yassine = new Instructor("yassine", "capitos", "yassine@gmail.com");
                session.save(yassine);
                session.getTransaction().commit();

                // create a course
                Course course = new Course("course title");
                session = factory.getCurrentSession();
                session.beginTransaction();
                session.save(course);
                session.getTransaction().commit();

                
            }finally {
                factory.close();
            }
        }
    }
    ```

    here is how the DB looks like after executing this code:

    ![](imgs/009.png)

    * lets write the code that to the association between the 2 entities

    ```java
    session.beginTransaction();

    // get the instructor
    Instructor instructor = session.get(Instructor.class, 1);

    //get the course
    Course course = session.get(Course.class, 2);

    // associate/link them
    course.setInstructor(instructor);

    session.getTransaction().commit();
    ```

    ![](imgs/010.png)

    we see in the **courses** table that that the value of the column **instructor_id** is now 1 pointing to the instructor (with id 1) in the **instructors**    


* getting all the instructor's courses

    
    ```java
    session.beginTransaction();

    int instructorId = 1;
    Instructor inst = session.get(Instructor.class, instructorId);
    List<Course> courses = inst.getCourses();
    
    session.getTransaction().commit();
    ```

* get the course's instructor:

    ```java

    session.beginTransaction();
    int courseId = 2;
    var instructor = session.get(Course.class, courseId).getInstructor();
    session.getTransaction().commit();
    ```

* updating an instructor by primary key

    ```java
    session.beginTransaction();

    int instructorId = 1;
    session.get(Instructor.class, instructorId).setFirstName("new first name");

    session.getTransaction().commit();
    ```
 
* updating a course by PK:
    
    ```java
    session.beginTransaction();

    int courseId = 2;
    session.get(Course.class, courseId).setTitle("new title");

    session.getTransaction().commit();
    ```

* updating an instructor from some of its courses

    ```java
    session.beginTransaction();

    Course course = session.get(Course.class, 2);
    course.getInstructor().setFirstName("alae");

    session.getTransaction().commit();
    ```

* updating a course from its instructor

    ```java
    session.beginTransaction();

    Instructor instructor = session.get(Instructor.class, 1);

    //updating the first course
    // in the list of instructor's courses
    instructor.getCourses().get(0).setTitle("title changed");
    session.getTransaction().commit();
    ```

* delete a course (this wont delete the instructor becuase we dont have cascading delete)

    ```java
    int courseId = 2;

    session.beginTransaction();

    Course course = session.get(Course.class, courseId);

    if (course != null){
        session.delete(course);
    }

    session.getTransaction().commit();
    ```


* delete an instructor without deleting its courses (because we dont have a cascade delete in instructor's courses)

    ```java
    session.beginTransaction();

    Instructor instructor = session.get(Instructor.class, 1);

    // breaking the links between courses and their instructor
    instructor.getCourses().forEach((course) -> course.setInstructor(null));

    session.delete( instructor );

    session.getTransaction().commit();
    ```

* delete an instructor and all its courses 
	* we must have cascading delete, so change the Instructor entity like this

        ```java
		@OneToMany(mappedBy = "instructor", cascade = CascadeType.ALL)
		private List<Course> courses;
        ```
	
	* code:

        ```java
        session.beginTransaction();
        int intstructorId = 10;
        session.delete( session.get(Instructor.class, instructorId) );
        session.getTransaction().commit();
        ```