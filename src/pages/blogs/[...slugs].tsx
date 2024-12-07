import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { getBlogBySlugsWithMarkdown, getBlogsSlugs } from "@/libs/blogs";
import { Blog } from "@/interfaces/Blog";
import { ParsedUrlQuery } from "querystring";
import { BlogPage } from "@/components/blogs";

type Props = {
  blog: Blog;
};

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return <BlogPage blog={blog} />;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slugs } = context.params!;
  const blog = await getBlogBySlugsWithMarkdown(slugs as string[]);

  return {
    props: { blog },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getBlogsSlugs()
    ?.map((x) => x.split("/"))
    ?.filter((x) => x.length > 1);

  const paths = slugs.map((slugs) => ({ params: { slugs } }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogDetail;
