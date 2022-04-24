
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


## <jsp:useBean>, <jsp:getProperty>, <jsp:setProperty>

* pour créer et utiliser de objets java beans dans les pages jsp:

* ex (ceci ce fait a l'interieure d'une page jsp):

    ```jsp
    <%-- L'action suivante récupère un bean de type Coyote et nommé "coyote" dans la portée requête s'il existe, ou en crée un sinon. --%>
    <jsp:useBean id="coyote" class="com.sdzee.beans.Coyote" scope="request" />
    
    <%-- L'action suivante affiche le contenu de la propriété 'prenom' du bean 'coyote' : --%>
    <jsp:getProperty name="coyote" property="prenom" />
    
    <%-- L'action suivante associe une valeur à la propriété 'prenom' du bean 'coyote' : --%>
    <jsp:setProperty name="coyote" property="prenom" value="Wile E." />
    
    <%-- L'action suivante associe directement la valeur récupérée depuis le paramètre de la requête nommé ici 'prenomCoyote' à la propriété 'prenom' : --%>
    <jsp:setProperty name="coyote" property="prenom" param="prenomCoyote"/>
    ```

## <jsp:forward>

* permet d'effectuer une redirection vers une autre page. Comme toutes les actions standard, elle s'effectue côté serveur et pour cette raison il est impossible via cette balise de rediriger vers une page extérieure à l'application (par exemple vers https://www.google.com). L'action de forwarding est ainsi limitée aux pages présentes dans le contexte de la servlet ou de la JSP utilisée :

* ex (ceci se fait dans une page jsp)
    
    ```jsp
    <%-- Le forwarding vers une page de l'application fonctionne par URL relative : --%>
    <jsp:forward page="/page.jsp" />
    
    <%-- Son équivalent en code Java  est : --%>
    <% request.getRequestDispatcher( "/page.jsp" ).forward( request, response ); %>
    ```