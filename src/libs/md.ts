import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import {
  ContentItemName,
  MarkdownContent,
  MarkdownItem,
  SearchContent,
} from "@/interfaces/Markdown";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const ROOT_DIR = process.cwd();

const getDir = (path: string) => join(ROOT_DIR, path);

const getFileNames = (dir: string): string[] => {
  // the result will filter out hidden files and directories
  return fs.readdirSync(dir).filter((file) => !/^\./.test(file));
};

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
    date:
      data.date instanceof Date ? data.date.toLocaleDateString() : data.date,
  } as MarkdownItem;
};

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkdownItem
) => {
  const items = fileNames
    .map(get)
    .filter(({ draft }) => draft === undefined || !draft)
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return items;
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).use(remarkGfm).process(markdown);

  return result.toString();
};

const saveSearchData = (content: MarkdownContent) => {
  const searchFile = getDir("/content/search/index.json");
  const searchItemList: SearchContent[] = [];

  Object.keys(content).forEach((dataSource) => {
    const contentName = dataSource as ContentItemName;

    content[contentName].forEach((data) => {
      const searchItem: SearchContent = {
        slug: data.slug,
        title: data.title,
        description: data.description,
        category: contentName,
      };

      searchItemList.push(searchItem);
    });
  });

  fs.writeFileSync(searchFile, JSON.stringify(searchItemList, null, 2));
};

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems,
  markdownToHtml,
  saveSearchData,
};
