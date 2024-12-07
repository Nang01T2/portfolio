import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { getBlogBySlugWithMarkdown, getBlogsSlugs } from "@/libs/blogs";
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
  const { slug } = context.params!;
  const blog = await getBlogBySlugWithMarkdown(slug);

  return {
    props: { blog },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getBlogsSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetail;
