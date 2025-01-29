# practical: use nginx as a reverse proxy in windows

the spring boot project is called restapi. Inside of Documents\tests

```bash

#create a spring boot project with web dep
group id    : com.example
artifcat id : restapi
name        : restapi

#change the code of the main class like so:
@SpringBootApplication
@RestController
public class RestapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestapiApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello world";
    }
}

# build the app and run it
./mvnw clean package -DskipTests=true
java -jar target/restapi-0.0.1-SNAPSHOT.jar --server.port=8082

# test the app
curl http://localhost:8082/hello

StatusCode        : 200
StatusDescription :
Content           : hello world
RawContent        : HTTP/1.1 200
                    Keep-Alive: timeout=60
                    Connection: keep-alive
                    Content-Length: 11
                    Content-Type: text/plain;charset=UTF-8
                    Date: Tue, 24 Sep 2024 11:15:05 GMT

                    hello world
Forms             : {}
Headers           : {[Keep-Alive, timeout=60], [Connection, keep-alive], [Content-Length, 11], [Content-Type, text/plain;charset=UTF-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 11

# donwload ngnix on windows from https://nginx.org/en/download.html
# extract the zip to a directory
# for me its on C:\Program Files\nginx-1.24.0

# cd to nginx installation directory
cd C:\Program Files\nginx-1.24.0
	
# start ngnix
start nginx.exe
	
# make sure its working
curl http://localhost

# we must change the content of the file conf\ngnix.conf
# delete everything inside it and replace it with:
events {
    worker_connections  1024;
}


http {
    
    server {
        listen 80;
        listen [::]:80;

        # where nginx is deployed
        server_name localhost;


        location / {
            # sets the Host header of the proxied request to
            # the value of the host header sent by the client.
            proxy_set_header Host $host;
            
            # sets the X-Real-IP header of the proxied request to 
            # the value of the IP address of the client.
            proxy_set_header X-Real-IP $remote_addr;
        
            # specify the server we wanna proxy to 
            # == the proxied server == the origin server
            # where the actual app is deployed
            proxy_pass http://localhost:8082;
        }
    }

}

# check that there are no  syntax errors in the configuration provided
nginx.exe -t

=>
nginx: the configuration file C:\Program Files\nginx-1.24.0/conf/nginx.conf syntax is ok
nginx: configuration file C:\Program Files\nginx-1.24.0/conf/nginx.conf test is successful

# after modifying the nginx.conf file
# you should releoad the nginx configuration and check for errors:
nginx.exe -s reload

#now you use nginx as a proxy to your web app
curl http://localhost/hello

StatusCode        : 200
StatusDescription :
Content           : hello world
RawContent        : HTTP/1.1 200
                    Connection: keep-alive
                    Content-Length: 11
                    Content-Type: text/plain;charset=UTF-8
                    Date: Tue, 24 Sep 2024 11:29:49 GMT
                    Server: nginx/1.24.0

                    hello world
Forms             : {}
Headers           : {[Connection, keep-alive], [Content-Length, 11], [Content-Type, text/plain;charset=UTF-8], [Date, Tue, 24 Sep 2024 11:29:49 GMT]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 11

http://localhost is equivalent to http://localhost:80 and it is where ngnix is running

# stop nginx (une one of the two commands)
TASKKILL /F /IM "nginx*"
nginx.exe -s stop

# verify nginx is running: see all nginx processes
tasklist /fi "imagename eq nginx.exe"

 
```

security mesure: the spring boot app must accept requests only from [localhost](http://localhost) and not 0.0.0.0, so that we are sure that its accepting requests only from nginx while proxying and not the outside world.