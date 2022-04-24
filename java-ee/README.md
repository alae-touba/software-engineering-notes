
## Les balises de la techno jsp
* commentaires
    
    ```jsp
    <%-- et --%>
    ```    

* Balises de déclaration: déclarer des variable/méthodes à l'intérieur d'une JSP
    
    ```jsp
    <%! String chaine = "Salut les zéros.";  %>
    <%! 
        String test = null;
        public boolean jeSuisUnZero() {
            return true;
        }
    %>
    ```

* Balises de scriptlet: code java

    ```jsp
    <%
        for(int i = 1; i < 3; i++){
            out.println("Numéro " + i);
        }
    %>
    ```

* Balises d'expression	//elle retourne simplement le contenue de la chaine

    ```jsp
    <%= "Bip bip !" %>      //<=> <% out.println("Bip bip !"); %>
    ```

## jsp: les directives

* Les directives JSP permettent:
  
    * d'importer un package ;
    * d'inclure d'autres pages JSP ;
    * d'inclure des bibliothèques de balises
    * de définir des propriétés et informations relatives à une page JSP.

    Pour généraliser, elles contrôlent comment le conteneur de servlets va gérer votre JSP. Il en existe trois : taglib, page et include. 
    Elles sont toujours comprises entre les balises <%@ et %>, et hormis la directive d'inclusion de page qui peut être placée n'importe où, elles sont à placer en tête de page JSP.

* directive **taglib**:
  
    ```jsp
    <%@ taglib uri="maTagLib.tld" prefix="tagExemple" %>
    ```    

* directive **page**:
  
    définit des informations relatives à la page JSP.

    * exemple:
        ```jsp
        <%@ page import="java.util.List, java.util.Date"  %>        
        ```
        
        pour importer des packages si nous allons les utiliser dans la page jsp.

    * voila tous les infos qui peuvent etre dans cette directive:

        ```jsp
        <%@ page 
            language="..."      //java
            extends="..." 
            import="..."        //importer des package
            session="true | false" 
            buffer="none | 8kb | sizekb" 
            autoFlush="true | false" 
            isThreadSafe="true | false" 
            isELIgnored ="true | false"
            info="..." 
            errorPage="..."         //indication d'un nom d'une page d'erreur a la quelle nous allons se rederiger si qlq une exception/erreur se produit ici
            contentType="..."       
            pageEncoding="..."      //utf-8 par ex
            isErrorPage="true | false"  //est ce que c'est une page d'erreur. 
        %> 
        ```

* directive **include**: 
    
    inclure un fichier jsp dans un autre
    
    ```jsp
    <%@ include file="uneAutreJSP.jsp" %>   
    ```

    copier coller de uneAutreJSP.jsp vers la page jsp courante.