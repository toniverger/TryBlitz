import Link from "next/link";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
        content: "good dog",
    }, // will be passed to the page component as props
  };
};

export default function IndexRoute({content}) {
  return (
    <main>
      Hello world! <br>
      </br> {content}
      <Link href="/pagetwo">
        <a>Page two</a>
      </Link>
    </main>
  );
}
