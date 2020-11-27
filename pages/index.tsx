import Link from "next/link";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Post } from "@prisma/client";
import { ReactQueryDevtools } from "react-query-devtools"

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      content: "good dog",
    }, // will be passed to the page component as props
  };
};

/*
  const [data, setData] = useState(undefined);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/api/posts");
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  */
async function getPosts() {
  const res = await fetch(`${window.location.href}/api/posts`);
  return await res.json();
}
export default function IndexRoute({ content }) {
  const { isLoading, error, data } = useQuery<Post[]>("post", getPosts);
  const { data: data2 } = useQuery<Post[]>("post-2", getPosts);
    return (
      <main>
        Hello world! {content}
        <ul>
          {data?.map((post) => {
            return <li>{post.title}</li>;
          })}
        </ul>
        <Link href="/pagetwo">
          <a>Page two</a>
        </Link>
        <ReactQueryDevtools initialIsOpen />
      </main>
    );
  }
