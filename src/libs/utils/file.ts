import fs from "fs";
import path from "path";
import _ from "lodash";

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

const getAllFilesRecursively = (folder: string): string[] => {
  return _.chain(fs.readdirSync(folder))
    .map(pathJoinPrefix(folder)) // Map each file/directory to its full path
    .map(walkDir) // Walk through each directory or return the file path
    .thru(flattenArray) // Flatten the result
    .value(); // Extract the final value from the chain
};

export default getAllFilesRecursively;
