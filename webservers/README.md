- [CodeJava Apache Tomcat youtube tutorial](#codejava-apache-tomcat-youtube-tutorial)
	- [What is Apache Tomcat](#what-is-apache-tomcat)
	- [Install Apache Tomcat on Windows](#install-apache-tomcat-on-windows)
	- [Tomcat's Key directories and files](#tomcats-key-directories-and-files)
	- [Start/Stop Tomcat](#startstop-tomcat)
	- [Deploy a Java Web app into Tomcat](#deploy-a-java-web-app-into-tomcat)
	- [Add and use tomcat to Eclipse EE](#add-and-use-tomcat-to-eclipse-ee)
	- [Deploy a web app in Tomcat in Eclipse EE](#deploy-a-web-app-in-tomcat-in-eclipse-ee)

# CodeJava Apache Tomcat youtube tutorial

## What is Apache Tomcat

* Tomcat is a server for hosting web apps
* Free & open source
* Supports Java technologies:
    * Java Servlet
    * JavaServer pages (JSP)
    * Java Expression Language (EL)
    * Java Websocket
* Also called a Servlet container
* Developed by Apache software fondation
  
website: tomcat.apache.org

## Install Apache Tomcat on Windows 
	
* We will install Tomcat 9. it supports the following Specs:
    * Servlets 4.0
    * JSP 2.3
    * EL 3.0
    * WebSocket 1.1
    
* Java 1.8 is required for it.

* Install Steps:
    1. head to tomcat.apache.org and click the Downloads link (for tomcat version 1. download the Windows service installer

        ![](imgs/1.png)      

    2. run the .exe file to install
    3. check all the boxes in the Choose components wizard

        ![](imgs/2.PNG)
       
    4. configure Tomcat (port number, manager username/password)

       ![](imgs/3.png)

    5. select the Java virtual machine path (tomcat 9 requires Java 1.8 and above)

        ![](imgs/4.PNG)   

    6. specify the tomcat installation destination directory

        ![](imgs/5.PNG)
    
    7. add a new Envirenment variable CATALINA_HOME with tomcat installation directory as value

        ![](imgs/6.png)

    8. check if tomcat is successfully installed by going to localhost:8080

        ![](imgs/7.png)

## Tomcat's Key directories and files

* **/bin:** startup, shutdow … scripts
* **/conf:** configuration files
* **/lib:** Tomcat's jar files (servlet api jar, jsp api jar, etc) and external libraries
* **/logs:** log files
* **/temp:** temporary files used by the JVM
* **/webapps:** deployed Java web apps
* **/work**: temporary files for deployed web apps
    
## Start/Stop Tomcat

* using Windows services app
    * open windows services app 
    * search for Tomcat and then start/stop as a windows service

        ![](imgs/8.png)

* using the Tomcat Monitor program
    * head to tomcat bin folder and run Tomcat9.exe 

        ![](imgs/9.PNG)

        ![](imgs/10.png)

* using startup.bat/    
	* from command line, head to bin folder and run the batch file startup.bat

		![](imgs/11.png)

## Deploy a Java Web app into Tomcat

* In order to deply java web apps in tomcat, you need to package the app in a WAR format.
* **WAR**: standard zip file that contains resources/files for a Java web app 
	
* There 2 ways to deploy WAR files in Tomcat:
	* **static deploy** (can be used when having direct access to the server directory):
    	1. stop server
    	2. copy the app's WAR to webapps
    	3. restart the server
		
		&nbsp;

		* example:
			* we will deploy an app for which we have the WAR file.
			* copy the war file to webapps tomcat directory
				
				![](imgs/12.png)

			* start the server and go to app manager (localhost:8080/manager) and see that the app is deployed

				![](imgs/13.png)

			* to test it go to localhost:8080/FormHandlingServlet/FormDemo.html

				![](imgs/14.png)

			
	* **Hot deploy** using Tomcat manager app
		1. head to tomcat server manager app (localhost:8080/manager)
		1. in the section "War file to deploy" upload your WAR file and click Deploy

			![](imgs/15.png)


## Add and use tomcat to Eclipse EE

* click on the link available under Servers tab 

	![](imgs/16.PNG)

* Select the server type and choose the version of Tomcat that you installed in the machine

	![](imgs/17.png)

* choose server name (whatever), tomcat installation directory and JDK version you are working with

	![](imgs/18.png)

* now the server will available for use
	
	![](imgs/19.png)

* Double click on the server and change the Tomcat admin port (give a valid port number)

	![](imgs/20.png)

## Deploy a web app in Tomcat in Eclipse EE

There are 3 ways to do this

1. first method, Drag and drop the project from package explorer to the Tomcat server, you will see the project like this

	![](imgs/21.png)

	Now you can just head to https://localhost:8080/first-dynamic-web-project and see that the project is deployed

	![](imgs/22.png)


1. 	2. second method, right click on the tomcat server instance under **Servers** tab and add the project

	![](imgs/23.png)

	![](imgs/24.png)


1. third method, from *Project explorer*, right click on the project -> Properties -> Targeted Runtimes -> choose tomcat server

	![](imgs/25.png)

