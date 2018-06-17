import Head from "next/head";

const Post = (props) => (
  <div>
    <Head>
      <title>My Post</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
    </Head>
    <section className="page_layout">
      <h1>{props.url.query.title}</h1>
      <p>
        Post the next
      </p>
    </section>
  </div>
);

export default Post;
