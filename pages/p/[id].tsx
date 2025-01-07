import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};
export default function Post({ post }: PostProps) {
  let title = post.title;
  if (!post.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {post?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={post.content} />
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}
