import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import searchIndex from "@/../content/search/index.json";

const getLocalSearchIndex = () => {
  return searchIndex;
};

const shortify = (text: string, maxLength = 70) => {
  if (!text) return null;

  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + " ...";
};

const $ = (...inputs: (string | string[] | undefined)[]): string => {
  return twMerge(clsx(...inputs));
};

export { $, getLocalSearchIndex, shortify };
