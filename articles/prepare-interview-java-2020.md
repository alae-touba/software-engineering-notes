- [la class Stack](#la-class-stack)
- [garbage collection](#garbage-collection)
- [la surcharge des méthodes (overloading methods / Method overloading):](#la-surcharge-des-méthodes-overloading-methods--method-overloading)
- [using comparator chain (a way to sort a collection/array based on multiple field)](#using-comparator-chain-a-way-to-sort-a-collectionarray-based-on-multiple-field)
- [surcharge des opérateurs / operators overloading](#surcharge-des-opérateurs--operators-overloading)
- [le role des interface en java?](#le-role-des-interface-en-java)
- [les classes abstraites (abstract classes):](#les-classes-abstraites-abstract-classes)
- [c'est quoi JVM?](#cest-quoi-jvm)
- [c'est quoi un code machine? (what is a machine code):](#cest-quoi-un-code-machine-what-is-a-machine-code)
- [la méthode clone (clone method):](#la-méthode-clone-clone-method)
- [caractéristique de java:](#caractéristique-de-java)
- [la fonctionnalité varargs (variable-length arguments):](#la-fonctionnalité-varargs-variable-length-arguments)
- [la classe Optional](#la-classe-optional)
- [une interface peut contenir quoi?](#une-interface-peut-contenir-quoi)
- [difference entre StringBuilder et StringBuffer: todo:](#difference-entre-stringbuilder-et-stringbuffer-todo)
- [l'interface List (collection framework)](#linterface-list-collection-framework)
- [une note sur l'interface Iterator et l'interafce Iterable:](#une-note-sur-linterface-iterator-et-linterafce-iterable)
- [utilisation de l'interface Iteartor](#utilisation-de-linterface-iteartor)
- [utilisation de l'interface ListIterator](#utilisation-de-linterface-listiterator)
- [la classe ArrayList:](#la-classe-arraylist)
- [la classe LinkedList](#la-classe-linkedlist)
- [difference entre ArrayList et LinkedList](#difference-entre-arraylist-et-linkedlist)
- [HashMap](#hashmap)
- [LinkedHashMap\<K,V\>:](#linkedhashmapkv)
- [TreeMap\<K, V\>](#treemapk-v)
- [l'interface Set:](#linterface-set)
- [HashSet:](#hashset)
- [TreeSet:](#treeset)
- [les types primitives en java (primitive types):](#les-types-primitives-en-java-primitive-types)
- [variable locale:](#variable-locale)
- [difference entre les types primitives et les objets (difference between primitive types and reference types):](#difference-entre-les-types-primitives-et-les-objets-difference-between-primitive-types-and-reference-types)
- [le mot clé final:](#le-mot-clé-final)
- [les modificateurs d'accés (access modifiers )](#les-modificateurs-daccés-access-modifiers-)
- [Pourquoi les modificateurs d'accès aux membres d'une sous classes doivent-ils être moins restrictif que les modificateurs d'acces aux memes membres dans la super classe?](#pourquoi-les-modificateurs-daccès-aux-membres-dune-sous-classes-doivent-ils-être-moins-restrictif-que-les-modificateurs-dacces-aux-memes-membres-dans-la-super-classe)
- [le modificateur static pour les variables et les méthodes:](#le-modificateur-static-pour-les-variables-et-les-méthodes)
- [les classes statiques (static classes):](#les-classes-statiques-static-classes)
- [les blocs statiques dans une classe (static blocks / class initializer):](#les-blocs-statiques-dans-une-classe-static-blocks--class-initializer)
- [l'utilité des setters en java :](#lutilité-des-setters-en-java-)
- [comment garantir qu'un bloc de code soit tjrs executé?](#comment-garantir-quun-bloc-de-code-soit-tjrs-executé)
- [comment les chaines de caracteres (la classe String) est répresenté/implementé? todo:](#comment-les-chaines-de-caracteres-la-classe-string-est-répresentéimplementé-todo)
- [generics:](#generics)
- [gestion des exceptions (handling exceptions):](#gestion-des-exceptions-handling-exceptions)
- [reflection API:](#reflection-api)
- [differentes façons de lire un fichier:](#differentes-façons-de-lire-un-fichier)
- [est ce que la méthode "main" est obligatoire:](#est-ce-que-la-méthode-main-est-obligatoire)
- [les annotations:](#les-annotations)
- [what is a raw type:](#what-is-a-raw-type)
- [utilité de l'annotation @Override:](#utilité-de-lannotation-override)
- [quelque régles qu'on redefinit une méthode / overriding:](#quelque-régles-quon-redefinit-une-méthode--overriding)
- [est ce que java pass-by-referene ou pass-by-value (is java pass by reference or pass by value):](#est-ce-que-java-pass-by-referene-ou-pass-by-value-is-java-pass-by-reference-or-pass-by-value)
- [c'est quoi javac?](#cest-quoi-javac)
- [les conventions de nommage dans java:](#les-conventions-de-nommage-dans-java)
- [c'est quoi l'encapsulation (concept de OOP) (what is encapsulation):](#cest-quoi-lencapsulation-concept-de-oop-what-is-encapsulation)
- [c'est quoi la polymorphisme (concept de OOP) (what is polymorphism)](#cest-quoi-la-polymorphisme-concept-de-oop-what-is-polymorphism)
- [c'est quoi l'héritage (concept de OOP) (what is inheritence):](#cest-quoi-lhéritage-concept-de-oop-what-is-inheritence)
- [composition(concept de OOP) (what is composition):](#compositionconcept-de-oop-what-is-composition)
- [diamond problem:](#diamond-problem)
- [difference entre les classes abstraites et les interfaces en terme de design / quand utiliser l'une et quand l'autre??:](#difference-entre-les-classes-abstraites-et-les-interfaces-en-terme-de-design--quand-utiliser-lune-et-quand-lautre)
- [comment rendre les objets d'une classe immutables?](#comment-rendre-les-objets-dune-classe-immutables)
- [pourquoi java a les types primitives:](#pourquoi-java-a-les-types-primitives)
- [Type wrappers:](#type-wrappers)
- [énumérations (enumerations) todo:](#énumérations-enumerations-todo)
- [l'opérateur == teste l'égalité des valeurs de deux variables.](#lopérateur--teste-légalité-des-valeurs-de-deux-variables)
- [comparer deux floats](#comparer-deux-floats)
- [BigInteger todo:](#biginteger-todo)
- [jdbc todo:](#jdbc-todo)

## la class Stack

* entete 
    
    ```java
    public class Stack<E> extends Vector<E>
    ```

* Elle implmémente les interfaces: Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess
Elle représente l'algorithme last in first out

* constructor:
	```java
	Stack()
	```


* methodes:

	```java
	//teste si elle est vide
	boolean empty()			

	//top du stack
	E peek() 	

	//top du stack avec suppression
	E pop() 				

	//ajouter un element
	E push​(E item) 		  

	//-1 si n'existe pas
	int search​(Object o)	
	```

## garbage collection 
les objets java sont alloué dynamiquement, en utilisant l'operateur new et java en voulant simplier la vie des développeurs a decidé de gérer la mémoire et liberer celle ci quand elle est plus utilisé en utilisant ce qu'on appelle en anglais **gargabe collector** ou ramasse-miettes qui se charge de libérer la mémoire des objets inutilisés.

Ceci evite aux développeurs d'avoir se soucier de la gestion manuelle de la mémoire qui peut etre un peu delicat.

Quand java trouve un objet qui n'est pas utilisé, c-a-d n'est pas référencé alors la JVM suppose que cet objet n'est plus nécessaire et que la mémoire occupée par l'objet peut être récupérée.

les objets inutilisée (non référéncé) sont:	

* un objet qui est une réference vers une valeur null;

	````java
	Student s = new Student();
	//todo..
	...
	s = null; //(l'objet new Student() en mémoire n'est plus référencé, donc il est inutilisé)
	```
* lorsq un objet reference un autre objet

	````java
	Student s1 = new Student("alae", 21);
	//todo..
	s1 = new Student("jane", 22);   //new Student("alae", 21) n'est plus referencé en mémoire donc il est inutilisé
	```


* un objet anonymous (anonymous object) / un objet qui n'a pa de nom / il n'est pas referencé:
	```java	
	new Student();
	```


## la surcharge des méthodes (overloading methods / Method overloading):	

la surchage des méthodes c'est créer deux méthodes (ou plus), dans la meme classe, avec le meme nom MAIS avec des types et/ou nombre de parametres diffents pour chacune.

* demo	
	```java
	public class App {
		public static void main( String[] args ) throws Exception {

			test();							//test
			System.out.println(test(1)); 	//1

		}

		static void test(){
			System.out.println("test");
		}

		static int test(int a){
			return a;
		}
	}
	```
	

le type de retour n'est pas important, il peut etre le meme ou non. Ce qui est important ce sont les arguments car avec les argumets passé a la méthodes que cette derniere va etre capable de savoir quelle est la méthdoe a appeler.


## using comparator chain (a way to sort a collection/array based on multiple field)
	https://www.oreilly.com/library/view/jakarta-commons-cookbook/059600706X/ch04s05.html
	https://gist.github.com/bbottema/b891b25bf56e0ccb1f83
		
## surcharge des opérateurs / operators overloading
C'est une technique en programmation ou differents opérateurs vont avoir different implementations selon leurs opérandes.

Un exemple d'operator overloading on le trouve avec l'opérateur **+**, qui en cas d'entiers il fait l'addition mathématique, et en cas des chaines de caractere, il fait la concaténation.

Java ne supporte pas la surcharge des opérateurs comme d'autres langauge comme C++ ou Python.

## le role des interface en java?

* Parmi les roles c'est imposer un contenu commun a des sous classes en dehros de la relation d'héritage. par ex on a la classe Integer, String, Student..etc et on veut que ces classes soient tous comparables, c'est a dire que je veux un moyen pour comparer deux entiers ou deux chaine de caractéres ou deux étudiants. supposons que j'ai une classe nommé Comparable et qui a une méthopde compareTo, a un moment donné je peux penser a faire:

	```java
	Student extends Comparable 
	```

	et rédefinir/implementer la méthode compareTo et voila més etudiants sont comparable maintenant mais le probleme est que java ne permet pas l'héritage multiple et je peux avoir que ma classe Student hérite deja d'une autre classe, donc je dois avoir un autre moyen pour implementer la méthode compareTo, et cet autre moyen est les interfaces, et c'est pour ceci que j'ai dis qu'imposer un contenu commun a des sous classes en dehros de la relation d'héritage est le role des interfaces. Mais vous allez me dire, pourquoi on doit implémenter cette interface Comparable et implementer sa méthode compareTo? pourquoi pas juste avoir une méthode compareTo directement défini dans la classe Student et une autre méthode compareTo dans la classe String etc.. et bah je vais vous dire pour la POLYMORPHISME ..car comme ca on perd la polymorphysme.. et nous on veut par exemple pouvoir faire qlq chose du genre:
		
	```java
	Comparable[] a = new Comparable[]{"alae", 11, new Student()}; //on veut avoir un tableau de comparable
	```

	car lorsqu'on implemente une interface on hérite aussi son type.
	Et je veux par exemple une méthode qui prend un objet Comparable comma param, par ex:

	```java
	public void m(Comparable c){
		//todo
	}
	```

	sans polymorphism je peux pas faire ca :) mais si j'ai des classes qui implémentent l'interface Comparable je peux le faire, et a chaq foi faire:
		
	```java
	m(new Student());
	m(new String(""));
	```


* un autre avanatages est que avec les méthodes par defauts des interfaces, on peut avoir des classes qui implementent des interfaces qui ont des méthodes par defaut et comme ca on va pouvoir reutiliser beaucoup de code comme si on a un heritage multiple (class heritant de plusieurs classe <=> class implementant plusieurs interaces qui ont des méthodes par defaut)

* un autre role c'est que lorsqu'un une interface et plusieurs classe qui l'implementent, alors en utilisant un mécanisme de dependecy injection on va etre capable de suitcher entre les implementations de cette interface facilement.

## les classes abstraites (abstract classes):

Il y a des situations dans lesquelles on veut définir une superclasse qui déclare la structure que les sous classes doivent suivre sans implementer certaines méthodes. Autrement dit, on veut parfois créer une class modele pour les sous-classes, cette classe définit uniquement une forme générale qui sera partagée par toutes ses sous-classes, laissant à chaque sous-classe le soin de remplir les détails. Un cas ou cette situation peut se produire est lorsqu'une superclasse est incapable de créer une implémentation significative pour une méthode meme si on sait que tous les sous classes vont avoir besoin de cette méthode. C'est le cas de la classe Figure suivante:

```java
//figure géometrique
class Figure{
	double dim1;
	double dim2;

	Figure(double dim1, double dim2){
		this.dim1 = dim1;
		this.dim2 = dim2;
	}

	double area(){
		//quoi faire ici!! CAR ca dépend de la figure géo
	}
}
```

pour cela on a le concept des classes abstraites, qui sont des classes déclarés avec le mote abstract, et ont des méthodes abstraites qui n'ont pas d'implementation.
Ce sont des classes normales qui peuvent avoir des attributes, des constructeurs, des méthodes normales, mais qui definissent de plus des méthodes qui n'ont pas de corp.

```java
abstract class Figure{
	double dim1;
	double dim2;

	Figure(double dim1, double dim2){
		this.dim1 = dim1;
		this.dim2 = dim2;
	}

	abstract double area();
}
```

On ne peut pas instancier une classe abstraite. De tels objets vont etre inutiles, car une classe abstraite n'est pas entièrement définie.

Toute sous-classe d'une classe abstraite doit soit implémenter toutes les méthodes abstraites de la superclasse, soit être déclarée abstraite elle-même.

```java
class Rectangle extends Figure{
	Rectangle(double dim1, dobule dim2){
		super(dim1, dim2);
	}

	@Override
	public double area(){
		return dim1 * dim2;
	}
}

class Triangle extends Figure{
	Triangle(double dim1, double dim2){
		super(dim1, dim2);
	}

	@Override 
	public double area(){
		return (dim1 * dim2)/2;
	}
}
```

## c'est quoi JVM?	
* définition:
  
	les programmes java ecrites pour differentes platformes et systeme d'exploitation (c'est a dire des programmes ecrits pour fonctionner sur different platformes) se compilent tous vers le meme code qui s'appele bytecode, qui est un ensemble d'instructions optimisé contenue dans un fichier .class, et ce bytecode est aprés executé par la JVM, donc la JVM est un environnement d'exécution pour les applications Java, et c'est ce qui rend Java indépendante de la platforme(hardware+OS), c'est a dire que il n'y a pas de compilation spécifique pour chaque plate forme et son code compilé qui est le bytecode peut s'executer sur differents systemes,  car ce bytecode généré ne s'execute pas directement dans le systeme (car sinon java va etre dependante du platforme, dependante du systeme) mais dans la JVM et la JVM est differente pour chaque platforme. c'est a dire qu'il depend de la platforme ( c'est pas par exemple le cas d'un code ecrit en language C qui est lorsqu'il compilé, il produit un executable qui est pret a s'executer directement par le processeur de la machine, c'est a dire que ce code compilé qui est un code machine, dépend du systeme sur lequel il va s'executer). et géneralement tous les systemes d'exploitation ont une JVM crée pour eux, donc les programmes Java sont capables de s'executer sur different systemes d'exploitation, et c'est pour ceci qu'on dit que les programmes java sont "write once, run everywhere" ou "compile once, execute everywhere" car tu ecris le code une fois(write once), ce code se compile vers le bytecode une fois (compile once) et apres ce bytecode est capable de s'executer sur different platfomes a l'aide des JVMs installé sur ces platformes. 
	
	une question se pose ici, commnent on arrive a avoir un bytecode unique qui est capable de s'executer sur different JVM? la réponse est que y en a des spécifications qui doivent se réspecter lors de la création et l'implementation d'une JVM.

	
* les composants du JVM: class loader & execution engine:

	quand le compilateur compile les fichiers java, on a un bytecode qui est tt simplement des fichiers .class qui sont pret a etre executé par la JVM, la JVM se compose de deux partie principla qui sont "class loader": qui charge le fichier .class principal dans la mémoire et aprés tous les class referencé sont chargé aussi en mémoire, le 2eme composant s'appelle en anglais "execution engine" qui est résponsable d'executer le bytecode et generer du code machine spécifiq a la platforme. 

## c'est quoi un code machine? (what is a machine code):
	
c'est un ensemble d'instructions qu'un processeur comprendre et sait executer.. le code machine contient des instructions comme "store", pour stocker qlq chose par ex dans un registre du processeur, "jump" pour aller d'un endroit au memoire a un autre. c'est un ensemble de bits et chaque processeur posséde son propre language machine.

## la méthode clone (clone method):
* definition:
	
	C'est une méthode qui existe dans la classe Object et qui va nous permettre de créer des copies de nos objets.

	Chaque classe qui redefinit clone doit implementer l'interface Cloneable, sinon on va tomber sur l'exception "CloneNotSupportedException".

	Chaque classe qui implémente clone() doit appeler super.clone() pour obtenir la référence de l'objet cloné.

* exemple:
  
	```java
	@Data
	@AllArgsConstructor
	class Person implements Cloneable{
		int age;
		String name;

		@Override
		protected Object clone() throws CloneNotSupportedException {
			return super.clone();
		}
	}
	```

	main()

	```java
	var p = new Person(21, "alae");
	var p1 = (Person)p.clone();

	p.name = "yassine";
	System.out.println(">p:" + p);
	System.out.println(">p1:" + p1);
	```
	resultat
	```
	p:Person(age=21, name=yassine)
	p1:Person(age=21, name=alae)
	````

	meme si on changé p, p1 n'est pas changé car les deux pointent vers des objets differents en mémoire.

* shallow copy vs deep copy:

	* shallow copy:
		
		dans cette méthode Un nouveau objet est créé avec une copie exacte des valeurs de l'objet d'origine. Si l'un des champs de l'objet est une référence à d'autres objets, seules les adresses de référence sont copiées, c'est-à-dire que seule l'adresse mémoire est copiée.

		exemple:
		```java
		@Data
		@AllArgsConstructor
		class Person implements Cloneable{
			int age;
			String name;
			String hobbies[];

			@Override
			protected Object clone() throws CloneNotSupportedException {
				return super.clone(); //sallow copy
			}
		}
		```
		main()

		```java
		var p = new Person(21, "alae", new String[]{"programming", "movies"});

		var p1 = (Person)p.clone();

		p.age = 100;
		p.hobbies[1] = "tv shows";

		System.out.println(">p: " + p);
		System.out.println(">p1: " + p1);
		```
		resultats
			
		```
		p: Person(age=100, name=alae, hobbies=[programming, tv shows])
		p1: Person(age=21, name=alae, hobbies=[programming, tv shows])
		```

		ce qu'on a fait dans cette exemple est ce qu'on appelle shallow copy (méthode par defaut, c-a-d avec l'implementation simple de clone(), avec seuelement ce ligne super.clone()), c'est une copie de tous les valeurs des champs de l'objet dans les champs du nouveau objet crée.
		et puisq hobbies est un variable de type référence, et donc il contient une adresse, alors lorsque celui ci a été copié dans le champ hobbies du nouveau objet p1, alors maintenat on a 'hobbies' de p et 'hobbies' de p1, les deux, pointent vers la meme case en mémoire, c'est pour cela que lorsqu'on a changé p.hobbies alors ce changement est reflété dans p1.hobbies. pour résoudre ce probleme on peut utiliser un "deep copy".

	* deep copy:

		dans cette méthode le copy est fait récursivement sur tous les objets contenue dans l'objet d'origine.

		exemple:

		```java
		@Data
		@AllArgsConstructor
		class Person implements Cloneable{
			int age;
			String name;

			String[] hobbies;
			public void sayHey(){
				System.out.println("hey im  a person");
			}

			@Override
			protected Object clone() throws CloneNotSupportedException {
				var copy = (Person)super.clone();
				copy.hobbies = this.hobbies.clone();
				return copy;
			}
		}
		```
			
		main():
		```java
		var p = new Person(21, "alae", new String[]{"programming", "movies"});

		var p1 = (Person)p.clone();


		p.age = 100;
		p.hobbies[1] = "tv shows";

		System.out.println(">p: " + p);
		System.out.println(">p1: " + p1);
		```
		resultats:
		
		```
		p: Person(age=100, name=alae, hobbies=[programming, tv shows])
		p1: Person(age=21, name=alae, hobbies=[programming, movies])
		```

		dans cette exemple on a crée une deep copy de l'objet p, donc meme si on changé p.hobbies, p1.hobbies n'est pas changé car p.hobbies et p1.hobbies sont deux variables qui pointent vers des objets different en mémoire ;)

## caractéristique de java:

* java est compilé et interprété:
	
	le code source est compilé en bytecode puis ce bytoce est exécuté par un interpréteur Java :la Java Virtual Machine (JVM). Ce concept est à la base du slogan de Sun pour Java :WORA (Write Once, Run Anywhere : écrire une fois, exécuter partout). En effet, le bytecode, s'il ne contient pas de code spécifique à une plate−forme particulière peut être exécuté et obtenir quasiment les mêmes résultats sur toutes les machines disposant d'une JVM.

* Java est portable : il est indépendant de toute plate−forme:
	
	il n'y a pas de compilation spécifique pour chaque plate forme. Le code reste indépendant de la machine sur laquelle il s'exécute. Les programmes java ecrites pour differents platfome produit le meme bytocode et il est possible d'exécuter des programmes Java sur tous les environnements qui possèdent une Java Virtual Machine.

* java est simple:
	
	le choix de ses auteurs a été d'abandonner des éléments mal compris ou mal exploités des autres langages tels que la notion de pointeurs (pour éviter les incidents en manipulant directement la mémoire), l'héritage multiple et la surcharge des opérateurs, ...

* java est statiquement typé: 

	la verification des types est faite lors du compilation et avant l'execution et on doit declarer le type des variables avant de les utiliser.

* Java assure la gestion de la mémoire:
	
	l'allocation de la mémoire pour un objet se fait automatiquement à sa création et Java récupère automatiquement la mémoire inutilisée grâce au 'garbage collector' qui restitue les zones de mémoire laissées libres suite à la destruction des objets.

* Java a une bonne implementation de la POO


## la fonctionnalité varargs (variable-length arguments):
	
une fonctionnalité qui simplifie la création de méthodes qui doivent prendre un nombre variable d'arguments. Une méthode qui prend un nombre variable d'arguments est une méthode varargs.

démo	
	
```java
public static void main( String[] args ) throws Exception {
	//appeler la méthode varargs avec un nombre different de params a chaq fois
	fun(100);         // 1 param
	fun(1, 2, 3, 4);  // 2 params
	fun();            // pas de param
}

//une méthode qui prend un nombre variable d'entiers (vont etre placé dans un tableau d'entiers)
static void fun(int ...a)
{
	System.out.print("Number of arguments: " + a.length + " / ");

	for (int i: a)
		System.out.print( i + " ");
	System.out.println();
}

```
resultats:
```
Number of arguments: 1 / 100 
Number of arguments: 4 / 1 2 3 4 
Number of arguments: 0 / 
````

on ne peut avoir qu'un seul varargs dans une méthode.

varargs doit etre le dernier element dans les arguments de la méthode pour eviter l'ambiguité.

## la classe Optional

```java
public final class Optional<T> extends Object
```

C'est un conteneur qui peut ou peut pas contenir des elements dont la valeur est null. cette classe est crée pour manipuler l'exception: NullPointerException.

* méthodes
	
	```java
	//retourne une instance empty d'Optional
	static <T> Optional<T> empty()			

	//renvoie un Optional avec la valeur non nulle spécifiée
	static <T> Optional<T> of​(T value)						
	
	//renvoie un Optional décrivant la valeur donnée, s'il n'est pas nul, sinon renvoie un Optional
	//empty
	static <T> Optional<T> ofNullable​(T value)						

	//Si une valeur n'est pas présente, renvoie true, sinon false.	
	boolean isEmpty()								

	//Si une valeur est présente, renvoie true, sinon false.
	boolean isPresent()						

	//Si une valeur est présente, invoque le Consumer action spécifié avec la valeur, sinon 																					ne rien faire.
	void ifPresent​(Consumer<? super T> action)	 

	//Si une valeur est présente, renvoie la valeur, sinon lève NoSuchElementException.
	T get()						

	//si une valeur est présente, renvoie la valeur, sinon other.			
	T orElse​(T other)						

	//si une valeur est présente renvoie la valeur sinon leve NoSuchElementException
	T orElseThrow()						

	String toString()								
	
	//Si une valeur est présente et elle correspond au prédicat spécifié, renvoie un Optional 
	//décrivant la valeur, sinon renvoie un Optional empty.
	Optional<T> filter​(Predicate<? super T> predicate) 

	// Si une valeur est présente, renvoie un Optional décrivant/contenant le résultat de 
	//l'application de la fonction mapper à la valeur, sinon renvoie un Optional empty. 
	<U> Optional<U> map​(Function<? super T,​? extends U> mapper)
	````

* démo1:

	```java
	String str = null;
	var strOptional = Optional.ofNullable(str);

	if(strOptional.isPresent())
		System.out.println(str.toUpperCase());
	else
		System.out.println("string value is not present"); //ce qui va etre executé


	var str1 = "alae";
	var str1Optional = Optional.ofNullable(str1);
	System.out.println(str1Optional.isEmpty()); //false
	System.out.println(str1Optional.isPresent()); //true


	var str2 = "jane";
	var str2Optional = Optional.ofNullable(str2);
	str2Optional.ifPresent(s -> System.out.println(s.toUpperCase())); //JANE
	System.out.println(str2Optional.get()); //jane (getting the value inside the Optional object)
	````
* démo2:

	```java
	String[] str = new String[10];
	str[5] = "JAVA OPTIONAL CLASS EXAMPLE";  // Setting value for 5th index

	//retourne une instance empty de la class Optional
	Optional<String> empty = Optional.empty();
	System.out.println(empty);

	// It returns a non-empty O
	// retourne une instance d'Optional contenat la valeur str[5]
	Optional<String> value = Optional.of(str[5]);

	// If value is present, it returns an Optional otherwise returns an Optional empty
	System.out.println("Filtered value: "+value.filter((s)->s.equals("Abc")));
	System.out.println("Filtered value: "+value.filter((s)->s.equals("JAVA OPTIONAL CLASS EXAMPLE")));

	// It returns value of an Optional. if value is not present, it throws an NoSuchElementException
	//si la valeur est présent retourne la, sinon leve: NoSuchElementException
	System.out.println("Getting value: "+value.get());

	// returner hashCode de la valeur

	System.out.println("Getting hashCode: "+value.hashCode());

	// retourne true si la valeur est presente ,sinon false
	System.out.println("Is value present: "+value.isPresent());

	//renvoie un Optional décrivant la valeur donnée, s'il n'est pas nul, sinon renvoie un Optional 
	//empty
	System.out.println("Nullable Optional: "+Optional.ofNullable(str[5]));

	// retourne la valeur si elle existe sinon la valeur spécifié en param
	System.out.println("orElse: "+value.orElse("Value is not present"));
	System.out.println("orElse: "+empty.orElse("Value is not present"));

	//afficher la valeur en utilisant une reference de méthode
	value.ifPresent(System.out::println);  
	```

	resultat:
	
	```
	Optional.empty
	Filtered value: Optional.empty
	Filtered value: Optional[JAVA OPTIONAL CLASS EXAMPLE]
	Getting value: JAVA OPTIONAL CLASS EXAMPLE
	Getting hashCode: -619947648
	Is value present: true
	Nullable Optional: Optional[JAVA OPTIONAL CLASS EXAMPLE]
	orElse: JAVA OPTIONAL CLASS EXAMPLE
	orElse: Value is not present
	JAVA OPTIONAL CLASS EXAMPLE
	```

## une interface peut contenir quoi?

```java
public interface I{
	//les constantes
	//final static String CONST = "random value";
	String CONST = "random value";		//par defaut ce sont final static

	//les methodes abstraites 
	//public abstract void a();
	void a();		//public abstract, par default

	//les méthodes statique (I.c() d'aprés le main):
	static void c(){
		System.out.println("#");
	}

	//les méthodes par defaut:
	default void d(){
		System.out.println("default method");
	}

	//les méthodes privés
	private void privateMethod(){
		System.out.println("je suis une méthode privé, donc je ne suis accessible que dans cette interface");
	}
}
```


tous les méthodes dans une interface ont le modificateur d'acces public par defaut, par exemple si on ecrit dans une interface:
	
```java
abstract void sayHey();

default void hello(){
	System.out.println("hello");
}

static void staticMethod(){
	System.out.println("static method");
}
```


c'est comme si on a ecris:

```java
public abstract void sayHey();

public default void hello(){
	System.out.println("hello");
}

public static void staticMethod(){
	System.out.println("static method");
}
```	

## les classes anonymes:

Une classe anonyme est une classe interne sans nom et pour laquelle un seul objet est créé. Une classe  anonyme peut être utile lors de la création d'une instance d'un objet avec certains «extras» tels que la surcharge des méthodes d'une classe ou la redifinition des méthodes d'une interface, sans avoir à créer une classe explicite pour ca.

* exemple:
	
	supposon qu'on a une class Person définit comme suit:
	
	```java
	class Person{
		private int age;
		private String name;

		public Person(int age, String name){
			this.age = age;
			this.name = name;
		}

		public void sayHey(){
			System.out.println("hey im a person, my name is " + name);
		}
	}
	```

	si on veut utiliser une instance d'un sous classe de Person (qui redefinit la méthode sayHey de Person) une seule fois, alors on n'a pas besoin de créer une classe expliceite qui hérite de Person pour ca, on peut dans ce cas créer une sous classe et l'utiliser comme ca:

	```java
	Person p = new Person(21, "alae"){
		@Override
		public void sayHey() {
			super.sayHey();
			System.out.println("from anonymous class");
		}
	};
	```

	procéder de cette maniere revient a creer une classe fille sans etre obligé de créer cette classe de facon explicite. L'héritage se produit automatiquement. Seulement, la classe crée n'a pas de nom, l'héritage s'effectue de facon implicite! Nous bénificions donc de tous les avantages de la classe mére en ne redefinissant que la méthode qui nous interesse.

* les types des classe anonymes:
	* ceux qui heritentent d'une classe
		
		```java
		new ParenClassName(constructor-arguments){ ..Declaration..}
		````

	* ceux qui implementent une interface
		
		```java
		new InterfaceName(){ ..methods-implementation.. }
		```

* difference entre les classes anonymes et les classes normaux:
  	* Une classe normale peut implémenter n'importe quel nombre d'interfaces, mais une classe interne anonyme ne peut implémenter qu'une seule interface à la fois.

	* Une classe normale peut étendre une classe et implémenter n'importe quel nombre d'interfaces simultanément. Mais une classe anonyme peut étendre une classe ou implémenter une interface, mais pas les deux à la fois.

	* Pour une classe normale, nous pouvons écrire n'importe quel nombre de constructeurs mais nous ne pouvons écrire aucun constructeur pour une classe anonyme car la classe anonyme n'a pas de nom et on sait que une constructeur a le meme nom que la classe dans laquelle il est definit, en plus de ca, un constructeur dans une classe normale est la pour nous aider créer plusieurs objets differente a partir d'une meme structure qui est la classe, mais en cas d'une classe anonyme, c'est seulement un seul objet qui est crée au moment de la création de la classe, donc c'est pa la peine de definit un constructeur.

	* scope des variables:
		
		Les classes anonymes capturent les variables locales qui sont déclaré dans le meme bloc dans lequel nous avons déclaré la classe:

		```java
		String name1 = "yassine";
		
		Person p = new Person(21, "alae"){
			@Override
			public void sayHey() {
				System.out.println(name1);
			}
		};

		p.sayHey(); //afficher: yassine

		```
		comme name1 est un var qui est déclaré dans le meme bloc que la classe donc l'instance p a accés a ce var.

* Cas d'utilisation de classe anonyme:
	
	* Écouteurs d'événements dans les apps avec une interface (Graphycal user interface applications):
		ex:
		
		```java
		button.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					...
				}
		}
		```
		
		addActionListener est une méthode qui attend une instance d'une classe implementant l'interface ActionListener. Donc au lieu d'aller créer une classe 'A' qui implemente l'interface ActionListener et redefinit la méthode actionPerformed et puis passer une instance de 'A' comme suit new A() comme argument a actionPerformed, on a directement a l'aide d'une classe anonyme un objet d'une classe qui implemente ActionListener et redefinit la méthode actionPerformed 


	* trié une collection:
		ex:
		
		```java
		var list = new ArrayList<String>(Arrays.asList("alae", "salma", "safae", "abdo"));

		Collections.sort(list, new Comparator<String>() {
			@Override
			public int compare(String o1, String o2) {
				return o1.compareTo(o2);
			}
		});

		System.out.println(list);
		```

		méthode sort en 2mem param attend un obj de type Comparator, donc au lieu d'aller créer une classe entiére qui implemente cette interface et redefinit la méthdoe compare, puis passer une instace de cette classe comme 2eme param a sort, on crée directement cette objet a l'aide des classes anonymes 

## les interfaces fonctionnelles (functional interfaces): 

* une interface fonctionnelle est tt simplememnt une interface qui a une seule méthode abstraite. Elle peut avoir plusieurs méthode statiques/par défaut.. mais une seul abstraite. Normalement, cette méthode spécifie l'objectif de l'interface. Ainsi, une interface fonctionnelle représente généralement une seule action. Par exemple, l'interface standard Runnable est une interface fonctionnelle car elle ne définit qu'une seule méthode: run(). Par conséquent, run() définit l'action de Runnable.

	Une interface fonctionnelle est parfois référé: "Single Abstract Method".

* exemple:
		
	```java
	interface NumericTest{
		boolean test(int a);
	}
	```

* exemple2:
	
	y en a beaucoup d'interface fonctionnelle en java:\
	-**Comparable, Comparator, ActionListener, Runnable...**\
	-ceux contenue dans le package **java.util.function** comme: **Predicate, Consumer, Function, Supplier..**

* l'annotation @FunctionalInterface

	cette annotation est utilisé pour s'assurer que l'interface fonctionnelle a une seule méthode abstraire, si on annote une interface avec cette annotation et on ecrit dedans deux méthodes abstraite, le compilateur va generer un erreur.

## les expressions lambdas (lambda expressions):
	
* définition:

	une "lambda expression" c est tout simplement une méthode anonyme, mais cette méthode n est pas executé seule, il est utilisé pour implémenter une méthode définie par une interface fonctionnelle. Ainsi, une expression lambda se traduit par une forme d'une classe anonyme implementant l'interface fonctionnelle et sa seule méthode abstraite.
	les lambda expressions sont ajouté a Java depuis sa version 8.

* syntaxe et exemple d'utilisation:	
	
	supposons que j'ai cette interface fonctionnelle:

	```java
	@FunctionalInterface
	interface NumericTest{
		boolean test(int a);
	}
	```
	
	et je veux créer une classe qui implemente cette interface et teste si un entier est paire ou pas:

	* avant les classe anonymes et les lambdas expressions:

		```java
		class IsEven implements  NumericTest{
			@Override
			public boolean test(int a) {
				return a % 2 == 0;
			}
		}
		```
		
		main()

		```java
		IsEven isEven = new IsEven();
		System.out.println(isEven.test(2)); //true
		System.out.println(isEven.test(3)); //false
		```
		
	
	* aprés les classes anonymes et avant les lambds expressions:
	 
		```java
		NumericTest isEven = new NumericTest() {
				@Override
				public boolean test(int a) {
					return a % 2 == 0;
				}
			};
		```

		main():

		```java
		System.out.println(isEven.test(2)); //true
		System.out.println(isEven.test(3)); //false
		```


	* apres les lambdas expressions:

		```java
		NumericTest isEven = a -> a % 2 == 0;

		System.out.println(isEven.test(2)); //true
		System.out.println(isEven.test(3)); //false
		```

		a -> a % 2 == 0 est ce qu'on appele une lambda expression, c'est tt simplememnt la définition/l'implementation de la méthode abstraite de l'interface fonctionnelle NumericTest.

		Quand le compilateur va trouver ce bloc de code:
		```java
		NumericTest isEven = a -> a % 2 == 0;
		```

		il va créer une classe anonyme implementant l'interface NumericTest, et ceci (  a -> a % 2 == 0 ) va etre l'implementation de la méthode test.
		la méthode test dans NumericTest prend un entier comme argument et retourne un boolean, donc la définition du lambda expression doit etre compatible avece cette méthode test, par ex si test retourne un boolean alors le lambda doit aussi retourner un boolean.

		
		> c'est pa la peine d'ecrire (int a) -> a%2 == 0, car le type de a va etre inféré par l'argument de test qui est entier :)


* un autre exemple:
 
	```java
	@FunctionalInterface
	interface StringOperations{
		String operation(String s);
	}		
	```

	main():

	```java
	StringOperations toUpperCase = s -> s.toUpperCase();
	StringOperations reverse = s -> new StringBuilder(s).reverse().toString();
	StringOperations removeSpaces = s -> s.replaceAll(" ", "");

	System.out.println(toUpperCase.operation("alae")); //ALAE
	System.out.println(reverse.operation("amazon")); //nozama
	System.out.println(removeSpaces.operation(" a     l   a e")); //alae			
	```


* les lambdas expressions et la genericité (generic lambda expression):
	
	au lieu d'ecrire une interface fonctionnelle qui manipule les entiers comme ceci:
	```java
	@FunctionalInterface
	interface NumericOperations{
		int operation(int a);
	}
	```

	et une autre qui manipule les chaines de caracteres comme suit:
	```java
	@FunctionalInterface
	interface StringOperations{
		String operation(String s);
	}
	```
		

	je peux créer une interface fonctionnelle generique et expoloiter ceci avec les lambda expressions:	
	```java
	@FunctionalInterface
	interface GenericInterface<T>{
		T operation(T a);
	}
	```
	main():
	```java
	GenericInterface<String> strToUpper = s -> s.toUpperCase();
	GenericInterface<String> strReverse = s -> new StringBuilder(s).reverse().toString();

	System.out.println(strToUpper.operation("alae")); //ALAE
	System.out.println(strReverse.operation("amazon")); //nozama


	GenericInterface<Integer> getDouble = a -> a*2;

	System.out.println(getDouble.operation(100)); //200
	```
	
* passer une lambda expression commen un arguments a une méthode:

	```java
	@FunctionalInterface
	interface StringOperations {
		String operation(String s);
	}


	public class Main {
		static String stringOp(StringOperations so, String s){
			return so.operation(s);
		}
		public static void main(String[] args) {

			var result = stringOp(s -> s.toUpperCase(), "alae");
			System.out.println(result); //ALAE

		}
	}
	```
	la méthode **stringOp** prend a comme argument un objet de type StringOperations -qui est une interface fonctionnelle- donc on peut passer une expression lambda la bas.


* les références de méthodes (methods references):
	* definition:
		
		Les références de méthode sont un type spécial d'expressions lambda qui sont utilisés pour créer des expressions lambda simples en référençant des méthodes existantes.
		par exemple une méthode déjà existante dans une interface (méthode statique), classe (méthode statique ou constructeur) ou encore une méthode d'une instance de classe.

	* syntaxe:
	
		class, interface ou instance :: methodName

	* example:
	
		notre interface fonctionnelle:
		```java
		@FunctionalInterface
		public interface StringInterface {
			String strFunc(String str);
		}
		```

		une méthode qu'on va travailler avec:
		```java
		static void stringOperation(StringInterface f, String str) {
			System.out.println(f.strFunc(str));
		}
		```
				
		classe qui contient les méthodes qu'on va utiliser pour définir la méthode abstraite dans notre interface fonctionnelle:
		```java
		public class MyClass {
			//les signatures de ces méthodes doivent biensur etre compatibles avec la méthode abstraite dans l'interface fonctionnelle.
			// str -> str;
			public static String upper(String str) {
				return str.toUpperCase();
			}

			public static String lower(String str) {
				return str.toLowerCase();
			}

			public String removeSpaces(String str) {
				return str.trim();
			}
		}
		```
		


		main():
		```java
		String s = "     alae TOUBA    ";

		//on fait réference a une méthode static d'une classe (au lieu de l'implémenter ;) )
		StringInterface lower = MyClass::lower; //similar to(instead of): StrinInterface lower = str -> str.toLowerCase();
		StringInterface upper = MyClass::upper;

		//on fait réference a une méthode d'instance
		StringInterface removeSpace = new MyClass()::removeSpaces;

		//passer ces references de méthodes comme params a une méthode
		stringOperation(upper, s); //     ALAE TOUBA    
		stringOperation(lower, s); //     alae touba    
		stringOperation(removeSpace, s); //alae TOUBA    

		//ps: on peut utiliser les méthodes d'instance avec just le nom de la classe, sans avoir besoin de créer un objet (pas sure!!)
		//example1 = StringInterface upper = String::toUpperCase;
		//example2 = StringInterface removeSpace = MyClass::removeSpace;
		```


		Voila une explication des deux dernieres lignes:

		la méthode abstraire **strFunc** de l'interface fonctionnel **StringInterface** a cet entete:
		```java
		String strFunc(String str);
		```

		et on a pu referencer cette méthode avec une lambda qui a cette forme:
		```java
		String::toUpperCase
		```

		comment on a pu faire ca?
			strFunc retourne String et la méthode toUpperCase() aussi, donc pas de probleme ici.
			le probeleme est que toUpperCase() n'a pas de param, contrairement a strFunc qui prend un String comme argument!!! well in this case, java va consider que l'objet invoquant est le param ;) on appel toUpperCase comme ca:
				"string".toUpperCase(), 
			donc puisq l'objet invoquant est de type String, alors ceci est compatible avec strFunc ;) 


* quelques interfaces fonctionnelles qui existent dans le package java.util.function:
  
	* Function<T,R>

		```java
		@FunctionalInterface
		public interface Function<T,R>{
			R apply(T t); 
		}
		```
		
		```java
		Function<Integer, Integer> plusTen = (a) -> a + 10;
		System.out.println(upper.apply("me")); //ME

		Function<String, String> upper = (str) -> str.toUpperCase();
		System.out.println(upper.apply("alae")); //ALAE

		Function<String, Integer> strLength = s -> s.length();
		System.out.println(strLength.apply("alae")); //4
		```

	
		* le chainage des fonctions (functions chaining)

			```java
			Function<Integer, Integer> doubleFunc = a -> a * 2;
			Function<Integer, Integer> plusFive = a -> a + 5;
			System.out.println(doubleFunc.andThen(plusFive).apply(10)); //25
			```
			

		
	* Predicate<T>
		
		```java
		@FunctionalInterface
		public interface Predicate<T>{
			boolean test(T t);
		}
		```

		```java
		Predicate<Integer> isEven = (a) -> a % 2 == 0;
		System.out.println("4 is even : " + isEven.test(4)); //true
		System.out.println("7 is even : " + isEven.test(7)); // flase
		```	
		

	* Supplier<T>
	
		```java
		@FunctionalInterface
		public interface Supplier<T>{
			T get();  //retourne ce qu'on veut qu'elle retourne, objet de type T)
		}
		```

		```java
		Supplier<Person> suppPerson = () -> new Person("unkown", -1);
		Person pers = suppPerson.get();

		// unkown / projet0.Person
		System.out.println(pers.getName() + " / " + pers.getClass().getName()); 
		```
			

	* Consumer<T>

		```java
		@FunctionalInterface
		public interface Consumer<T>{

			//accépte un objet de type T et fait qlq chose avec, elle ne retourne rien)
			void accept(T t);  
		}
		```
		
		```java
		Person randomPers = new Person("randomName", 100);
		Consumer<Person> incrementAge = p -> p.setAge(p.getAge() + 1);
		incrementAge.accept(randomPers);
		System.out.println(randomPers.getAge()); //101
		```
		

	* BinaryOperator<T>
	
		```java
		@FunctionalInterface
		public interface BinaryOperator<T> extends BiFunction<T,T,T>{
			T apply(T t1, T t2);
		}
		```
		Représente une opération sur deux opérandes du même type, produisant un résultat du même type que les opérandes. Il s'agit d'une spécialisation de BiFunction pour le cas où les opérandes et le résultat sont tous du même type.
		
		```java
		BinaryOperator<Integer> sum = (x, y) -> x + y;
		System.out.println(sum.apply(10, 20)); //30
		```	
		
	* UnaryOperator<T>

		```java
		@FunctionalInterface public interface UnaryOperator<T> extends Function<T,T>{
			T apply(T t)
		}
		```

		```java
		UnaryOperator<Integer> increment  = a -> a+1;
		System.out.println(increment.apply(10)); //11
		```		
	

## l'API Stream:

* définition:
  
	* c'est une API pour mettre en oeuvre une approche de la programmation fonctionnelle en java 
	* En programmation fonctionnelle, on décrit (de maniére declarative) le résultat souhaité mais pas comment on obtient le résultat.
	* L'API Stream permet de décrire de manière expressive un ensemble d'opérations dont le but est de réaliser des traitements sur les éléments d'une source de données. 
	* réduit la verbosité du java, on decrit just la logique et pas comment le faire.

* qlqs difference entre les streams et les collectios:
	
	* Un Stream n'est pas une structure qui stocke des données. Elle permet de traiter les différents éléments d'une source en appliquant différentes opérations
	* Un Stream permet de mettre en oeuvre la programmation fonctionnelle : le résultat d'une opération ne doit pas modifier l'élément sur lequel elle opère ni aucun autre élément de la source.
	* Il n'est pas possible d'accéder à un élément grâce à un index
	* Un Stream n'a pas forcement de taille fixe : le nombre d'éléments à traiter peut potentiellement être infini. Ilspeuvent consommer des données jusqu'à ce qu'une condition soit satisfaite : des méthodes comme limit() oufindFirst() peuvent alors permettre de définir une condition d'arrêt

* creation d'un stream:
 
	* a partir d'une collection:
		
		```java
		Stream<String> stringStream = List.of("alae", "salma").stream();
		```

	* a partit d'un tableau:

		```java
		String arr[] = {"alae", "salma"};
		Stream<String> stringStream1 = Arrays.stream(arr);
		```

	* a partir d'un varargs:
		
		```java
		Stream<Integer> integerStream = Stream.of(1, 2, 3);
		```

	* a partir de la méthode range:
		
		```java
		IntStream intStream =  IntStream.range(1, 10);
		IntStream intStream1 =  IntStream.rangeClosed(1, 10);
		```

	* a partir d'une application d'une fct successivement a partir d'une valeur initial:
		
		```java
		Stream<Integer> stream = Stream.iterate(0, i -> i+1);
		```

* les opération d'un stream:
  
	* y en a deux types d'opérations:
		* Les opérations intermidiares	: Elles produisent un Stream et sont toujours évaluées de manière lazy
		* Les opérations terminales   	: une seule opération terminale par Stream. Elles produisent unevaleur ou des effets de bord. 


	* Les opérations intermidiares:

		```java
		Stream<T> filter(Predicate<? super T> predicate)

		<R> Stream<R> map(Function<? super T,? extends R> mapper)

		//retirer les doublons (utiliser equals pour savoir si o1 == o2 i.e des doublons ;))
		Stream<T> distinct()										

		Stream<T> sorted()

		Stream<T> sorted(Comparator<? super T>)

		//Renvoyer les éléments du Stream et leur appliquer le Consumer fourni en paramètre
		Stream<T> peek(Consumer <? super T>)						

		//renvoyer un Stream qui contient au plus le nombre d'éléments fournis en paramètre
		Stream<T> limit(long)										

		//renvoyer un Stream dont les n premiers éléments ont été ignorés
		Stream<T> skip(long)										
		
		//Renvoyer un Stream qui contient le résultat de la transformation de chaque élément de type T 
		//en un type primitif xxx(int, double, long)
		xxxStream mapToxxx(ToxxxFunction<? super T> mapper)		
		```

		demo:

		```java
		List<Student> students = Arrays.asList(
				new Student("safae", 11),
				new Student("safae", 11),
				new Student("aya", 14),
				new Student("amal", 22),
				new Student("rami", 100)
		);
		```


		map:
		```java
		Stream<String> names = students.stream().map(student -> student.getName());
		Stream<String> names1 = students.stream().map(Student::getName);
		```

		filter:
		```java
		Stream<Student> olderThen18 = students.stream().filter(student -> student.getAge() >= 18);
		```
		
		mapToInt:
		```java
		IntStream ages = students.stream().mapToInt(student -> student.getAge());
		IntStream ages1 = students.stream().mapToInt(Student::getAge);
		```
		

		-distinct:
		```java
		Stream<Integer> distincts = Stream.of(1, 2, 3, 2, 3).distinct(); //1,2,3
		```
		
		-limit: opération de type short−circuit : dès que le nombre d'éléments contenus dans le Stream retourné est atteint,l'opération met fin à la consommation 				d'éléments de la source par le Stream.
		```java
		Stream<Integer> ints = Stream.of(1, 2, 3, 4, 5).limit(3); //1, 2, 3
		```

		-skip:
		```java
		Stream<Integer> ints  = Stream.of(1, 2, 3, 4, 5).skip(3); //4, 5
		```
			
		
		-sorted:
		```java
		Stream<Integer> sorted =  Stream.of(11, 2, 7, 5, 77).sorted(); //2, 5, 7, 11, 77
		```

		-sorted(Comparator):
		```java
		Stream<S> sorted = students.stream().sorted((s1, s2) -> s1.getName().compareTo(s2.getName()); 
		//Student(amal), Student(aya), Student(rami), Student(safae)
		```


	* Les opérations terminales:

		```java
		void forEach(Consumer<? super T> action)	

		Object[] toArray()

		MyClass[] toArray(MyClass[]::new)	

		Optional<T> min(Comparator<? super T> comparator)

		Optional<T> max(Comparator<? super T> comparator)

		long count()

		//qlq un satisfait la condition?
		boolean anyMatch(Predicate<? super T> predicate)        

		//tous satisfaissent la condition?
		boolean allMatch(Predicate<? super T> predicate)		 

		//tous ne satisfaissent pas la condition?
		boolean noneMatch(Predicate<? super T> predicate)        

		Optional<T> findFirst()

		Optional<T> findAny()

		T reduce(T identity, BinaryOperator<T> accumulator)

		<R,A> R collect(Collector<? super T,A,R> collector)
		```
		

		demo:
		
		-forEach:
		```java
		Stream.of(1, 2, 3).forEach(n -> System.out.println(n)); //1, 2, 3
		Stream.of(1, 2, 3).forEach(System.out::println); //1, 2, 3
		```
		

		-Object[] toArray:
		```java
		Object[] strings = Arrays.asList("salma", "alae").stream().sorted().toArray();
		System.out.println(Arrays.toString(strings)); //[alae, salma]
		```
		
	
		-MyClass[] toArray:
		```java
		String[] strings = Arrays.asList("salma", "alae").stream().sorted().toArray(String[]::new);
		System.out.println(Arrays.toString(strings)); //[alae, salma]
		```
		

		-max:
		```java
		Optional<Student>  max = students.stream().max((s1, s2) -> Integer.compare(s1.getAge(), s2.getAge()));
		max.ifPresent(System.out::println); //Student(name=rami, age=100)
		```
		-count:
		```java
		System.out.println(students.stream().count()); //5
		```

		-anyMatch:
		```java
		boolean alaeExists = students.stream().anyMatch(student -> student.getName().equals("alae"));
		System.out.println(alaeExists); //false
		```

		-allMatch:
		```java
		boolean allOlderThen18 = students.stream().allMatch(student -> student.getAge() > 18) ;
		System.out.println(allOlderThen18);
		```


		-noneMatch:
		```java
		boolean allYoungerThan100 = students.stream().allMatch(student -> student.getAge() <= 100) ;
		System.out.println(allYoungerThan100); //true
		```
		

		-collect:	
		```java
		List<Student> list = students.stream().collect(Collectors.toList())
		Set<Student> set = students.stream().collect(Collectors.toSet())
		List<Student> unmodifiableList = students.stream().collect(Collectors.toUnmodifiableList())
		Set<Student> unmodifiableSet = students.stream().collect(Collectors.toUnmodifiableSet())
		ArrayList<Student> 	arrayList = students.stream().collect(Collectors.toCollection(ArrayList::new))
		```
		
		-reduce:
		```java
		reduce(identity, (total, value ) -> doSomething )

		int sum = Stream.of(1, 2, 3).reduce(0, (total, value) -> total += value);
		System.out.println(sum); //6
		```


## l'interface Comparable 

* definition
	
	```java
	public interface Comparable<T>{
		int compareTo(T o);
	}
	```

  	* Cette interface impose un ordre total sur les objets de chaque classe qui l'implémente. Cet ordre est appelé ordre naturel (natural order) de la classe, et la méthode compareTo de la classe est appelée sa méthode de comparaison naturelle (natural comparaison method).

	* si une classe implemente cette interface, alors les objets de cette classe sont dites comparables.

	* la méthode compareTo retourne un résultat positive si l'objet appelant est plus grand qui celui passé en param, sinon negative (egaux => 0).

	* si o1.compareTo(o2) == 0 alors o1.equals(o2) == true aussi (l'implementation de compareTo dans une classe implementant Comparable<T> doit etre compatible avec equals)

* exemple:
	
	on definit une classe qui implemente comparable, donc les objets de type Person sont comparables:

	```java
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	class Person implements Comparable<Person>{
		private String name;
		private int age;

		@Override
		public int compareTo(Person o) {
			return  age > o.age ? 1 : age  < o.age ? -1 : 0 ;
		}
	}
	```
		
	main():
	```java
	var p1 = new Person( "alae", 21);
	var p2 = new Person( "yassine", 22);
	var p3 = new Person( "mehdi", 22);

	System.out.println(p1.compareTo(p2)); //-1
	System.out.println(p3.compareTo(p1)); //1
	System.out.println(p2.compareTo(p3)); //0
	```
		

* utilité de Comparable<T>:
	
	Lorsqu'on utilise Arrays.sort ou collections.sort sur un ensemble d'objets qui implementent Comparable<T> alors java utilise cette ordre naturelle (compareTo) pour détérminer quel objet est plus grand que l'autre pour trié la list ;)

	exemple:
		
	```java
	var arr = new int[]{1, 33, 4, 667, 86, 988, 199};
	Arrays.sort(arr);
	System.out.println(Arrays.toString(arr)); //[1, 4, 33, 86, 199, 667, 988]
	```
	
	la classe Integer implemente l'interface Comparable, c'est pour cela java a été capable d'appler compareTo sur ces les elements du tableau (des integers) pour determiner lequel est plus grand que l'autre et donc trié l'array. ceci s'appel l'order naturelle car on n'a pas besoin de specifier un type de tri/ordre.




## l'interface Comparator:

* définition et utilité:
	
	c'est une interface fonctionnelle qui a une seule méthode abstraite compare.

	```java
	int compare(T o1, T o2);
	```

	Les classes qui implementent Comparator<T> peuvent etre passé a Collections.sort et Arrays.sort pour trié les éléments d'une collection ou d'un tableau selon un ordre bien defini.

* exemple:
	* notre class:

		```java
		@Data
		@NoArgsConstructor
		@AllArgsConstructor
		class Student{
			private String name;
			private int age;
		}
		```

	* notre comparateurs (comparators) qu'on va passer a Collections.sort et Arrays.sort:

		```java
		class SortStudentsByAge implements Comparator<Student>{

			@Override
			public int compare(Student o1, Student o2) {
				return Integer.compare(o1.getAge(), o2.getAge());
			}
		}

		class SortStudentsByName implements Comparator<Student>{

			@Override
			public int compare(Student o1, Student o2) {
				return o1.getName().compareTo(o2.getName());
			}
		}
		```

	* main():
		
		```java
		var list = new ArrayList<Student>(){{
			add(new Student("alae", 21));
			add(new Student("oussama", 19));
		}};
		Collections.sort(list, new SortStudentsByAge());
		System.out.println(list); //[Student(name=oussama, age=19), Student(name=alae, age=21)]

		Collections.sort(list, new SortStudentsByName());
		System.out.println(list); //[Student(name=alae, age=21), Student(name=oussama, age=19)]
		```

		tu vois l'utilté de Comparator<T>, tu es capable de trié les objets differements. selon different critere a chaq fois.


* exemple avec Java 8+ (les lamnda expressions):
  
	```java
	Collections.sort(list, (o1, o2) -> Integer.compare(o1.getAge(), o2.getAge()));
	System.out.println(list); //[Student(name=oussama, age=19), Student(name=alae, age=21)]
	```
	
	(o1, o2) -> Integer.compare(o1.getAge(), o2.getAge()) est une lambda expression qui implemente la méthode compare de Comparator<T>
	(c'est pa la peine de te rappeler qu'ici java va creer une classe anonyme qui implemente Comparator<T> et redefinit compare)

## definition du classpath:
	
le classpath permet de préciser au compilateur et à la JVM où ils peuvent trouver les classes dont ils ont besoin pour la compilation et l'exécution d'une application. C'est un ensemble de chemins vers des répertoires ou des fichiers .jar dans lequel l'environnement d'exécution Java recherche les classes (celles de l'application mais aussi celles des librairies) et éventuellement des fichiers de ressources utiles à l'exécution de l'application. 

## difference entre String et StringBuilder

Lorsqu'on crée un objet String, on crée une chaine de caractere qui ne peut pas être modifiée et elle est de longeur fixe. Autrement dit, une fois qu'un objet String a été créé, on ne pout pas modifier les caractères qui composent cette chaîne. On peut toujours effectuer tous les types d'opérations sur ces chaînes. mais chaque fois qu'on a besoin d'une version modifiée d'une chaîne existante, un nouvel objet String est créé qui contient les modifications. La chaîne d'origine reste inchangée.

par exe lorsq on fait:
```java
var name = "alae";
````
un objet de type String est crée en memoire.

et apres on fait
```java 
name = name.toUpperCase();
```

ici un autre objet String dont la valeur est 'ALAE' est ecris en memoire et il est pointé par la variable name. la chaine de caractere "alae" rest tjrs inchangée.


StringBuilder représente des séquences de caractères évolutives. c'est a dire qu'on peut avoir des caractères et des sous-chaînes insérés au milieu ou ajoutés à la fin.
lorsqu'on crée une chaine de caractere qui a par exemple 4 caractere avec stringbuilder, java ne vas pas crée en memoire une chaine avec 4 chars, mais une chaine dont la longeur est plus grand que 4 pour permettre une croissance de la chaine.
en faite le constructeur par defaut de StringBuilder (new StringBuilder()) crée une chaine de 16 chars en memoire :) et lorsq'on cree un objet StringBuilder d'aprés une chaine de caractere (new StringBuilder(CharSequence chars)) ici aussi 16 chars de plus sont alloué.

## difference entre StringBuilder et StringBuffer: todo:

## l'interface List (collection framework)

```java
Interface List<E>
```

* ses super interface: Collection<E>, Iterable<E>

* c'est une collection simple et ordonnée d'éléments qui autorise les doublon et l'insertion des éléments null.

* méthodes:
	```java
	void add​(int index, E element)

	boolean add​(E e)

	//Insère les éléments de la collection c dans cette liste à la position spécifiée.
	boolean addAll​(int index, Collection<? extends E> c) 

	boolean addAll​(Collection<? extends E> c)

	void clear()

	int size()

	boolean isEmpty()

	boolean contains​(Object o)

	boolean containsAll​(Collection<?> c)

	E get​(int index)

	E set​(int index, E element)

	E remove​(int index)

	boolean remove​(Object o)

	boolean removeAll​(Collection<?> c)

	int indexOf​(Object o)

	int lastIndexOf​(Object o)

	Iterator<E> iterator()

	ListIterator<E> listIterator()

	//retourne un list iterator à partir de la position spécifiée.
	ListIterator<E> listIterator​(int index)	

	defautl void sort​(Comparator<? super E> c)

	List<E> subList​(int fromIndex, int toIndex)

	Object[] toArray()

	boolean equals​(Object o)

	int hashCode()

	<T> T[] toArray​(T[] a)

	static <E> List<E> copyOf​(Collection<? extends E> coll)

	//Renvoie une liste non modifiable contenant un nombre arbitraire d'éléments.
	static <E> List<E> of(E...elements)	

	streamforEach​(Consumer<? super E> action)
	```

## une note sur l'interface Iterator<E> et l'interafce Iterable<E>:

On a
```java
public interface Iterable<E>{
	Iterator<E> iterator();
	default void forEach​(Consumer<? super T> action)
}
```

Et
```java
public interface Collection<E> extends Iterable<E>
```

Donc
```java
public interface Collection<E> extends Iterable<E>{
	Iterator<E> iterator();
}
```


=> chaq class qui implement l'interface Collection<E> va avoir cette méthode iterator()

L'interface Iterator<E> a 3 méthodes:
```java
public interface Iterator<E>{
	boolean hasNext();
	E next();		//leve NoSuchElementException si pas d'element suivant
	default void remove();
}
```

cette interface nous permettre de parcourir une collection. d'accéder à l'élément suivant et de supprimer des éléments.

## utilisation de l'interface Iteartor<E>

cette interface nous permettre de parcourir une collection. d'accéder à l'élément suivant et de supprimer des éléments.
```java
var list = new ArrayList<String>(){{
	add("alae");
	add("yassine");
}};

var it = list.iterator();
while(it.hasNext())
	System.out.println(it.next());
```


## utilisation de l'interface ListIterator<E>

Une interface qui permet de parcourir une collection dans les deux directions.

* signature:
	```java
	public interface ListIterator<E> extends Iterator<E>
	```

* méthodes:

	```java
	boolean hasNext()

	boolean hasPrevious()

	E next()

	E previous()

	//Renvoie l'indice de l'élément qui serait renvoyé par un appel à next().
	int nextIndex() 		

	int previousIndex()

	//supprime le dernier element retourné par next() ou previous()
	void remove()			

	//remplacer le dernier element retourné par next() ou previous() par e.
	void set​(E e)			

	void add​(E e)
	```
* démo parcour des elements dans les deux directions:

	```java
	var list = new ArrayList<String>(){{
		add("alae");
		add("yassine");
		add("jane");
	}};

	var listIterator = list.listIterator();
	while (listIterator.hasNext())
		System.out.println("next index:" + listIterator.nextIndex() + " / next el:" + listIterator.next());

	while(listIterator.hasPrevious())
		System.out.println("previous index:" + listIterator.previousIndex() + " / previous el:" + listIterator.previous());
	```
	```
	next index:0 / next el:alae
	next index:1 / next el:yassine
	next index:2 / next el:jane
	previous index:2 / previous el:jane
	previous index:1 / previous el:yassine
	previous index:0 / previous el:alae
	```

* démo suppression des elements avec remove	:
	
	```java
	var listIterator = list.listIterator();
	while (listIterator.hasNext()){
		listIterator.next();
		listIterator.remove();

	}

	System.out.println(list); // affiche: []
	```

* démo remplacement des elements par set(E e):

	```java
	var listIterator = list.listIterator();
	while (listIterator.hasNext()){
		listIterator.next();
		listIterator.set("haha");

	}

	System.out.println(list); //affiche: [haha, haha, haha]
	```

## la classe ArrayList<E>:

Sa super classe			: **AbstractList<E>**\
interfaces implementés	: **Serializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess**

* La classe ArrayList est un tableau d'objets dont la taille est dynamique: elle utilise un tableau dont la taille s'adapte automatiquement au nombre d'éléments de la collection. Cette adaptation a cependant un coût car elle nécessite l'instanciation d'un nouveau tableau et la copie des éléments dans ce nouveau tableau.

	Chaque instance de type ArrayList possède une capacité qui correspond à la taille du tableau de stockage des éléments :c'est donc le nombre total d'éléments qu'il est possible d'insérer avant d'agrandir le tableau. Cette capacité est toujours supérieure ou égale à la taille de la collection (c-a-d au nombre des elements effectivement stocké dans la collection). La capacité de la collection est automatiquement ajustée selon les besoins lors de l'ajout d'un élément.Cette capacité et le nombre d'éléments de la collection déterminent si le tableau doit être agrandi.

* comprendre la capacité:	

	supposons qu'on instancie un arraylist avec 3 elements comme ca:
	```java
	var list = new ArraysList<Integer>(){{ add(1); add(2; add(3);}};
	```

	la longeur (list.size()) est 3, mais la capacité de la liste est plus grand q 3 pour nous permettre a ajouter des elements au future.
	et si cette capacité n'est pas suffisante, alors un nouveau tableau plus grand va etre crée en memeoire et les elements de la liste vont etre copié a ce nouveau tab.


* méthodes (au plus des méthodes hérité de l'interface List<E>):
	
	```java
	Object clone()

	//supprime tous les elements de la collection qui satisfaissent le filtre.
	boolean removeIf​(Predicate<? super E> filter)

	//Réduit la capacité de l'instance à la taille actuelle de la liste.
	void trimToSize() 
	```

* Lors de l'ajout d'un élément dans la collection, si le tableau de stockage est trop petit alors un nouveau, plus grand, est créé pour contenir les éléments courants plus le nouvel élément.
Les temps d'exécution de l'insertion ou de suppression d'un élément à une position quelconque est aussi variable puisque cela peut nécessiter l'adaptation de la position d'autres éléments

## la classe LinkedList

* sa super class:	**AbstractSequentialList<E>**
* interfaces implementés: **Serializable, Cloneable, Iterable<E>, Collection<E>, Deque<E>, List<E>, Queue<E>**

* c'est une liste doublement chainé.

* méthodes:
 
	```java
	Object clone()
	void addFirst​(E e)
	void addLast(E e)
	E getFirst()
	E getLast()
	E removeFirst()
	E removeLast()
	boolean removeFirstOccurrence​(Object o)
	boolean removeLastOccurrence​(Object o)
	```

## difference entre ArrayList et LinkedList

* accés aux elements au milieu:

	ArrayList: temps constant O(1) car c'est un tableau et on accede a ses elements par leurs indices\
	LinkedList: temps lineare O(n), car il faut parcourir les liste pour trouver l'elements.

* accés aux elements a la fin et au début:

	ArrayList: temps constant O(1), tjrs accés par indice\
	LinkedList: temps constant O(1), car c'est une liste doublement chainé donc a des pointeurs a le premier et le dernier elements de la liste.

* suppression des elements a la fin:

	ArrayList: temps constant O(1), on n'a rien a changé dans le tableau, il suffit de dire que le size du tableau est maintenat (size()-1)\
	LinkedList: temps constant O(1), car on a un pointeur vers le dernier elements, donc il suffit de régler ce pointeur pour supprimer le dernier elements

* suppression des elements au début:
	ArrayList: temps lineare O(n), car on doit faire un 'shift' de tous les élements qui sont aprés ce premier element du tableau.\
	LinkedList: temps constant O(1), car on a un pointeur vers ce premier element, donc il suffit de faire pointer ce pointeur vers le 2eme element de la list pour le 					supprimer

* suppression des elements au milieur:

	ArrayList: temps linear O(n), on doit faire un shift des elements qui sont aprés cet element supprimé.\
	LinkedList: temps lineare O(n), on doit parcourir la liste jusq a trouver cet element désiré puis régler les pointeurs.

* chercher un element:

	ArrayList: temps linear O(n), car on doit parcourir le tableau\
	LinkedList: temps linear O(n), car on doit parcourir la liste

* ajout des elements a la fin:
 
	ArrayList: temps constant O(1), (mais parfois O(n) si le tab actuel n'est pas suffi et on doit créer un nouveau tab et copier ces elements vers ce nouveau tab)\
	LinkedList: temps constant O(1), suffit de pointer le dernier element vers ce nv element et le pointeur-sur-le-dernier-el sur ce nv element 

* ajout des élemnts au début:
  
	ArrayList: temps linear O(n), on doit faire un shift de tous les elements du tableau au droit et inserer l'element a la premiere case.\
	LinkedList: temps constant O(1), suffit juste de manipuler le pointeur sur le premier element

## HashMap 
	
public class HashMap<K,​V> extends AbstractMap<K,​V> implements Map<K,​V>, Cloneable, Serializable

* définition
  
	la classe HashMap est une implementation de l'interface Map, et qui utilise une table de hachage.

	La classe HashMap utilise un tableau de listes chaînées pour le stockage de ses éléments (hashing with chaining). L'indice d'une clé dans le tableau est déterminé grâce à un algorithme utilisant la valeur de hachage de l'objet.
	La valeur de hachage n'est pas utilisée directement : l'algorithme fait appel à la méthode hash() de la classe HashMap qui utilise la valeur de hachage pour en déterminer une autre, ceci afin de réduire les risques de collision.

	Si deux objets possèdent la même valeur de hachage, il y a une collision car les deux objets doivent être insérés dans le même bucket. Pour gérer les problèmes, le bucket contient une liste chaînée : chaque élément (sa clé et sa valeur) estencapsulé dans une instance de type Entry.

	La classe HashMap propose plusieurs constructeurs dont certains peuvent préciser la capacité initiale et le facteur decharge

	si la (nombre-d'elements-dans-le-table / capacité maximal du table) dépasse le facteur du charge alors la taille du tableau de hachage est doublé.

* comprendre le fonctionnement interne du Hashmap (explication de l'algo ):
  
	En interne, une HashMap stocke les paires clé/valeur dans des cases qui peuvent être vus comme un index de premier niveau. Lors de l'ajout d'un élément ou la recherche d'un élément dans la collection, la valeur de hachage de la clé est utilisée pour déterminer un indice dans le tableau.

	Chaque case possède une liste chaînée qui stocke les éléments dont la clé possède la même valeur de hachage. 

	La classe HashMap possède la classe interne Entry qui implémente l'interface Map.Entry et encapsule une paire clé/valeur. La liste chaînée contient donc des objets de type Entry qui encapsulent la clé et la valeur.

	Lors de l'invocation de la méthode put, plusieurs opérations sont réalisées :
		-Invocation de la méthode hashCode() sur l'objet qui encapsule la clé
		-La méthode hash() de la classe HashMap utilise son propre algorithme pour déterminer un indice à partir de la valeur de hachage de la clé
		-Un objet de type Entry qui encapsule la clé et la valeur est instancié
		-Si l'indice est d'une case qui est vide alors l'instance de type Entry est ajoutée a cette case (ajouté comme premier el de la liste qui est dans cette case:)).
		-Si la case n'est pas vide, la liste chainée est parcourue en commençant par le premier element puis en invoquant successivement sa méthode next(). La clé de l'élément est comparée à la clé de l'élément Entry courant en utilisation la méthode equals()
		-Si la même clé est trouvée alors la valeur est remplacée par celle de l'élément à ajouter sinon le nouvel élément de type Entry est ajouté à la fin de la liste chaînée.

	La classe HashMap accepte la valeur null comme clé : dans ce cas, la clé est placée à l'index 0 dans le tableau.

	Plusieurs éléments pouvant être stockés à un même index, il est nécessaire de parcourir ses éléments qui sont dans une liste chaînée, encapsulés dans des objets de type Entry. Le parcours se fait en invoquant la méthode next(). C'est la méthode equals sur les clés qui est utilisé pour détérminer si cette element a ajouter a un clé qui est deja dans la liste chainé ou pas.

	Pour obtenir un élément de la collection grâce à la méthode get(), le mode de fonctionnement est similaire à l'ajout. Lorsde l'invocation de la méthode get():\
		-L'indice du case dans le tableau est déterminé en utilisant la valeur de hachage de la clé : on calcule la valeur de hachage de la clé en utilisant hashcode puis on utilisa la fct hash sur cette valeur et comme ca on determine l'indice de l'element cherché dans le tableau.\
		-Si l'indice est d'une case qui est vide alors l'élément n'est pas trouvé\
		-Si la case ne contient qu'un seul élément, c'est la valeur de cet élément qui est retournée\
		-Si la liste chaînée du case contient plusieurs éléments alors chaque élément est parcouru en commençant par le premier element de la liste puis invoquant successivement sa méthode next() pour en trouver un dont la clé soit égale à la clé recherchée en invoquant la méthode equals()\
		-Si un élément est trouvé alors c'est la valeur de cet élément qui est retournée\
		-Si aucun élément n'est trouvé alors la valeur retournée est null.

	La méthode equals() des clés est utilisée pour assurer l'unicité des clés dans la collection et pour retrouver le bon élément. Donc elle doit etre bien implementé.

	Il est très important que la valeur de hachage d'un objet utilisé comme clé ne change pas car cette valeur est utilisée pour déterminer la case du tableau qui contient l'élément. Si un élément est ajouté dans la collection avec une clé ayant une certaine valeur de hachage et que cette valeur de hachage est différente lors de la recherche de clé dans la collection, l'élément ne sera probablement pas retrouvé alors qu'il est bel et bien dans la collection.

	Si le facteur de charge est atteint, alors la taille de la collection est agrandie : la taille du tableau de hachage est doublée en recréant une nouvelle instance du tableau. Cette opération implique un recalcul de tous les indices des elements : cette fonctionnalité est appelée rehash car elle redéfinit toutes les valeurs des indices.

	Lorsque la collection est redimensionnée, chaque élément est déplacé du tableau initial dans le nouveau tableau dont la taille est doublée. Lors de ce transfert, l'indice de l'élément dans est recalculé, ce qui fait qu'il peut rester le même ou être modifié.



* caractéristique:

	- HashMap n'autorise pas les clés en double mais autorise les valeurs en double.
	- HashMap autorise également la clé null, mais une seule fois et plusieurs valeurs nulles.
	- Elle ne garantit aucun ordre lors du parcours des éléments de la collection.

* constructeurs:
	
	```java
	//crée une HashMap qui a une capacité de 16 et un facteur de charge de 0.75
	HashMap()										

	//crée une HashMap qui a la capacité en param et un facteur de charge de 0.75
	HashMap​(int initialCapacity)					 

	HashMap​(int initialCapacity, float loadFactor)	 : 

	HashMap​(Map<? extends K,​? extends V> m)		  :
	``

* parcourir une HashMap
	```java
	var ages = new HashMap<String, Integer>(){{
		put("alae touba", 21);
		put("bill gates", 60 );
		put("elon musk", 49);
	}};
	```

	//methode1
	```java
	for (Map.Entry<String, Integer> entry: ages.entrySet())
		System.out.println(entry.getKey() + " is " + entry.getValue());
	```

	//methode2
	```java
	for(String key: ages.keySet())
		System.out.println(key + " is " + ages.get(key));
	```

	//methode3
	```
	//par ex: alae touba is 21
	ages.forEach((key, value) -> System.out.println(key + " is " + value)); 
	```

* complexité:
  
  	recherche, ajout, suppression: O(1)

## LinkedHashMap<K,V>:

```java
public class LinkedHashMap<K,​V> extends HashMap<K,​V> implements Map<K,​V>
```

* définition:

	LinkedHashMap est juste comme HashMap avec une fonctionnalité supplémentaire de maintenir l'ordre d'insertion des éléments dans le tableau de hachage. pour cela LinkedHashMap utilise une liste doubelement chainé. Comment? les elements d'une hashMap sont stocké dans des liste chainé, donc chaq element a un clé, une valeur, et un pointeur vers l'element suivant dans la liste chainé; Maintenat dans le cas d'une LinkedHashMap, en plus de ces 3 champs(clé,valeur,pointeur vers suivant) on va avoir deux pointeurs de nouveau, un qui pointe vers l'element inséré avant et un qui va pointer sur l'element qui va etre insere dans le future .

	donc si on appele les elements stocké dans cette LinkedHashMap: LinkedHashMapEntry<K, V> alors ces elements vont avoir cette forme:
	```java
	class LinkedHashMapEntry<K, V>{
		K key;
		V value;
		HashMapEntry<K, V> next; //pointeur vers l'elemet suivant dans la liste chainé (la liste qui est stocké dans case :) )
		LinkedHashMapEntry<K, V> before, after; //pointeurs vers l'element inséré avant et l'element qui va etre inseré aprés.
	}
	```	
	
	donc une LinkedHashMap c'est tout simplement une HashMap simple, mais cette fois ci, les elements (Map.Entry dans le cas d'une HashMap) stockés dans les listes chainés (qui sont stocké dans les cases du tableau de hachage) vont avoir deux champs en plus de la clé et la valeur et le pointeur vers l'element suivant dans la liste chainé , et ces deux champs sont un pointeur vers l'element qui a été insére précedement. 

* démo:
	```java
	var ages = new LinkedHashMap<String, Integer>(){{
		put("alae touba", 21);
		put("bill gates", 60 );
		put("elon musk", 49);
	}};
	```
	

	//methode3
	```java
	ages.forEach((key, value) -> System.out.println(key + " is " + value));
	```

	```
	alae touba is 21
	bill gates is 60
	elon musk is 49
	```

	l'affichage corréspond a l'ordre d'insertion des elements.

## TreeMap<K, V>

```java
public class TreeMap<K,​V> extends AbstractMap<K,​V> implements NavigableMap<K,​V>, Cloneable, Serializable
```

* définition:

	La classe TreeMap est une Map qui stocke des éléments de manière triée dans un arbre (binary search tree) red-black (red black tree).

	Les éléments de la collection sont triés selon l'ordre naturel de leur clé (s'is implémentent l'interface Comparable) ou enutilisant une instance de type Comparator fournie au constructeur de la collection.

	La classe TreeMap propose plusieurs constructeurs dont un qui permet de préciser l'objet Comparable pour définir l'ordredans la collection.

* constructeurs:
	```java
	//constructeur par défaut qui crée une collection vide utilisant l'ordre natureldes clés des éléments
	TreeMap()									
	
	//Créer une instance vide qui utilisera le Comparator fourni en paramètre pourdéterminer l'ordre des éléments
	TreeMap​(Comparator<? super K> comparator)	 
	
	//Créer une instance contenant les éléments fournis en paramètres qui utiliseral'ordre naturel des clés des éléments
	TreeMap​(Map<? extends K,​? extends V> m)	  
	
	//Créer une instance contenant les éléments fournis en paramètres
	TreeMap​(SortedMap<K,​? extends V> m)		 
	```
* méthodes:

	```java
	//Renvoie une entré clé-valeur associé à la plus petit clé, ou null si'elle est vide.	
	Map.Entry<K,​V> firstEntry()

	//Renvoie une entré clé-valeur associé à la plus grande clé, ou null si'elle est vide.	
	Map.Entry<K,​V> lastEntry() 

	//retourne la premier clé (plus petite)
	K firstKey() 

	//retourne la derniere clé (plus grande)
	K lastKey()  
	
	//supprime et renvoie une entré clé-valeur dont la clé est la plus petite (premiere clé dans l'arbre) 
	//ou null si l'arbre est vide
	Map.Entry<K,​V> pollFirstEntry() 

	//supprime et renvoie une entré clé-valeur dont la clé est la plus grande (dernier clé dans l'arbre) 
	//ou null si l'arbre est vide
	Map.Entry<K,​V> pollLastEntry()  
	
	//renvoi une entré clé-valeur dont la clé est la plus petite parmie les clés qui sont plus grande
	// que key.
	Map.Entry<K,​V> higherEntry​(K key) 

	//renvoi une entré clé-valeur dont la clé est la plus grande parmie les clés qui sont plus petite
	//que key.
	Map.Entry<K,​V> lowerEntry​(K key) 

	//retourne la clé la plus petite parmi les clés qui sont plus grande que key
	K higherKey(K key)

	//retourne la clé la plus grande parmi les clés qui sont plus petite que key
	K lowerKey(K key) 
	...
	```

* complexité:

	puisq une TreeMap est implementé en utilisant une arbre binaire equilibré (Red Black Trees), alors la compléxité des opérations usuelles comme: search, add, remove sont en O(h) (ou h == log(n)) ==> en O(log(n))

## l'interface Set: 

* definition:

	L'interface Set définit les fonctionnalités d'une collection qui ne peut pas contenir de doublons dans ses éléments.
	
	Les éléments ajoutés dans une collection de type Set doivent réimplémenter leurs méthodes equals() et hashCode(). Ces méthodes sont utilisées lors de l'ajout d'un élément pour déterminer s'il est déjà présent dans la collection.  La valeur retournée par hashCode() est recherchée dans la collection :\
		-si aucun objet de la collection n'a la même valeur de hachage alors l'objet n'est pas encore dans la collection et peut être ajouté\
		-si un ou plusieurs objets de la collection ont la même valeur de hachage alors la méthode equals() de l'objet à ajouter est invoquée sur chacun des objets pour déterminer si l'objet est déjà présent ou non dans la collection.

* méthodes:
	
	```java
	//ajouter l'element a la collection s'il n existe pas
	boolean add(E e)

	//:Ajouter tous les éléments de la collection fournie en paramètre à la collection sicelle−ci ne 
	//les contient pas déja
	boolean addAll(Collection<?extends E> c)	

	void clear()
	
	boolean contains(Object o)

	booleancontainsAll(Collection<?> c)

	//permet de tester l'egalité de deux collections
	boolean equals(Object o)

	boolean isEmpty()

	Iterator<E> iterator()

	//supprimer l'element si il existe.
	boolean remove(Object o)

	booleanremoveAll(Collection<?> c)

	int size()

	Object[] toArray()

	<T> T[] toArray(T[] a)
	```
	

* implementations:
	
	plusieurs classes implémentent cette interface, parmie eux: **HashSet, TreeSet, LinkedHashSet.**


## HashSet:

* definition:
	
	La classe HashSet, ajoutée à Java 1.2, est une implémentation simple de l'interface Set qui utilise une HashMap

	La classe HashSet présente plusieurs caractéristiques :
    * elle ne propose aucune garantie sur l'ordre de parcours lors de l'itération sur les éléments qu'elle contient
    * elle ne permet pas d'ajouter des doublons mais elle permet l'ajout d'un élément null

	La classe HashSet utilise en interne une HashMap dont la clé est l'élément et dont la valeur est une instance d'Objecti dentique pour tous les éléments.


* constructeurs:

	```java
	//Créer une nouvelle instance vide dont la HashMap interne utilisera une capacitéinitiale et un 
	//facteur de charge par défaut.
	HashSet()	
		
	//Créer une nouvelle instance contenant les éléments de la collection fournie enparamètre
	HashSet(Collection<? extends E> c)
		
	//Créer une nouvelle instance vide dont la HashMap interne utilisera la capacitéinitiale fournie
	//en paramètre et un facteur de charge par défaut
	HashSet(int initialCapacity)	
		
	//Créer une nouvelle instance vide dont la HashMap interne utilisera la capacitéinitiale et un 
	//facteur de charge par défaut
	HashSet(int initialCapacity, floatloadFactor):
	```
	

* demo:
	
	```java
	public static void main(String[] args) {
		HashSet<String> set = new HashSet<>();
		set.add("alae");
		set.add("jhon");
		set.add("jhon");
		set.add("salma");

		System.out.println("size : " + set.size());	//3
		System.out.println(set);	//[salma, alae, jhon]
	}
	```

* complexité:
  
	add, remove, search: O(1)

## TreeSet:

* definition:

	La classe TreeSet, ajoutée à Java 1.2, stocke ses éléments de manière ordonnée en les comparant entre−eux.
	Une collection de type TreeSet ne peut pas contenir de doublons.

	L'ordre des éléments de la collection peut être défini par deux moyens :
	- l'ordre naturel des éléments s'ils implémentent l'interface Comparable
	- l'ordre obtenu par l'utilisation d'une instance de type Comparator fournie en paramètre du constructeur de lacollection

	Le mécanisme utilisé pour la comparaison lors de la définition de l'ordre (Comparable ou Comparator) doit être cohérentavec l'implémentation de la méthode equals() : si element1.compareTo(element2) == 0 alors obligatoirementelement1.equals(element2) == true

	En interne, la classe TreeSet utilise un arbre binaire pour stocker ses éléments.

	Java utilise l'algo Red Black pour garder l'arbre binaire equilibré.

* constructeurs:
	
	```java
	//Créer une instance vide dont l'ordre naturel de tri de ses éléments est utilisé
	TreeSet():
		
	//Créer une instance contenant les éléments de la collection fournie en paramètredont l'ordre naturel
	// de tri de ses éléments est utilisé
	TreeSet(Collection<? extends E> c)
		
	//Créer une instance vide dont l'ordre utilisé est celui définit par l'instance de typeComparator 
	//fournie en paramètre
	TreeSet(Comparator<? super E>comparator):
		
	//Créer une instance contenant les éléments de la collection fournie en paramètredont l'ordre est 
	//celui utilisé par la collection
	TreeSet(SortedSet<E> s):
	```		

* demo:

	```java
	public static void main(final String[] args) {    
		TreeSet<String> set = new TreeSet<String>();    
		set.add("CCCCC");    
		set.add("BBBBB");    
		set.add("DDDDD");    
		set.add("BBBBB");    
		set.add("AAAAA");    
		
		Iterator<String> iterator = set.iterator();  
		while (iterator.hasNext()) {    
			System.out.print(iterator.next() + " "); 		//AAAAA BBBBB CCCCC DDDDD 
		} 
	}
	```
* complexité:
	
	add, remove, search ==> O(log(n))




## les types primitives en java (primitive types):
	
* java a 8 types primitives:	 boolean, byte, char, short, int, long, float, double.

* ces types primtives ne peuvent pas contenir la valeur null

* lorsqu'on definit un long, on doit le suffixe par L (ex: 32L), car sinon le compilateur va le considerer comme un int et si on fait par ex:
	
	long a = 32;

	le compilateur va considerer que 32 est un int et donc doit faire la conversion a un long ;)\
	la convention est d'utilise un L majuscule pour faire la difference entre l et 1(un)

* lorsqu'on definit un float on utilise un F (32.7f) et lorsqu'on definit un double d (32.55D)

* size en mémoire et valeurs par defaut:

	|<!---->|size(bits)|valeur-par-defaut|
	|-|-|-|
	|boolean|1|false|
	|byte|8|0|
	|char|16|\u0000|
	|short|16|0|
	|int|32|0|
	|long|64|0|
	|float|32|0.0|
	|double|64|0.0|
		
	> java ne vas affecter une valeur par defaut a un variable qui est locale a une fct

## variable locale:
	
déclaré dans une méthode, block de code {}

## difference entre les types primitives et les objets (difference between primitive types and reference types):

* les types primitives ne peuvent pas stocker la valeur null, contrairement aux objets.

* quand on crée un variable de type primitive et on lui affecte une valeur comme ca:
	```java
	int a = 10;
	```

	alors une variable nommé a est crée en mémoire et ce variable stocke directement la valeur 10.

* quand un objet est créer de cette maniere par exe:
	```java
	int a[] = {1, 2, 3};
	```

	alors une variable nommé a est crée en mémoire mais ce variable ne stocke pas la valeur qui est le tableau mais st0ocke seulement l'adresse du tableau en mémoire .

	c-a-d , si on fait maintenant:
	```java
	int b[] = a;
	```
	alors maintenat une variable nommé b est crée en mémoire, et ce qu'on a fait est qu'on copier la valeur de a dans b, et la valeur de a est une adresse, donc b conteint maintenat en mémoire aussi une adresse, c'est l'adresse du tableau, donc maintenat a et b les deux pointent vers le meme tableaux en mémoire, ce qui veut dire que les changement faites a ce tableau a travers le variable a, vont etre reflété en b.\
	Ceci est une grande difference avec les types primtive car si on a fait:
	```java
	int b = a;
	```
	
	alors maintenat c'est seulement 5 (la valeur stocké dans a) qui est a, et les deux variables a et b sont independants.


## le mot clé final:

* final est utilisé dans plusieurs contextes: pour les variables, méthodes et classes.

* final pour les variables:
  
	- un variable déclaré avec final ne peut pas affecté une autre valeur.

		```java
		final int a = 8;
		a = 9; //Erreur
		```

	- pour les types primitives cela signifie une constante

	- pour les objets, on peut pas leur affecter une autre valeur mais rien n'empeche l'etat de l'objet de changer en interne.
		```java
		final int a[] = {1, 2};
		a = new int[]{1, 2};  //Erreur

		a[0] = 199; //OK!
		```

		

	- si un variable d'instance est déclaré final alors il doit etre initialisé lors de sa déclaration ou dans le constructeur

		//OK
		```java
		class Student{
			final int age = 10;
		}
		```

		//OK
		```java
		class Student{
			final int age;

			Student(){
				age = 39;
			}
		}
		```

		//Erreur
		```java
		class Student{
			final int age; //non initailisé!!
			
			public Student(){
			}
		}
		```

		//Erreur
		```java
		class Student{
			final int age; //non initailisé!!
		}
		```
		pourquoi erreur dans ces deux cas? dans le 1er cas on un constructeur par defaut, et dans le 2eme cas on aussi un constructeur par défaut.. on sait que avec un constructeur par defaut comme celui defini dans le 1er cas ou que java definit pous nous dans le 2eme cas, on va avoir nos attribut initialisé par Java a leurs valeurs par défaut, c-a-d 0, 0.0, et false pour les primitives et null pour les objets. Donc dans les deux cas on va avoir **age** qui est initialisé a 0, et puisq age est final alors on va pas etre capable de lui donner une autre valeur, c'est pour cela que Java nous impose d'initialisé un attribut final dans le constructeur :) 
	
	- un variable qui est "blank final" c'est un variable qui n'est pas initialisé lors de sa déclaration. comme par ex:
		
		```java
		final int a;	//declaration
		a = 10;			//initialisation
		```

		ou

		```java
		class Student{
			final int age;

			Student(){
				age = 39;
			}
		}
		```



* finale pour les classes:

	si une classe est déclaré final alors on peut pas hérité de cette classe.

* final pour les méthodes:
	
	si une méthode est declaré final dans une super classe alors on peut pas la rédefinir dans une sous classe:
	
	```java
	class A{
		final void m1(){
			System.out.println("This is a final method.");
		}
	}

	class B extends A{
		void m1(){
			// COMPILE-ERROR! Can't override.
			System.out.println("Illegal!");
		}
	}
	```

## les modificateurs d'accés (access modifiers )

les modificateurs d'accés controlent l'accés aux variables encapsulé dans une classe.

* private: le variable est visible seulement dans la classe
* public: le variable est visible partout
* protected: le variable est visible dans le meme package et dans les sous classes
* none/friendly: le variable est visible dans le meme package

## Pourquoi les modificateurs d'accès aux membres d'une sous classes doivent-ils être moins restrictif que les modificateurs d'acces aux memes membres dans la super classe?

Selon le concept d'héritage, on doit  pouvoir utiliser un objet de sous-classe avec une référence de sa super classe. Cela ne sera pas possible si le membre de la classe est déclaré avec un modificateur d'accès plus restrictif que dans sa super classe.



## le modificateur static pour les variables et les méthodes:

* si on ajoute static a la declaration d'une variable:
	- la valeur de la variable est partagé entre tous les instance de la classe
	- pas possible pour les variables locales

* si on ajoute static a une méthode:
	- on peut appeler la méthode en utilisant le nom de la classe sans construire d'objets.
	- diverses restrictions sur le contenue de la méthode statique...

* les variables statiques:

	* difference entre variable d'instance et variable statique 
		
		- variable d'instance:
			- reservation d'une zone mémoire pour chaque objet construit avec new
			- résulat: chaq objet a sa propre zone/valeur pour la variable d'instance.

		- variable statique:
			- réservation d'une zone lors du chargement de la classe
			- aucune zone n'est reservé lorsqu'un objet est construit avec new
			- résultat: tous les objets se référent a la meme zone/valeur pour la variable de la classe

	* a quoi sert une variable statique:

		représentation d'une valeur qui est commune a tous les objets de la classe.

	* une variable statique peut etre manipulé en utilisant la classe elle meme ou just une instance de la classe
        
		```java 
		class A{
			public static  int STATIC = 10;
		}
		```

		main():
		```java
		System.out.println(A.STATIC);
		System.out.println(new A().STATIC);  //a travers une instance, PAS RECOMMANDÉ
		```
* les méthodes statiques:

	* on peut acceder a une méthode statique par la classe elle meme ou just une instance 
		```java
		class A{
			public static void  m(){
				System.out.println("static method");
			}
		}
		```

		
		main():
		```java
		A.m();		//static method
		new A().m(); //static method
		```

	* restrictions sur les méthodes statiques:
		
		puisqu'une méthode statique peut etre appélé sans objet, seulement avec le nom de la classe alors une méthode statique ne peut pas acceder a des variables/méthodes d'instance qui dépend d'un objet (ont besoin d'un objet).

	* utilité des méthodes statiques:
		
		creation d'une classe avec des méthodes utilitaires comme une class 'MathUtils' qui contient plusieurs méthodes mathematique par exemple.


## les classes statiques (static classes):

* definition:

	Une classe statique est une classe imbriquée/interne qui est un membre statique de sa classe externe. Elle est accessible sans instancier la classe externe. Tout comme les méthodes statiques, une classe imbriquée statique n'a pas accès aux variables d'instance et aux méthodes non statique de la classe externe.

	(seulement les classes interne peuvent etre statique)

* exemple:

	```java	
	class Outer{
		static String message = "hello world!";
		int age = 21;

		static class InnerStatic{
			void sayHey(){
				System.out.println("hey, " + message); //hey, hello world!
			
			}
		}
	}
	```

## les blocs statiques dans une classe (static blocks / class initializer):

* definition:
  
	un bloc statique dans une classe (s'appelle aussi class initializer) c'est un bloc qui est executé une seule fois et ceci quand la classe est chargé au memoire, c-a-d avant qu'aucune instance de la classe est crée.

	Les blocs statiques sont executé dans l'ordre dans lesquels ils sont definis.
	
	Ils sont utilisé géneralement pour s'assurer que tous les resources dont la classe a besoin sont disponibles, par exemple un driver, une connexion avec la BD.
	
	Ils n'ont pas acces aux champs non statiques de la classe biensur.
* exemple:
	
	```java
	class A{
		static {
			//todo, setup DB connection for ex
		}
	}
	```

## l'utilité des setters en java :
	
Parce que dans 2 semaines (mois, années) à partir de maintenant, on va constaté que notre setter doit faire plus que simplement definir la valeur (peut etre faire qlqs validations) et on va constaté aussi la propriété a été utilisée directement dans 200 autres classes :-)

* exemple:

	```java
	public class Person {
		private String name;
		public void setName(String name) {
			if( name.isEmpty() ){
				System.out.println(“Name string is empty”); 
				//throw exception
			}
			this.name = name;
		}
	}
	```
	
## comment garantir qu'un bloc de code soit tjrs executé?
	
le placer dans un bloc finnally, par ex:

```java
try{
	//something
}finnaly{
	//va etre tjrs executé meme si une excpeion est levé dans le bloc try
}
```

sauf des cas ou meme si le code est dans finnaly il va pas etre executé:
```java
System.exit()
```

la JVM crache


## comment les chaines de caracteres (la classe String) est répresenté/implementé? todo:
	
avec un tableau de chars.


## generics:

* definition:

	la généricité veut dire types paramétrés (parameterized types en anglais). Ces types paramétrés vont nous permettre de créer des classes, méthodes et interfaces où le type de données sur lesquelles elles opèrent est spécifié comme paramètre. C-a-d, en utilisant la généricité, il est possible de créer une classe qui travaille automatiquement avec different type de donnés qui sont spécifié comme parametre.
	Le principe de généricité est important car, souvent, l'algorithm est le meme, ce sont les donnés qui different, prenons par exemple, une implementation d'une pile(stack), une pile fonctionne de la meme maniere qlq soit le type de donné qu'elle stocke.

	
* exemple d une classe générique:

	```java
	class Gen<T>{
		private T obj;

		Gen(T obj){
			this.obj = obj;
		}

		public T getObj() {
			return obj;
		}

		public void setObj(T obj) {
			this.obj = obj;
		}

		public void showType(){
			System.out.println(obj.getClass().getName());
		}
	}
	public class Main {
		public static void main(String[] args) {
			Gen<Integer> intObj = new Gen<>(1);
			int a = intObj.getObj();
			System.out.println(a); 	//1
			intObj.showType();		//java.lang.Integer

			Gen<String> strObj = new Gen<>("alae");
			System.out.println(strObj.getObj());	//alae

			intObj = strObj;	//Erreur
		}
	}
	```
	
	Gen est une classe générique qui prend en parametre un type T. T est utilisé seulement comme un placeholder pour le type qui va etre passé a la classe Gen quand une instance de la classe est crée.

	la derniere ligne est une erreur car intObj est de type Gen\<Integer\> et dont ne peut pas référencer un objet strObj qui est de type Gen\<String\>.

* convetions de nommage pour les parametres:
	
	```
	E: element (element d'un collection par ex)
	T: type
	K: key
	V: value
	```

* La généricité travaille seulement avec les types de référence et non pas les types primitives:
	
	on peut pas faire par exemple:
	```java
	Gen<int> i = new Gen<>(1);
	```
	
	mais ceci n'est pas une restriction car on peut tjrs utilisés les "types wrappers" comme Integer dans ce cas.

* Les objets crée a partir d'une classe générique vont se différer en fonction de leur arguments:
	
	exemple:
	```java
	Gen<Integer> i = new Gen<>(1);
	Gen<String>  s = new Gen<>("qef");
	```
	
	on peut pas faire i = s (ou s = i) meme si les deux sont des intances du classe Gen<T>, mais vu que T est different, alors les deux objets i et s vont etre considéré comme deux objets differents.

* On peut utiliser la classe Object pour atteindre le but des généricité mais ceci a des problemes:
	
	Avant la découverté/creation du généricité en java, on a utilisé, pour atteindre les buts de la genericité, la classe Object comme reference aux differents types qu'on veut travailler avec, car puisq Object est la super classe de tous les classes java, alors elle peut etre utilisé pour referencer tout type d'objets.
	
	Mais ceci a deux problemes majeurs: 	
    * des casts explicites doivent être utilisés pour récupérer les données stockées.
    * plusieurs erreurs ne peuvent etre découvertes qu'au moment de l'execution.

	exemple:
	```java
	class Gen{
		private  Object obj;

		public Gen(Object obj){
			this.obj = obj;
		}

		public Object getObj() {
			return obj;
		}
		
	}
	public class Main {
		public static void main(String[] args) {

			Gen intObj = new Gen(1);
			int a = (Integer) intObj.getObj();  //cast -_-
			System.out.println(a);

			Gen strObj = new Gen("alae");
			String s = (String)strObj.getObj(); //cast -_-

			//Ces deux lignes se compilent bien
			intObj = strObj;
			System.out.println((Integer)intObj.getObj());	//erreut au moment d'execution du programme

		}
	}
	```
	**int a = (Integer)intObj.getObj()** => ici il est nécessaire de faire un cast, car getObj retourne un objet de type Object.

	ces deux lignes se compilents bien:
	```java
	intObj = strObj;
	System.out.println((Integer)intObj.getObj());
	```
	
	car intObj et strObj sont de meme type (Gen), donc ils peuvent referncer l'un l'autre.
	mais le deuxiemme lignes produit un erreur au mement d'execution car maintenat intObj fait reference a un objet qui stocke une chaine de caractere et non pas un entier.
	Avec la généricité on n'a pas ce genre de problemes, et on evite beaucoupe d'exceptions de type ClassCastException.


* Bounded types:
	
	Avec les exemples précedents de Gen<T>, on pouvait passé tout type T a Gen, n'importe quelle classe . Mais supposont maintenant qu'on veut controler les types passé a notre classe generique, c-a-d supposont qu'on veut que notre classe travaille seulement avec des classes qui etend d'une classe particulière, ou bien travaille just avec des classe qui implémént une interface donné. On va etre capable de faire ceci en utilisant ce qu'on appele Bounded types.

	* exemple:

		supposons qu'on veut créer une classe generique qui calcule la valeur moyen des nombre contenue dans un tableau.

		Au premier lieu on peut penser a faire qlq chose comme ca:

		```java
		class Stats<T>{
			T[] array;

			public Stats(T[] array){
				this.array = array;
			}

			public double average(){
				double sum = 0.0;
				for(int i = 0; i < array.length; i++)
					sum += array[i].doubleValue();
				
				return sum / array.length;
			}
		}
		```

		mais ceci ne vas pas se compiler, car doubleValue est une méthode de la class Number, qui est la super classe d'Integer et Long et Double et ..etc

		Le compilateur ne sait pas qu'on veut passer une classe Integer ou Long ou .. a Stats<T>, car T peut représenter la classe String aussi (T peut representer n'importe quelle classe).

		Donc on doit avoir un moyen de spécifier au compilateur que les types T qu'on veut passer a Stats<T> doivent etre seulement des sous classes de la class Number (Integer, Double...) et non pas d'autres classe(on veut que seulement des sous classe de Number qui soient accéptés comme param T ).
		
		Ce moyen est ce qu'on appelle Bounded types. 

		Voila le code:
		```java
		class Stats<T extends Number>{
			T[] array;

			public Stats(T[] array){
				this.array = array;
			}

			public double average(){
				double sum = 0.0;
				for(int i = 0; i < array.length; i++)
					sum += array[i].doubleValue();

				return sum / array.length;
			}

		}
		public class Main {
			public static void main(String[] args) {
				Integer[] intArray = {1, 2, 3, 4};
				Stats<Integer> statsInt = new Stats<>(intArray);
				double averageInt = statsInt.average();
				System.out.println(averageInt);		 			//2.5

				Double[] doubleArray = {1.998, 2.8, 3.9, 4.9};
				Stats<Double> statsDouble = new Stats<>(doubleArray);
				double averageDouble = statsDouble.average();
				System.out.println(averageDouble);				//3.3995
			}
		}
		```
			
		la syntaxe Stats\<T extends Number\> veut dire que notre classe generique Stats va maintenat n'accepter que les types T qui sont la classe Number ou une sous classe  de la classe Number (ie Integer, Long...).\
		et c'est ca ce qu'on veut nous car on voulait travailler avec un tableau de nombres :)

		Et si maintenant on tente de passer une classe qui n'est pas une sous classe du Number comme param T, le progamme ne vas pas se compiler, par exemple, si on tente de faire:
		
		```java
		Stats<String> ...
		```
		
		ceci ne vas se compiler car String n'est pas une sous classe de Number.

		On peut specifier aussi que notre type desiré T implemente certaines interfaces, la syntaxe est comme suit:
		```java
		class Stats<T extends MyClass & MyInterface & MyInterface2..> { // ...
		```
			
		(si notre type doit etendre d'une classe et implemente des interfaces alors le nom du super classe doit etre spécifier avant les interfaces implementé)
			

* utilisation du wildcard(? / joker):
	
	supposons qu'on veut ajouter a notre class Stats une méthode sameAverage qui va prendre en parametre un objet de type Stats aussi et va nous dire si les tableaux contenues dans l'objet invoquant la méthode et l'objet passé comme argument a la méthode, ont la meme moyenne.

	(ps: le type de donnés contenues dans les tableau peut etre differents, c-a-d le tableau de l'objet invoquant peut contenier des entiers et le tableau de l'objet passé comme argument peut contenir des doubles.)

	en premier lieu on peut penser a faire qlq chose comme ca:
	```java
	public boolean sameAverage(Stats<T> o){
		return average() == o.average();
	}
	```

	le probleme avec ce code est qu'il ne va travailler qu'avec des objet Stats dont le type T est le meme que l'objet invoquant.\
	par exemple si l'objet invoquant est de type Stats\<Integer\> alors l'argument passé a sameAvergae doit aussi etre de type Stats\<Integer\> (peut pas etre par ex Stats\<Double\>).Pour résoudre ce probleme on peut utiliser le wildcard(?) comme ceci:
		
	```java
	//? représente l'inconne (c-a-d o peut etre de type Stats<Integer> ou Stats<Double> ou Stats<Float> ...etc)
	public boolean sameAverage(Stats<?> o){
		return average() == o.average();
	}
	```

	Pour résoudre ce probleme on peut utiliser le wildcard(?) comme ceci:
		
	```java
	//? représente l'inconne (c-a-d o peut etre de type Stats<Integer> ou Stats<Double> ou Stats<Float> ...etc)
	public boolean sameAverage(Stats<?> o){
		return average() == o.average();
	}
	```

	voila l'exemple complet:
	```java
	class Stats<T extends Number>{
		T[] array;

		public Stats(T[] array){
			this.array = array;
		}

		public double average(){
			double sum = 0.0;
			for(int i = 0; i < array.length; i++)
				sum += array[i].doubleValue();

			return sum / array.length;
		}

		public boolean sameAverage(Stats<?> o){
			return average() == o.average();
		}

	}
	public class Main {
		public static void main(String[] args) {
			Integer[] arr1 = {1, 2, 3};
			Stats<Integer> intStats = new Stats<>(arr1);

			Double[] arr2 = {2.5, 3.5, 0.0};
			Stats<Double> doubleStats = new Stats<>(arr2);

			System.out.println(intStats.sameAverage(doubleStats));
		}
	}
	```
		
	la ligne
	```java 	
	public boolean sameAverage(Stats<?> o){
	```
	veut dire qu'on peut passer a la méthode n'importe quel objet Stats valide. c-a-d on peut passer soit Stats\<Integer\> soit Stats\<Double\>...

* bounded wildcard:

	on va comprendre ceci a travers un exemple:
	```java
	class TwoDim{
		int a,b;

		public TwoDim(int a, int b){
			this.a = a;
			this.b = b;
		}
	}

	class ThreeDim extends TwoDim{
		int c;
		public ThreeDim(int a, int b, int c){
			super(a, b);
			this.c = c;
		}
	}

	class FourDim extends ThreeDim{
		int d;
		public FourDim(int a, int b, int c, int d){
			super(a, b, c);
			this.d = d;
		}
	}

	class Coords<T extends TwoDim>{
		T obj;
		public Coords(T obj){
			this.obj = obj;
		}
	}
	```
	
	on une hierarchie de classe: TwoDim, ThreeDim et FourDim. Et on a créer une classe générique qui a comme parametre un objet TwoDim ou une sous classe de TwoDim.

	supposons maintenat qu'on veut créer une méthode qui prend en param un objet de type Coords et afficher les dimensions a et b, ceci est facile:
	```java
	static void showAB(Coords<?> coords){
		System.out.println(coords.obj.a + " / " + coords.obj.b);
	}
	```
	
	
	Mais supposons maintenat qu'on veut que notre méthode afficher aussi la dimension c. On peut pas utiliser l'entete de la méthode précédente car ceci:
	```java
	static void showAB(Coords<?> coords)
	```
		
	veut dire que la méthode accepte n'importe objet de type Coords meme un objet de type Coords\<TwoDim\> et la classe TwoDim n'a pas la dimension c.
	
	Donc la solution est l'utilisation du "bounded wildcards" comme ceci:
	```java
	static void showABC(Coords<? extends ThreeDim> coords){
		System.out.println(coords.obj.a + " / " + coords.obj.b + " / " + coords.obj.c);
	}
	```	
		
	
	maintenant ce qui est accépté comme paramatre de la classe Coords est seuelement ThreeDim ou une sous classe du ThreeDim (pas de TwoDim :) )
	Voila l'utilité des bounded wildecards

* creation d'une méthode générique:
	
	comme on a pu créer une méthode générique qui travaille avec different type de donnés, on va etre capable de faire la meme chose avec les méthodes qui sont en dehors d'une classe generique.

	```java
	public class Main {
		public static void main(String[] args) {
			System.out.println(isIn(new Integer[]{1, 2, 2}, 1));    //true
			System.out.println(isIn(new String[]{"alae", "salma", "safae"}, "salma"));  //true
			System.out.println(isIn(new String[]{"alae", "salma", "safae"}, "fatiha")); //false
		}


		static <T>  boolean isIn(T[] array, T element){
			for(int i = 0; i < array.length; i++)
				if(array[i].equals(element))
					return true;

			return false;
		}
	}
	```

	le type de parametre doit etre déclaré avant le type de retour du méthode.\
	il faut noter que de la méme maniere qu'on a fait avec les classes, si on veut specifier un upper bound pour le type T on pouvait la faire. Par ex supp qu'on veut passer a notre méthode seulement une tableau d'élement comparable alors on va faire:	
	```java
	static <T extends Comparable<T>> isIn(T[] array, T element){ ... }
	```
		


* constructeurs générique:
	
	Il est possible de créer une constructeur générique dans une classe qui n'est pas générique.\
	(un constructteur est méthode et on peut créer des méthodes générique => donc on peut créer un constructeur générique)

	exmeple:
	```java
	class GenConst{
		double val;

		<T extends Number> GenConst(T param){
			val = param.doubleValue();
		}
	}
	public class Main {
		public static void main(String[] args) {
			GenConst genConst = new GenConst(10.0);
			System.out.println(genConst.val);  	 //10.0

			GenConst genConst1 = new GenConst(20);
			System.out.println(genConst1.val); 	 //20.0
		}
	}
	```
		


* interfaces générique:
  
	exemple:

	```java
	interface MinMax<T extends Comparable<T>>{
		T min();
		T max();
	}

	class MyClass<T extends Comparable<T>> implements MinMax<T>{
		T[] array;

		//constructeur

		@Override
		T min(){
			//
		}

		@Override
		T max(){
			//
		}
	}
	```
		
	
	Puisq l'interface MinMax a besoin de travailler avec un element T qui est de type Comparable donc la classe MyClass doit avoir le meme parametre T avec le meme bound.
	
	Puisq on a spécifier le type T dans la déclaration de la classe c'est pa la peine de faire la meme chose dans la declaration de l'interface.
	
	enfaite, ceci:
	```java
	class MyClass<T extends Comparable<T>> implements MinMax<T extends Comparable<T>>
	```
		
	est faut et ne vas pas se compiler .

	Une classe qui n'est pas générique peut aussi implementer MinMax, mais le type de T doit etre declaré:
	```java
	class MyClass implements MinMax<T> {}			//erreur
	class MyClass implements MinMax<Integer> {}		//correcte
	```
		

* un peu d'héritage avec la généricité:
	
	supposons qu'on a deux classes:
	```java
	class Animal{}
	class Cat extends Animal{}
	```
	
	voici un code:
	```java
	ArrayList<Animal> aniamls = new ArrayList<>();
	aniamls.add(new Animal());

	ArrayList<Cat> cats = new ArrayList<>();
	```

	on ne peut pas faire:
	```java
	animals = cats;
	```
	
	meme si une Car est une Animal!! car commme on a vu, deux instances de la meme classe générique different en fonction de leurs type de parametres.
	
	donc comment par exemple on crée une méthode qui prend comme argument un arraylist d'animaux (Animal ou Car).

	* sol1:

		```java
		static <T extends Animal> void display(ArrayList<T> aniamls){

		}
		```
		

	* sol2:
		
		```java
		static void display(ArrayList<? extends Animal> aniamls){
			
		}
		```
		
## gestion des exceptions (handling exceptions):

* definition:
	
	Une exception est une condition anormale qui survient dans un code au moment de l'exécution. En d'autres termes, une exception est une erreur d'exécution. 

* Hiérarchie d'exception en Java:
	
	Tous les types d'exceptions sont des sous-classes de la classe Throwable. Ainsi, Throwable est au sommet de la hiérarchie des classes d'exception. Immédiatement en dessous de Throwable se trouvent deux sous-classes importante. Une qui s'appelle Exception. Cette classe est la classe mére de tous les exceptions que java definit. C'est également de cette classe qu'on va hériter pour créer nos propres types d'exceptions. Il existe une sous-classe importante d'exception, appelée RuntimeException. Les exceptions de ce type sont définies automatiquement pour les programmes qu'on ecrit et qui incluent des éléments tels que la division par zéro et l'indexation de tableau non valide.
	L'autre sous classe du Throwable est: Error et qui indique des problèmes graves qu'une application raisonnable ne devrait pas essayer de catcher

	![](imgs/001.PNG)

* utiliser try & catch:
	
	on place le code qu'on suspecte qu'il va lever une exception dans le bloc try, et quand l'exception est levé, Java va donner le control au bloc catch associé a ce bloc try pour executer un code qui gére l'erreur.

	```java
	try{
		
	}catch(ExceptionType e){

	}
	```

* afficher une description de l'exception:
	
	la classe Throwable redefinit la méthode toString(), ce qui va nous permetter d'afficher une descritpion de l'exception qu'on va la catcher.

	```java
	try{
		int a  = 10 / 0;
	
	}catch(ArithmeticException e){
		System.out.println(e);
	}
	```

* plusieurs bloc catch:

	* Dans certains cas, plusieurs exceptions peuvent être levéé par un seul morceau de code. Pour gérer ce type de situation, on peut spécifier plusieurs clauses catch, chacune traite un type d'exception différent. Lorsqu'une exception est levée, chaque instruction catch est inspectée dans l'ordre, et la première dont le type correspond à celle de l'exception est exécutée. Après l'exécution d'une instruction catch, l'exécution se poursuit après le bloc try / catch. (on passe/ne-regarde-pas les autres catch).

	* exemple:
  
		ce code est capable de lever deux types d'exception, ArithmeticException si le variable a est egale a 0, ou ArrayIndexOutOfBoundsException si a >= arr.length.

		```java
		try{
			int a = 10;

			int arr[] = {1, 2, 3};
			
			System.out.println( arr[a] );
			System.out.println( 9 / a );

		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println(e);
		}catch(ArithmeticException e){
			System.out.println(e);
		}
		```

	* lorsqu'on definit plusieurs bloc catch, on doit se rappeler de ne pas mettre en premier les super classe des exceptions qu'on va definit.
	exemple:

		```java
		try{
			int  a / 0;
		}catch(Exception e){
			bloc1;
		}catch(ArithmeticException e){
			bloc2;
		}
		```
		
		c'est bloc1 qui va etre executer meme si l'exception est de type ArithmeticException, car ArithmeticException est une sous classe de la classe Exception. on doit jamaias précder une exception par sa super classe, le code doit etre:

		```java
		try{
				int  a / 0;
		}catch(ArithmeticException e){
			bloc1;
		}catch(Exception e){
			bloc2;
		}
		```

* des blocs try / catch imbriqué:
	
	on peut créer des blocs try /  catch imbriqué, c-a-d des bloc try/catch a l'interieure d'autres blocs try/catch.
	si un bloc catch ne gére pas l'exception levéé par son bloc try alors les autres blocs catch qui sont au dessus de ce bloc catch sont inspecté pour savoir si l'un deux gére l'exception.

	exemple:
			
	```java
	try{
		try{
			System.out.println(10 / 0);
		}catch (ArrayIndexOutOfBoundsException e){
			System.out.println(e);
		}
		System.out.println("after the inner try / catch");
	}catch (ArithmeticException e){
		System.out.println(e);
	}
	System.out.println("after the exterior try / catch");
	```
	resultats

	```
	java.lang.ArithmeticException: / by zero
	after the exterior try / catch
	```
	
	le catch du try a l'interieure ne gere pas l'exception ArithmeticException, donc on monte un niveau et on trouve un bloc catch qui la gére, et ce bloc est executé. et l'execution se poursuit aprés ce bloc catch executé.

* throw:
	
	jusq'a maintenant on a traiter seulement les cas ou les exceptions on été levé par java. Avec le mot clé throw on va pouvoir lever nous meme explicitement une exception.

	exemple:

	```java
	try{
		String name = null;
		if(name == null)
			throw new NullPointerException();
	}catch(NullPointerException e){
		System.out.println(e);
	}

	```

* throws:
	
	Si une méthode est capable de lever une exception qui ne gere pas alors elle doit utiliser le mot clé throws dans sa déclaration pour informer les utilisateurs du méthodes de ces exceptions pour qu'ils les gérent.(c'est ca l'utilité du throws => quand on veut utiliser une méthode qui a cette clause, le compilateur va nous informer que la méthode peut lever une exception et donc il faut la gérer).
	throws liste tous les exceptions qu'une méthode est capable de lever sauf ceux qui sont sous classes de Error ou RuntimeException.

	exemple

	```java
	public class Main {

		public static void main(String[] args) {
			try {
				throwOne();
			} catch (IllegalAccessException e) {
				System.out.println(e);
			}
		}

		static void throwOne() throws IllegalAccessException {
			System.out.println("inside throwOne");
			throw new IllegalAccessException();
		}
	}
	```

	resultats:
	```
	inside throwOne
	java.lang.IllegalAccessException
	```
		

	puisq la méthode throwOne est capable de lever l'exception IllegalAccessException mais elle ne la gére pas alors elle doit ajouter "throws IllegalAccessException" a sa declaration. sinon le code ne va pas compiler.

* finally:
	
	* un bloc finnaly est executé toujours apres un bloc try/catch et avant le code qui suit le bloc try/catch.. le bloc finnaly est executé dans tous les cas, c-a-d, si une exeption est levéé ou non.

	* généralement ce bloc est utiliser pour fermer des resources comme des fichiers par exemple qu'on a ouvert et traivailler avec dans un bloc try

	*
		```java
		try{

		}catch(){

		}finally{
			//s'execute tjrs
		}
		```
		

	* un bloc finally peut etre utilisé seulement avec un bloc try et sans le catch.

* les exceptions java standards:
	
	* dans le package java.lang java definit plusieurs type d'exceptions.
	* Parmi les exceptions les plus utilisé on trouve celles qui héritent de RuntimeException. ces exceptions n'ont pas besoin d'etre inclus dans une déclaration de méthode avec la clause throws. Elle sont appélé en anglais "unchecked exceptions" car le compilateur ne les verifient pas au moment du compilation, et c'est le role du développeur de les gérer. (les programmes avec des exeption de type "unchecked exceptions" se compilent correctement).

	* voila une liste des exceptions qui héritent de RuntimeException (unchecked exceptions) et qui existent dans java.lang:
		
		* ArithmeticException					
		
		* ArrayIndexOutOfBoundsException		
		
		* ArrayStoreException					

			ajouter un elements a une tableau qui n'est pas de types compatibles.

			```java
			Number[] arr = new Double[1];
			arr[0] = new Integer(1);
			```
					
		
		* ClassCastException
			
			cast invalide

			```java
			Object i = Integer.valueOf(42);
			String s = (String)i;            // ClassCastException thrown here.
			```

		* EnumConstantNotPresentException
		
		* IndexOutOfBoundsException			
		 
			```java
			List<String> s = List.of("alae");
			System.out.println(s.get(9)); //la liste conteint seuelement 1 element!!
			```

		* NumberFormatException				

			invalide conversion de string vers nombre

			```java
			System.out.println(Integer.parseInt("edf"));
			```

		* NullPointerException

		* NegativeArraySizeException			
			
			creation d'un tableau avec un longeur negative
			
			```java
			int[] arr = new int[-1];
			```

		* UnsupportedOperationException
  
			une opération non supporté
			
			exemple:

			```java
			List<String> list = List.of("alae");	//créer une list immutable
			list.add("salma");	//modification!!!
			```
			
		* StringIndexOutOfBoundsException	

			```java
			String name = "alae";
			System.out.println(name.charAt(111));
			```
			
		
	
	* On a aussi les exception qui sont vérifiés au moment du compilation, On les appelles "checked exceptions". Si du code dans une méthode lève une exception vérifiée, la méthode doit soit gérer l'exception, soit spécifier l'exception à l'aide du mot clé throws.

		exemple:

		```java
		public class Main {
			public static void main(String[] args){
				var file = new File("[path-to-file]");

				//1er méthode (tous le contenu)
				var content = Files.readString(file.toPath());	//str  
			}
		}
		```
			
		
		Ce programme ne va pas se compiler car la méthode readString peut lever une exception de type IOException, et donc on doit soit gérer cette "checked exception", soit ajouter la clause throws a la déclaration de la mthode main comme ceci:

		```java
		public class Main {
			public static void main(String[] args) throws IOException {
				var file = new File("[path-to-file]");

				//1er méthode (tous le contenu)
				var content = Files.readString(file.toPath());	//str
			}
		}
		```
	* des exemples des "checked exceptions" qui existent dans java.lang:
	
		* ClassNotFoundException:
			
			```java
			Class.forName("Dog"); //supposons que la classe Dog n'existe pas
			```

		* CloneNotSupportedException
		 
		 	tentative de cloner un objet sans implementer l'interface Cloneable
		
		* IllegalAccessException:	
			
			exemple:
			
			```java
			class Person{
				private String name;
			}
			public class Main {
				public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
					Person p = new Person();
					Class<?> cls = p.getClass();
					Field f = cls.getDeclaredField("name");
					f.set(p, "alae");
				}
			}
			```
				
			ce programme leve une exception de type IllegalAccessException car l'attribut name est privé

		* NoSuchFieldException:
		 
			exemple:
			
			```java
			class Person{
				private String name;
			}
			public class Main {
				public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
					Person p = new Person();
					Class<?> cls = p.getClass();
					Field f = cls.getDeclaredField("namsfee");
				}
			}
			```
			ce programme leve une exception NoSuchFieldException car pas d'attribut nommé: namsfee dans la classe.
		


## reflection API:

* definition:
  
	* c'est une API en java (dans le package java.lang.reflect) qui va nous permettre d'inspecter/recuperer-des-informations-sur les classes, les méthodes, les interfaces et les attributs au temps d'execution, par exemple on va pouvoir savoir tous les méthodes defini par une classe, executer ces méthodes sur un objet de la classe meme s'elles sont declarés privé, on va pouvoir accéder a des attributs d'un objet meme s'ils sont déclaré privé et beaucoup d'autres choses..

	* un objet inconnu --> reflection API --> inspecter et modifier le comportement de cet objet (sa classe, les méthodes déclarés....)

	* la réflexion peut etre utilisé pour obtenir des informations sur:
	
		* Une classe,
		* Les constructeurs,
		* les méthodes,
		* les attributs

	* pour obtenir les infos sur une classe et donc savoir ses méthodes, ses constructeurs et ses attributs et tout ca on doit créer un objet de type Class.

* créer un objet de type Class:
	
	```java
	package org.example;

	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	class Person{
		int age;
		String name;
	}
	```
	
	main():

	```java
	var p = new Person(21, "alae");

	//récuprer (de diffrenete maniere) une instance de l'objet Class qui represente une classe donné
	Class<?> c1 = p.getClass();
	Class<?> c2 = Person.class;
	Class<?> c3 = Class.forName("org.example.Person");

	System.out.println(c1); //class org.example.Person
	System.out.println(c2); //class org.example.Person
	System.out.println(c3); //class org.example.Person

	System.out.println(c1.equals(c2) && c2.equals(c3)); //trur

	System.out.println(c1.getName());   //org.example.Person
	```
		
	maintenant aprés qu'on a une instance de type Class (c2/c2/c3) qui représente la classe Person, on peut récuperer dufferentes infos sur la classe, par exemple des infos sur les constructeurs, les méthodes, les variables d'instances, sa super classe, les interfaces implementés ...etc 

* récupérer des infos sur les interfaces implementé par la classe:
	
	```java
	package org.example;

	interface A{
		void methodeA();

		default String hola(){
			return "hola";
		}
	}

	interface B{
		float PI =  3.14f;
		void methodeB();
	}

	@Data
	@NoArgsConstructor
	@AllArgsConstructor		
	class Person implements A, B{
		private int age;
		private String name;


		@Override
		public void methodeA() {

		}

		@Override
		public void methodeB() {

		}
	}
	```
	
	main()

	```java
	var p = new Person(21, "alae");
	Class<?> cls = p.getClass();

	Class<?>[] interfaces = cls.getInterfaces();

	for (var i: interfaces){
		System.out.println("name: " + i.getName());
		System.out.println("methods: " + Arrays.toString(i.getDeclaredMethods()));
		System.out.println("fiels: " + Arrays.toString(i.getDeclaredFields()));
		System.out.println("");
	}
	```
	
	résultats

	```
	name: org.example.A
	methods: [public abstract void org.example.A.methodeA(), public default java.lang.String org.example.A.hola()]
	fiels: []

	name: org.example.B
	methods: [public abstract void org.example.B.methodeB()]
	fiels: [public static final float org.example.B.PI]
	```
	
	on pu récuperer les interfaces que la classe Person implémente ainsi que les méthodes déclarés et les attributs statiques dans ces interfaces aussi.

* récupérer des infos sur la super class de la classe:
	
	```java
	package org.example;
	class Person{
	}
	class Student extends Person{
	}

	```
	main():

	```java
	var s = new Student();
	Class<?> cls = s.getClass();
	System.out.println(cls.getSuperclass()); 	//class org.example.Person

	```
	on a pu récuprer une instace de type Class qui représente la super classe (Person) de notre class Student, donc on peut maintenat savoir tous constructeurs, méthodes..pour Person.

* récuprerer le modificateur d'accés de la classe:
	
	```java
	package org.example;
	public class Programmer{

	}
	```

	main():
	
	```java
	var s = new Programmer();
	Class<?> cls = s.getClass();
	int modifier = cls.getModifiers(); //modificateur d'accés
	System.out.println(Modifier.toString(modifier));	//public
	```

* récuprerer des infos sur les constructeurs de la classe:
	
	```java
	//tous les constructeurs public declaré dans cette classe et sa super classe aussi
	Constructor<?>[] Class.getConstructors();			

	//tous constructeurs declaré dans cette classe
	Constructor<?>[] Class.getDeclaredConstructors();	

	String Constructor.getName();

	int	Constructor.getParamCount();

	Class<?>[] Constructor.getParameterTypes();

	int Constructor.getModifiers();

	...
	```
	

	demo:
	
	```java
	package org.example;
	class Person{
		private int age;
		private String name;

		public Person(){

		}

		public Person(int age, String name) {
			this.age = age;
			this.name = name;
		}

		//getters & setters
	}
	```

	main():	
	
	```java
	var p = new Person(21, "alae");
	Class<? extends Person> cls = p.getClass();

	Constructor<?>[] declaredConstructors = cls.getDeclaredConstructors();

	for(var constructor: declaredConstructors){
		System.out.println("constructor: " + constructor);
		System.out.println("name       : " + constructor.getName());
		System.out.println("param count: " + constructor.getParameterCount());
		System.out.println("param types: " + Arrays.toString(constructor.getParameterTypes()));
		System.out.println("modifier   :" + Modifier.toString(constructor.getModifiers()));
		constructor.getParameterTypes()
	}
	```

	résultats:

	```
	constructor: public org.example.Person()
	name       : org.example.Person
	param count: 0
	param types: []
	modifier   : public

	constructor: public org.example.Person(int,java.lang.String)
	name       : org.example.Person
	param count: 2
	param types: [int, class java.lang.String]
	modifier   : public
	```
	
*  récuprerer des infos sur les méthodes de la classe:
	* on va pouvoir faire un tas de choses avec les méthodes declarés dans une classe, par exempler, recuprer des infos sur tous ces méthodes (ces noms, types de retour, params..), on va etre caoable aussi d'invoquer ces méthodes sur les objets de la class meme si ces méthodes ont on modificateur d'acéés private.

	* méthodes:	
		
		```java
		//tous les méthodes public declarés dans cette classe et sa super class.
		Method[] Class.getMethods();			

		//tous les méthodes declaré dans cette classe.
		Method[]  Class.getDeclaredMethods();	

		//modificateur d'accés
		int Method.getModifiers();			
		
		Class<?> Method.getDeclaringClass();

		int	Method.getParamCount();

		Class<?>[] Method.getParameterTypes();

		Class<?> Method.getReturnType();
		```


	* demo:
	
		```java
		package org.example;

		import java.lang.reflect.InvocationTargetException;
		import java.lang.reflect.Method;
		import java.lang.reflect.Modifier;
		import java.util.Arrays;
		import java.util.Objects;

		interface A{
			void methodeA();

			default String hola(){
				return "hola";
			}
		}

		interface B{
			float PI =  3.14f;
			void methodeB();
		}

		class Person implements A, B{
			private int age;
			private String name;

			public Person(){

			}

			public Person(int age, String name) {
				this.age = age;
				this.name = name;
			}

			public int getAge() {
				return age;
			}

			public String getName() {
				return name;
			}

			public void setAge(int age) {
				this.age = age;
			}

			public void setName(String name) {
				this.name = name;
			}

			@Override
			public String toString() {
				return "Person{" +
						"age=" + age +
						", name='" + name + '\'' +
						'}';
			}

			@Override
			public boolean equals(Object o) {
				if (this == o) return true;
				if (o == null || getClass() != o.getClass()) return false;
				Person person = (Person) o;
				return age == person.age &&
						Objects.equals(name, person.name);
			}

			@Override
			public int hashCode() {
				return Objects.hash(age, name);
			}

			@Override
			public void methodeA() {

			}

			@Override
			public void methodeB() {

			}

			public void sayHey(){
				System.out.println("hey my name is " + name);
			}

			private void privateMethod(int a){
				System.out.println("im a private method, a = " + a);
			}
		}

		public class Main {

			public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
				var p = new Person(21, "alae");
				Class<? extends Person> cls = p.getClass();

				Method[] methods = cls.getMethods();
				for (var method: methods){
					System.out.println("method          : " + method);
					System.out.println("name            : " + method.getName());
					System.out.println("modifier        : " + Modifier.toString(method.getModifiers()));
					System.out.println("declaring class : " + method.getDeclaringClass());
					System.out.println("param count     : " + method.getParameterCount());
					System.out.println("param types     : " + Arrays.toString(method.getParameterTypes()));
					System.out.println("return type     : " + method.getReturnType() + "\n");
				}
				
				//invoquer une méthode privé sur un objet (cool isnt it?)
				Method privateMethod = cls.getDeclaredMethod("privateMethod", int.class);
				privateMethod.setAccessible(true);
				privateMethod.invoke(p, 10);
			}

		}
		```

		résultats:

		```
		method          : public java.lang.String org.example.Person.getName()
		name            : getName
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : class java.lang.String

		method          : public boolean org.example.Person.equals(java.lang.Object)
		name            : equals
		modifier        : public
		declaring class : class org.example.Person
		param count     : 1
		param types     : [class java.lang.Object]
		return type     : boolean

		method          : public java.lang.String org.example.Person.toString()
		name            : toString
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : class java.lang.String

		method          : public int org.example.Person.hashCode()
		name            : hashCode
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : int

		method          : public void org.example.Person.setName(java.lang.String)
		name            : setName
		modifier        : public
		declaring class : class org.example.Person
		param count     : 1
		param types     : [class java.lang.String]
		return type     : void

		method          : private void org.example.Person.privateMethod(int)
		name            : privateMethod
		modifier        : private
		declaring class : class org.example.Person
		param count     : 1
		param types     : [int]
		return type     : void

		method          : public int org.example.Person.getAge()
		name            : getAge
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : int

		method          : public void org.example.Person.setAge(int)
		name            : setAge
		modifier        : public
		declaring class : class org.example.Person
		param count     : 1
		param types     : [int]
		return type     : void

		method          : public void org.example.Person.methodeA()
		name            : methodeA
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : void

		method          : public void org.example.Person.methodeB()
		name            : methodeB
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : void

		method          : public void org.example.Person.sayHey()
		name            : sayHey
		modifier        : public
		declaring class : class org.example.Person
		param count     : 0
		param types     : []
		return type     : void

		im a private method, a = 10
		```
			


* récuprerer des infos sur les attributs de la classe:
	
	* methods:
		
		```java
		//tous les attributes public de la classe et aussi de la super classe
		Field[] Class.getFields()					

		//tous les attributs de la classe
		Field[] Class.getDeclaringFields()			
		
		//recuprer la valeur de l'attribut pour l'objet obj (field.get(object))
		Object Field.get​(Object obj)				

		Class<?> Field.getDeclaringClass()		

		int Field.getModifiers()

		String Field.getName()

		Class<?> Field.getType()

		boolean Field.isEnumConstant()

		void Field.set​(Object obj, Object value)

		//on doit faire setAccessible(true) pour acceder aux attributs privés
		void Field.setAccessible​(boolean flag)	
		...
		```

	* demo:

		```java
		@Data
		@AllArgsConstructor
		@NoArgsConstructor
		class Person{
			private int age;
			private String name;
		}
		```
		
		
		main():

		```java
		public static void main(String[] args) throws IllegalAccessException, NoSuchFieldException {
			var p = new Person(21, "alae");
			Class<? extends Person> cls = p.getClass();

			Field[] fields = cls.getDeclaredFields();
			for (var field: fields){
				field.setAccessible(true);  //donner l'acces aux attributs privés

				System.out.println("field           : " + field);
				System.out.println("name            : " + field.getName());
				System.out.println("modifier        : " + Modifier.toString(field.getModifiers()));
				System.out.println("declaring class : " + field.getDeclaringClass());

				System.out.println("value for p     : " + field.get(p));
				System.out.println("type            : " + field.getType());
				System.out.println("is enum constant: " + field.isEnumConstant() + "\n");

			}

			//changer la valeur d'un attribut privé au temps de l'execution
			var fieldName = "name";
			Field field = cls.getDeclaredField(fieldName);
			field.setAccessible(true);
			field.set(p, "yassine");
			System.out.println(p);
		}
		```
			
		résultats:

		```
		field           : private int org.example.Person.age
		name            : age
		modifier        : private
		declaring class : class org.example.Person
		value for p     : 21
		type            : int
		is enum constant: false

		field           : private java.lang.String org.example.Person.name
		name            : name
		modifier        : private
		declaring class : class org.example.Person
		value for p     : alae
		type            : class java.lang.String
		is enum constant: false

		Person{age=21, name='yassine'}
		```
		
## differentes façons de lire un fichier:
	
* suppose we have this file
	
	```java
	var file = new File("[path-to-file]");
	```

* 1er méthode (tous le contenu)
	
	```java
	var content = Files.readString(file.toPath());	//str
	```

* 2eme méthode (tous le contenue)

	```java
	var sc = new Scanner(file);
	sc.useDelimiter("\\z");
	var content = sc.next();
	```

* 3éme méthode (ligne par ligne)

	```java
	var sc = new Scanner(file);
	while(sc.hasNextLine())
		System.out.println(sc.nextLine());
	```

* 4éme méthode (tous les lignes)

	```java
	var lines = Files.readAllLines(file.toPath()); List<str>
	```
* 5éme méthode

	```java
	var fileReader = new FileReader(file);
	int c;
	while( (c=fileReader.read()) != -1 )
		System.out.println((char)c);
	```


## est ce que la méthode "main" est obligatoire:

* avant Java7:
	
	non c'est pas obligatoire, on peut mettre notre code dans un bloc statique dans la classe qui est supposé contenir la méthode main et tout va marcher comme d'habitude.
	(le bloc statique s'execute au mement de chargement de la classe)

  	demo:
	
	```java
	class staticExample { 
		static	{ 
			System.out.println("Inside Static Block."); 
			System.exit(0); 
		} 
	}
	``` 

* aprés Java 7 (7+):
	
	oui, c'est obligatoire d'avoir main et le compilateur va génerer une erreur: "Error: Main method not found" s'il ne la trouve pas


## les annotations: 
	
* definition
	
	les annotations sont un moyen pour ajouter des meta-data (meta-données) a un code, c'est a dire qu'on va pouvoir fournir des informations supplémentaires aux éléments de notre programme, c-a-d aux classes, attributs, méthodes, paramétres des méthodes...etc

	les annotations ne sont pas supposé changer le comportement d'un programme mais seulement, par exemple, aider le compilateur a capturer des erreur (@override: erreur en ce qui concerne la redéfinition d'une méthode) ou bien générer du code source, afin de faciliter le travail des développeurs notamment sur des tâches répétitives (project lombok: @Data, @Getter, @Setter...). 

* creation d'annotation:
	
	Java propose la possibilité de définir ses propres annotations.\
	On utilise ce syntaxe:

	```java
	@interface MyAnno{
		String str();
		int val();
		String[] arr();
	}
	```
		

	Une annotation ne peut pas avoir une clause extends.

	Tous les annotation hérite de l'interface Annotation, cette interface a ces méthodes:
	
	```java
	Class<? extends Annotation> annotationType()
	boolean equals​(Object obj)
	int hashCode()
	String toString()
	```


	Lorsqu'une annotation est crée, elle peut etre utilisé pour annoter qlq choses(classes, methodes, attributs, paramétres de méthodes, les constantes d'une énumeration et les annotations).

	Quand on applique une annotation, on fournit une valeur pour ses membres, exemple:
		
	
	```java
	@MyAnno(str="this is a str", value=10)
	public static void myMethod(){

	}
	```

* Specifying a Retention Policy:
	
	* "retention Policy" précise à quel niveau les informations concernant l'annotation seront conservées. On peut spécifier ceci pour une annotation en utilisant une autre annotation: @Retention, cette annotation attend comme valeur un élément de l'énumération RetentionPolicy.

		* RetentionPolicy.SOURCE	
		 	
			informations conservées dans le code source uniquement (fichier .java) : le compilateurles ignore

		* RetentionPolicy.CLASS	
		 
		 	informations conservées dans le code source et le bytecode (fichiers .java et .class)

		* RetentionPolicy.RUNTIME	
		 	
			informations conservées dans le code source et le bytecode : elles sont disponibles àl'exécution par introspection

	* utilisation: @Retention(RetentionPolicy.RUNTIME)


* Obtenir une annotation au temps de l'execution en utilisant la réflexion (reflection API):

	```java
	@Retention(RetentionPolicy.RUNTIME)
	@interface MyAnno{
		String str();
		int value();
	}

	public class Main {

		public static void main(String[] args) throws NoSuchMethodException {
			Class<?> cls = Main.class;
			Method m = cls.getDeclaredMethod("m");
			MyAnno annotation = m.getAnnotation(MyAnno.class);
			System.out.println(annotation.str() + " / " + annotation.value());
		}

		@MyAnno(str="this is a string", value=10)
		static void m(){

		}
	}
	```
	
	résultat

	```
	this is a string / 10
	```
	
	en premier lieu on crée une annotation qui a deux membres: str & value. Aprés on annote la méthode m avec cette annotation et on fournit une valuer pour les deux membres de l'annotation bien sur.

* Obtenir tous les annotations qui annotent un objet en utilisant la reflexion:
	
	```java
	@Retention(RetentionPolicy.RUNTIME)
	@interface MyAnno{
		String str();
		int value();
	}

	@Retention(RetentionPolicy.RUNTIME)
	@interface What{
		String descritpion();
	}

	public class Main {

		public static void main(String[] args) throws NoSuchMethodException {
			Class<?> cls = Main.class;
			Method m = cls.getDeclaredMethod("m");
			Annotation annotations[] = m.getAnnotations();

			for(var annotation: annotations){
				System.out.println(annotation);
			}
		}

		@What(descritpion = "this is a description")
		@MyAnno(str="this is a string", value=10)
		static void m(){

		}
	}
	```
	
	```
	@org.example.What(descritpion="this is a description")
	@org.example.MyAnno(str="this is a string", value=10)
	```
	
	on récuprer tous les annotations dans un tableau d'Annotation (reppelle twa, Annotation est la super interface de tous les interfaces d'annotations, et elle definit toString() c'est pour cela on a pu faire System.out.println(annotation); )

* l'interface AnnotatedElement:
	
	on a pu appler les méthodes: getAnnotation & getAnnotations sur des objets du type Method, car la class Method implémente l'interface java.lang.reflect.AnnotatedElement, qui definit ces méthodes et d'autres.
	
	Parmi les autres méthodes definit par cette interface on trouve:

	```java
	default boolean isAnnotationPresent(Class<? extends Annotation> annoType)
	```

	qui retourne true si, l'annotation annoType annote l'élement qui invoque cette méthode.


* utilisation des valeurs par default pour les membres d'une annotation:
	- on peut utiliser des valeurs par defaut pour les membres d'une annotations, ces valeurs vont etre utilisé si aucune valeur n'est spécifier pour le membre specifique.

	- syntaxe:
	
		type member() defautl [value];

	- exemple:	
	 
	
		```java
		@Retention(RetentionPolicy.RUNTIME)
		@interface MyAnno{
			String str() default "default str";
			int val() default -1;
		}

		public class Main {

			public static void main(String[] args) throws NoSuchMethodException {
				Class<?> cls = Main.class;
				Method m = cls.getDeclaredMethod("m");
				MyAnno myAnno = m.getAnnotation(MyAnno.class);
				System.out.println(myAnno);
				System.out.println(myAnno.str() + " / " + myAnno.val());
			}

			@MyAnno
			static void m(){
			}
		}
		```

		résultat

		```
		@org.example.MyAnno(val=-1, str="default str")
		default str / -1
		```
* marker annotations / marqueurs:
	
	- c'est un type special d'annotation qui n'a pas de members. sa raison d'etre est de marquer un element et cela suffit.
	La meilleur moyen de savoir si une annotation marque ou pas un element est d'utiliser la méthode isAnnotationPresent qui est definit par l"interface AnnotatedElement.

	- demo:

		```java
		@Retention(RetentionPolicy.RUNTIME)
		@interface  MyMarker{}

		public class Main {

			public static void main(String[] args) throws NoSuchMethodException {
				Class<?> cls = Main.class;
				Method m = cls.getDeclaredMethod("m");

				System.out.println(m.isAnnotationPresent(MyMarker.class));	//true
			}

			@MyMarker
			static void m(){
			}
		}
		```

* les annotations d'un seul membre / single member annotations:
	
	c'est une annotation normal mais qui a seulement un seul membre, ce qui alloue une sténographie lors de l'annotation d'un element avec elle.
	forcément le nom de cette membre doit etre nommé value.

	demo:
		
	```java
	@Retention(RetentionPolicy.RUNTIME)
	@interface MyAnno{
		String value();
	}


	public class Main {

		public static void main(String[] args) throws NoSuchMethodException {
			Class<?> cls = Main.class;
			Method m = cls.getDeclaredMethod("m");

			System.out.println(m.getAnnotation(MyAnno.class).value());	//striiiing
		}

		@MyAnno("striiiing")
		static void m(){
		}
	}
	```

* les annotations standards:
	* @Deprecated: 
  
		- C'est un marqueur qui précise que l'entité est obsolète et qu'il ne faudrait plus l'utiliser. Elle peut être utilisée avec une classe, une interface ou un membre (méthode ou champ).
		- Lors du compilation d'un programme qui utilise une entité annoté avec @Deprecated, le compilateur va générer un avertissement.
	
	* @Override

	* @FunctionalInterface:
	 
		- Annote une interface fonctionnelle, c-a-d qui a une seule méthode abstraite. Les interfaces fonctionnelles sont utilisés par les lambda expressions.
		- Ce n'est pas nécessaire d'annoté une interface fonctionnelle par cette annotation, c'est simplememnt informative.

	* @SuppressWarning:
  
		- demande au compilateur d'ignorer certaines avertissements qui sont pris encompte par défaut.
		- parmie les avertssements qu'on peut demander au compilateur d'ignorer sont:
		 
			- deprecation: 
				
				utilisé pour informer les developpeurs que certaines entités ne sont pas recommandé a utilisé. 

			- unchecked: 
			 
				lors d'une utilisation d'un raw type le compilateur va nous avertir, donc pour ignoer ce types d'avertissements on peut utiliser @SuppressWarning("unchecked")

		- utilisation de @SuppressWarning:

			```java		 
			@SuppressWarning({"unchecked", "deprecation"})
			```
	* @Target:
		
		- Utilisé seulement comme annotation a d'autres annotations.
		- Elle spécifie le type des entités auxquelles l'annotation peut etre appliquer.
		- Elle prend comme argument une liste {"", ""} de constantes de type ElementType.

		- voila une liste des differentes déclarations auxquelles une annotation peut etre appliqué:
		 
			* ElementType.ANNOTATION_TYPE	

				l'annotation peut etre appliqué a seulement une autre annotation  	
			* ElementType.CONSTRUCTOR 
			* ElementType.FIELD
			* ElementType.LOCAL_VARIABLE
			* ElementType.METHOD
			* ElementType.MODULE
			* ElementType.PACKAGE
			* ElementType.PARAMETER		

				Paramètres d'une méthode ou d'un constructeur

			* ElementType.TYPE				

				classe, interface et enumeration
			* ElementType.TYPE_PARAMETER
			* ElementType.TYPE_USE


		- exemple d'utilisation:
			
			```java
			@Target{ElementType.METHOD, ElementType.TYPE}
			@interface MyAnno{

			}
			```

	* @Inherited:
	
		est une annotation marqueur qui ne peut être utilisée que sur une autre déclaration d'annotation. De plus, cela n'affecte que les annotations qui seront utilisées sur les déclarations de classe. Si on marque une annotation avec @Inherited, alors si une class est annoté avec cette annotation, tous ses sous classes vont hérité de cette annotation.

	* @Retention:
	
		utilisé seulement comme annotation a d'autres annotations. Elle spécifie à quel niveau les informations concernant l'annotation seront conservées. Cetteannotation attend comme valeur un élément de l'énumération RetentionPolicy.

## what is a raw type:
	
un raw type est une class ou interface generique mais qui n'a pas d'arguments lors de l'utilsiation.

* exemple:

	considerons la classe ArrayList:
	
	```java
	public class ArrayList<E>{

	}
	```

	ceci est une classe generique, si on l'utilise comme sa:
	
	```java
	ArrayList<Integer> list = new ArrayList<>();
	```
	alors ici on est entrain de créer un type paramétré (parameterized type), car on fournit un argument pour le parametre T.

	sinon si on l'utilise comme ca:
	
	```java
	ArrayList list = new ArrayList();
	```

	alors on est entrain de creer un "raw type" (type brut) de ArrayList<T>

## utilité de l'annotation @Override:
	
L'annotation @Override est une vérification extrêmement utile à la compilation. C'est une instruction au compilateur qu'une méthode de superclasse est entrain d'etre redefini. S'il n'y a pas de signature de méthode correspondante sur une superclasse, il s'agit d'une erreur et ne doit pas compiler..

considerons cette exmeple:

```java
class Person{
	public void sayHey(){
		System.out.println("person");
	}
}

class Student extends Person{
	public void sayhey(){
		System.out.println("person");
	}
}
```


si on execute ce code:

```java	
Student s = new Student();
s.sayHey();
```

on tombe sur cette résultat: person, c'est pas ca qu'on a attendu.
C'est clair qu'a voulu redefini la méthode sayHey, mais a cause de faute d'ortographe qu'on a fait, on a tombé sur un résultat indésirable.

Si on a annoté la méthode avec @Override, alors le compilateur aurait généré une erreur distant que la méthode sayhey n'existe pas dans la classe mére.

## quelque régles qu'on redefinit une méthode / overriding:

* les parametres doivent etre les memes et dans le meme ordre dans les deux méthodes (celle qui est dans la super classe/interface et celle redéfinit dans la sous classe)
* la méthode qu'on est entrain de rédefinir (dans la sous classe) doit avoir le meme type de retour ou un sous type de la méthode originale.
* le modificateur d'accés ne peut pas etre plus restrictive.
* les constructeurs, les méthode final et les méthode statiques ne peuvent pas etre redefinit.


## est ce que java pass-by-referene ou pass-by-value (is java pass by reference or pass by value):
	
java est tjrs pass-by-value, mais lorsqu'on un passe un objet comme argument a une méthode on est actuellement entrain de passer une adresse de l'objet en mémoire, et donc n'import quel changement de l'objet dans la méthode va etre reflété.

## c'est quoi javac?

C'est un outil de ligne de commande qui va compiler nos fichier java, donc c'est le compilateur fourni avec le JDK

## les conventions de nommage dans java:
	
* class, interface, enum	: PascalCase
* identifiers				: camelCase
* constantes				: UPPERCASE

QUELs avantages? Les convention de nommage améliorent la lisibilité du code, ce qui facilite la révision et la compréhension globale du code.


## c'est quoi l'encapsulation (concept de OOP) (what is encapsulation):

* mécanisme qui sert a encapsuler et cacher les variables ou les données de la classe des autres classes et utilisateurs et on peut réaliser ceci en méttant les attributs privés et créer des méthodes pour gerer l'accé a ces attributs. 

* Ce mecanisme s'appelle aussi "data hiding" et a plusieurs avantages:

	- maintenabilité du code
  		
		par exemple supposons qu'on a un attribut privé et on a créer comme interface d'interaction avec cet attribut un getter et un setter, on peut a tout moment changer l'implementation du code du getter ou setter et donc on a modifié le code a l'interieur de notre classe sans casser le code qui est a l'exterieure de la classe et qui l'utilise.

	- certaines attributs de la classe peuvent en lecture seule (read-only) on le déclarant privé et ne fournissant qu'un getter pour eux ou au contraire, en ecriture seul ..

	- on veut pas acceder directement a l'attribut mais a travers une méthode .. supp qu'on a un attribut age donc on veut un setter comme ceci peut etre:
	 
		```java
		public void setAge(int age){
			if (age < 0){
				//fait qlqch
			}else{
				this.age = age;
			}
		}
		```


		
## c'est quoi la polymorphisme (concept de OOP) (what is polymorphism)

* definition:
	
	le polymorphisme veut dire littéralement: "plusieurs formes", elle est utilisé dans un contexte ou on a plusieurs classes lies les unes les autres avec une relation d'héritage.
	D'une facon générale, le polymorphisme est le fait qu'un meme code puisse s'adapter automatiquement aux types de donnés aux quelles il s'applique.

* exemple:
 
	supposons qu'on a une class Person comme ca:
	
	```java
	class Person{
		public void sayHey(){
			System.out.println("hey im  a person");
		}
	} 
	```

	et on a deux autres classe qui héritent de cette classe:

	```java
	class Student extends Person{
		@Override
		public void sayHey(){
			System.out.println("hey im  a student");

		}
	}


	class Programmer extends Person{
		@Override
		public void sayHey(){
			System.out.println("hey im  a programmer");
		}
	}
	```
	main():
	
	```java
	Person people[] = new Person[]{new Student(), new Programmer()};
	for (Person p: people)
		p.sayHey();
	```

	résultats

	```
	hey im  a student
	hey im  a programmer
	```
	
		
		
	* 1é point:
	
		on remarque qu'on un tableau de Person et pourtant on a pu mettre dedans des variables de type Student et Programmer, sans le polymorphisme ceci est impossible . mais avec le polymorphisme on est capable de faire ceci car l'héritage modelise la relation "est-un", un étudiant est une personne, donc on est capable de faire:
		
		```java
		Person p = new Student(); 
		```

	* 2eme point:

		aprés on remarque que le meme code, p.sayHey(), produit deux résultat differents, et ceci car ce code s'adapte aux types de donnés aux quelles il s'applique, dans un premier temps Java voit que meme si p est de type Person mais le variable effectivement stocké dans p est de type Student donc choisit d'executer la méthode sayHey definit dans la classe Student, et dans le deuxiemme cas, la meme chose, p pointe vers un variable de type Programmer donc c'est sayHey de la classe Programmer qui est definit.
		ceci s'appelle: résolution dynmaique des lien ;)

		- resolution dynamique des liens (Runtime polymorphism or Dynamic Method Dispatch):
		 
			le type effectif (celui de l'objet effectivement stocké dans la variable) est déterminant pour la choix de la méthode a executer.
			dans la premiere itertaion du boucle for each, p contient une réference a un objet de type Student, donc sayHey de Student qui est utilisé.
 
		- résolution statique des liens (compile time polymorphism):
		 
			le type du variable est détérminant.

			si on etait dans langauge qui met en oeuvre le principe de résolution statique des liens, alors la boucle aurait produire deux fois "hey am a person".



* utilité du polymorphisme:
	
	pour comprendre l'utilité du polymorphism je vais donner un probleme et sa solution sans polymorphism.

	supposons que je veux creer une méthode qui travaille avec differents type de personnes.
	
	j'ai les etudiants et les programmeurs:

    - sans polymorphism, je vais creer 3 méthodes:

		```java
		public void m(Person p){
			//todo..
			p.sayHey();
			//todo..
		}

		public void m(Student p){
			//todo..
			p.sayHey();
			//todo..
		}

		public void m(Programmer p){
			//todo..
			p.sayHey();
			//todo..
		}
		```

		> remarquons que y en beaucoup de redandance dans le code.

	- avec le polymorphism:
  
		```java
		public void m(Person p){
			//todo
			p.sayHey();
			//todo
		}

		m(new Person());
		m(new Student());
		m(new Programmer());
		```
		
		si on decide aprés d'ajouter un autre type de personne, alors c'est pas la peine d'ajouter une méthode pour ce personne ;)

## c'est quoi l'héritage (concept de OOP) (what is inheritence):
	
* definition:
	
	L'héritage est un concept dans la programmation orienté objet qui permet la réutilisation d'une définition de classe existante (connue sous le nom de super classe) et de la définition de catégories plus spéciales de classe (appelés sous-classes) en héritant de cette classe. Il se concentre sur l'établissement d'une relation est-un (is-a) entre la sous-classe et sa super classe. L'héritage est également utilisé comme technique pour mettre en œuvre le polymorphisme; 

* qlq régles de l'héritage en java:
	
	- Il peut y avoir plusieurs niveaux d'héritage (classe qui herite d'une classe qui herite d'une autre classe...)

	- Seul l'héritage unique est autorisé en Java, car l'héritage multiple est un peu complexe; voir Diamond Problem.

	- une classe déclarée finale ne peut pas être hérité.

	- une méthode de classe déclarée finale ne peut pas être redefini.

	- Le constructeur et les membres privés de la super classe ne sont pas hérités.

	- Le constructeur de la sousclasse peut être appelé en utilisant super().

	- si on veut appél une méthode de la super classe qu'on a defini dans cette sous classe alors on utilise le mot clé super.

## composition(concept de OOP) (what is composition):

* definition:
 
	c'est un concept en programmation orienté objet, il va nous permettre de créer un objet qui est composé d'autre objet, donc on trouve ce concept dans une classe qui a comme variables d'instances des objets d'autres classes . Il permet de reutiliser du code en utilisant la relation a-un (has a).

* exemple:
 
	```java
	class Computer{
		HardDrive hardDrive;
		Processor processor;

		//...
	}

	class HarDrive{
	String company;
		int storageCapacity;

		//...
	}

	class Processor{
		String model;
		float speed;

		//...
	}
	```

		

## diamond problem:
	
* definition:
	
	c'est un probelem qui existe dans les languages qui supportent l'héritage multiple, il se produit quand on a une classe qui hérite de deux classe qui, les deux, definissent la meme méthode (avec la meme signature).

* exemple:
	
	```java
	class SuperClass1{
		void m(){
			//..
		}
	}

	class SuperClass2{
		void m(){
			//..
		}
	}

	class SubClass extends SuperClass1, SuperClass2{}
	```
	main():
	
	```java
	SubClass sub = new SubClass();
	sub.m(); 	//quelle m??!!!
	```

* diamond problem avec les interfaces:

	on peut tomber sur ce probleme si on a une classe qui implemente deux interfaces, et ces dernieres les deux definissent une meme méthode par defaut, c-a-d avec la meme signature.

	```java
	interface A{
		default void m(){
			//...
		}
	}

	interface B{
		default void m(){
			//...
		}
	}

	//Erreur, lors de l'instantion du C et si on veut travailler avec m, on sait pas quelle m utiliser!!
	class C implement A, B{

	}
	```

	
	solution?

	re-implementer la méthode m pour enlever toute collision qui peut se produire.

	```java
	class C implements A,B{
		public void m(){

		}
	}
	```


## difference entre les classes abstraites et les interfaces en terme de design / quand utiliser l'une et quand l'autre??:

- on doit utiliser les classes abstraites quand on veut imposer une structure/forme commune a des sous classes.
- on doit utiliser une interface quand on veut definir des méthodes communes a des classes qui ne sont pas relié (par une relation d'héritage par ex)

## comment rendre les objets d'une classe immutables?

* rendre la classe final
* pas de setter
* tous les champs privé

## pourquoi java a les types primitives:

Pour des raisons de performances. Les variables de types primitifs contiennent directement la valeur; les variables de types non primitifs sont des références, ils stockent l'adresse d'un objet stocké ailleurs en mémoire.

Chaque fois qu'on veut utiliser un 'type wrapper' (comme Integer, Double), JVM a besoin d'aller chercher l'objet en mémoire pour récuperer la valeur. Ceci n'est pas nécaissaire pour les types primitives car ces types contiennent la valeur elle-même, au lieu d'une référence à un objet qui contient la valeur.  

Donc puisq on travaille avec les entiers et les floats beaucoup c'est pour cela que java a crée des types primitive pour eux. ces types n'exsites pas dans la hiérarchi des objets.


## Type wrappers:

* définition et utilité:
	
	- les types primitives sont utilisé en java pour des raisons de pérformance mais dans des situations on peut pas utilisé ces types primitives, par exemple l'API collection en java ne les supportent pas, car l'API travaille beaucoup avec la généricité et la généricité utilise seuelement les types de référence et n'ont pas les types primitives.
	
		POur cela java a ce qu'on appelle 'wrapper classes' qui sont des classes qui encapsulent un type primitive dans un objet, et donc offrent plusieurs méthodes pour travailler avec ces types.

	- les differents type wrappers en java sont: Double, Float, Long, Integer, Short, Byte,Character, and Boolean.

* creation des objets a partir des types primitives
	
	exemple:

	```java
	static Character valueOf(char ch)
	```
	
	ceci va créer un objet de type Character qui contient/encapsule le caractere ch. 
	si on veut récuperer le caractere (type char) contenue, on utilise la méthode: 
	```java
	char charValue(); 
	```
	les autres type wrappers ont les meme fonctionnalités et méthodes.

* autoboxing & auto-unboxing:
 
	- autoboxing		
	 	
		un processus par lequel un type primitive est automatiquement encapsulé dans son équivalent type wrapper / conversion d'un type primitif a un objet de type wrapper class equivalent

	- auto-inboxing	
	 
		un processus par lequel la valeur d'un type primitive est automatiquement extrait d'un type wrapper / converion d'un objet de type wrapper class a son type primitif equivalent

	- donc avec l'autoboxing et l'auto-unboxing c'est pa la peine de manuelement créer un objet pour encapsuler un type primitif ou manuelement faire l'extraction d'un type primitif de son type wrapper.

	- demo:

		```java
		//autoboxing, pas la peine de faire intObj = Integer.valueOf(19);
		Integer intObj = 19;	

		//auto-unboxing, pas la peine de faire intObj.intValue();
		int a = intObj;			
		````=

    l'autoboxing et l'autounboxing est fait automatiquement par java dans tous les cas ou une converions d'un type primitif vers un objet ou le contraire est nécessaire.

## énumérations (enumerations) todo:

## l'opérateur == teste l'égalité des valeurs de deux variables. 

Pour les types primitives c'est ce qu'on veut mais pour les objets tester l'égalité des valeurs des deux objets veut dire tester est ce que les deux pointent vers le meme objets en mémoire ou pas.

## comparer deux floats

on doit pas utiliser l'opérateur == pour tester l'égalité de deux variables de type float, car le meme nombre peut ne pas etre stocké le meme dans deux variables.
Par exemple 0.33 peut etre stocké dans un variable 0.3300000007 et dans l'autre 0.329999927.

Donc pour comparer les deux on utilise cette méthode:
	
```java
if(Math.abs(var1, var2) < EPSIOLON){
	//..
}
```

ou EPSIOLON a une valeur trés petite qui dépend du precision désiré.

## BigInteger todo:

## jdbc todo: