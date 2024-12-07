import { PageLayout } from "@/components/layouts";
import { Blog } from "@/interfaces/Blog";
import { FunctionComponent } from "react";
import BlogHeader from "../blogHeader";

type Props = {
  blog: Blog;
};

const BlogPage: FunctionComponent<Props> = ({ blog }) => {
  return (
    <PageLayout pageTitle={blog.title}>
      <div className="w-2/3 m-auto">
        <BlogHeader blog={blog} />
        <article className="prose lg:prose-lg markdown-image-50">
          {/* Blog Content Here */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
