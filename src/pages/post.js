import Head from "next/head";
import Layout from "../components/Layout";

const Post = (props) => (
  <div>
    <Head>
      <title>Post</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
    </Head>
    <Layout>
      <h1>{props.url.query.title}</h1>
    </Layout>
    <section className="page_layout">
      <p>
        Post the next
      </p>
    </section>
  </div>
);

export default Post;
