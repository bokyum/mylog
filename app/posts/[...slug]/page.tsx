import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import MDXReader from "@/components/mdx-reader";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }

  const flattenedPath = slug.join("/");

  const post: Post | undefined = allPosts.find((post) => {
    return post._raw.flattenedPath === flattenedPath;
  });

  if (!post) {
    console.error(`Error: No post found with title ${slug}`);
    return notFound();
  }

  if (!post.body?.code) {
    console.error("Error: post.body.code is undefined");
    return notFound();
  }

  return (
    <div className="flex flex-col  justify-center gap-6 mt-4 mx-auto w-[100dvw] max-w-4xl">
      <div className="w-full mx-auto ">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to all posts
        </Link>
      </div>

      <div className="mx-2">
        <MDXReader post={post} />
      </div>
    </div>
  );
}
