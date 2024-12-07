import fs from "fs";
import path from "path";

// Define a generic pipe function that takes an array of functions and returns a function
// The pipe function is a utility that allows for functional composition,
// enabling you to chain multiple functions together in a clear and readable manner.
// Each function in the chain takes the output of the previous function as its input, facilitating a smooth flow of data transformation.
// Example usage:
//   const increment = (n: number): number => n + 1;
//   const double = (n: number): number => n * 2;
//   const decrement = (n: number): number => n - 1;
//   const processNumber = pipe(increment, double, decrement);
// Using the composed function
//   const result = processNumber(5); // Output: (5 + 1) * 2 - 1 = 11
//   console.log(result); // Logs: 11
const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T): T =>
    fns.reduce((v, f) => f(v), x);

// Flatten an array of items, ensuring that nested arrays are flattened
// Example usage:
// const nestedArray = [1, [2, 3], [4, [5]]];
// const result = flattenArray(nestedArray);
// Output: [1, 2, 3, 4, 5]
const flattenArray = <T>(input: (T | T[])[]): T[] =>
  input.reduce<T[]>(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

// Map function that applies a given function to each element in the input
// Example usage:
// const double = (num: number): number => num * 2;
// const mapDouble = map(double);
// const numbers = [1, 2, 3, 4];
// const doubledNumbers = mapDouble(numbers); // Output: [2, 4, 6, 8]
const map =
  <T, U>(fn: (item: T) => U) =>
  (input: T[]): U[] =>
    input.map(fn);

// Walk through a directory and return the full path of files or recursively get files in subdirectories
const walkDir = (fullPath: string): string | string[] => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

// Join a prefix with an extra path
const pathJoinPrefix =
  (prefix: string) =>
  (extraPath: string): string =>
    path.join(prefix, extraPath);

// Recursively get all files in a directory
const getAllFilesRecursively = (folder: string): string[] =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export default getAllFilesRecursively;
