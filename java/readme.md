## la class Stack

* entete 
    
    ```java
    public class Stack<E> extends Vector<E>
    ```

Elle implmémente les interfaces: Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess
Elle représente l'algorithme last in first out

	constructor:
	-----------
		Stack()

	methodes:
	---------
		boolean empty()				:teste si elle est vide 	
		E 		peek() 				:top du stack
		E 		pop() 				:top du stack avec suppression
		E 		push​(E item) 		 :ajouter un element 
		int 	search​(Object o)	 :-1 si n'existe pas