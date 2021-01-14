- [Hibernate](#hibernate)
  
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

            <!-- create table if they dont exist (automatically), otherwise update-->
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

            <!-- create table if they dont exist (automatically), otherwise update-->
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

    notice that i didnt specify the primary key and it will be generated AUTOmatically (*@GeneratedValue(strategy = GenerationType.AUTO)).

    Here is a look at the table that gets created and populated.

    ![](imgs/001.png)


* create a class named: **ReadStudentDemo**
    
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