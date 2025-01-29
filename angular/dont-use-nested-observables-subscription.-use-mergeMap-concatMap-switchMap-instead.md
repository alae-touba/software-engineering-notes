# dont use nested observables subscription.. use mergeMap/concatMap/switchMap instead

bad code: using nested subscriptions

```tsx

this
	.footballService
	.getFootballTeam(teamName)
	.subscribe(team => {
		this
			.footballService
			.getFoorballTeamPlayers([team.id](http://team.id/))
			.subscribe(players => {
					//do something with players
					this.players = players;
			});
});
```

good code: using pipes and mergeMap

```tsx

this
	.footballService
	.getFootballTeam(teamName)
	.pipe(
			mergeMap(team => this.footballService.getFootballTeamPlayers([team.id](http://team.id/)))
	)
	.subscribe(footballPlayers => {
			this.footballPlayers = footballPlayers;
	})
```

**Why the first code snippet is bad?** 

because of issues like callback hell. Using nested subscriptions can make the code harder to read, maintain, and debug. It can also lead to potential memory leaks if you don't manage subscriptions properly.

In the good code example, the use of the `pipe` method with `mergeMap` is a more elegant and efficient way to handle nested asynchronous operations. 

```jsx
this.footballService.getFootballTeam(teamName)
  .pipe(
    mergeMap(team => this.footballService.getFootballTeamPlayers(team.id))
  )
  .subscribe(footballPlayers => {
    this.footballPlayers = footballPlayers;
  });

```

using the `pipe` method to apply the `mergeMap` operator allows to flatten and merge the inner Observable (`this.footballService.getFootballTeamPlayers(team.id)`) with the outer Observable (`this.footballService.getFootballTeam(teamName)`). As a result, we have a cleaner, more readable code structure, and you avoid the nesting of subscriptions.

Using operators like `mergeMap`, `switchMap`, and others in combination with the `pipe` method is a best practice in RxJS to handle complex asynchronous scenarios and keep your code more maintainable and easier to reason about.