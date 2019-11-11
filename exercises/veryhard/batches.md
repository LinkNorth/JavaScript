# Batches

Write a function `batch(arr, batchSize)` that takes two arguments `arr` and `batchSize`. Arr should be an array (the data inside is not relevant). batchSize should be a number.   

Return a new array that has splitted the given array `arr` into a smaller arrays (batches). Where the size of each batch is `batchSize`.   



**Example**

```
batch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
// -> [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
```   

## Harder version

Implement the same logic but instead use a generator [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
