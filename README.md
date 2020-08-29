# map-vs-object
Comparing the performance of JS maps and objects.  
  
**Runs both on Node.JS and Deno, to help compare the performance of maps and objects on both runtimes.**  
Running:  
```
deno run index.js <amount>
```
```
node index.js <amount>
```
*\<amount> - the amount of key-value pairs*

## Example:

```
$ node index.js 1000000
Filling map: 168.497ms
Filling object: 334.133ms
Map and Object both filled.
Iterating over map (for of): 23.971ms
Iterating over map (for in): 0.007ms
Iterating over object (for of): 26.742ms
Iterating over object (for in): 140.835ms
1000000
Counting amount of elements in a map: 0.593ms
1000000
Counting amount of elements in an object: 102.521ms
Deleting all values from map one by one: 0.003ms
Deleting all values from an object one by one: 260.805ms

$ deno run index.js 1000000
Filling map: 199ms
Filling object: 172ms
Map and Object both filled.
Iterating over map (for of): 83ms
Iterating over map (for in): 0ms
Iterating over object (for of): 22ms
Iterating over object (for in): 148ms
1000000
Counting amount of elements in a map: 1ms
1000000
Counting amount of elements in an object: 220ms
Deleting all values from map one by one: 0ms
Deleting all values from an object one by one: 325ms
```