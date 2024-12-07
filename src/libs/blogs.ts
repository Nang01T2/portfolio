import { join } from "path";
import { getDir, getItemInPath, getAllItems, markdownToHtml } from "./md";
import { Blog } from "@/interfaces/Blog";
import getAllFilesRecursively from "./utils/file";

const BLOG_DIR = getDir("/content/blogs");

const getBlogFileNames = () => {
  const allFilesInBlogDir = getAllFilesRecursively(BLOG_DIR);

  // Only want to return blog/path and ignore root
  const allFiles = allFilesInBlogDir.map((file) =>
    file.slice(BLOG_DIR.length + 1).replace(/\\/g, "/")
  );

  // Regular expression to match filenames ending with .md or .mdx
  const regex = /\.(md|mdx)$/;

  // Filter the array using the regex
  const filteredData = allFiles.filter((filename) => regex.test(filename));

  return filteredData;
};

const getBlogsSlugs = () => {
  return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
};

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  blog.slug = fileName.replace(/\.md$/, "");
  return blog;
};

const getBlogBySlug = (slug: string) => {
  const fileName = slug + ".md";
  return getBlog(fileName);
};

const getBlogBySlugWithMarkdown = async (slug: string): Promise<Blog> => {
  return getBlogBySlugsWithMarkdown([slug]);
};

const getBlogBySlugsWithMarkdown = async (slugs: string[]): Promise<Blog> => {
  const blog = getBlogBySlug(slugs.join("/"));
  blog.content = await markdownToHtml(blog.content);
  return blog;
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names, getBlog) as Blog[];
};

export {
  getBlogFileNames,
  getBlog,
  getBlogs,
  getBlogsSlugs,
  getBlogBySlug,
  getBlogBySlugWithMarkdown,
  getBlogBySlugsWithMarkdown,
};
