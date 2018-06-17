import Head from "next/head";
import Link from "next/link";

import Layout from "components/Layout";
import styles from "../styles/page/index.scss";

const Index = (props) => {
  
  return (
    <div>
      <Head>
        <title>Hi, Next!</title>
      </Head>
      <Layout>
        <h1 className={styles.title}>Hi, Next!</h1>
      </Layout>
      <section className="page_layout">
        <div>
          <p>
            Hi~~~
          </p>
          <Link as={`/posts/${props.slug}`} href={`post?title=${props.title}`}>
            <a title="Learn Next JS">Latest post on next js</a>
          </Link>
        </div>
      </section>
    </div>
  )
};

Index.getInitialProps = async function(props) {
  let title = "Latest post on next js";
  let slug = 'latest-post-next.js';
  return {
    title,
    slug
  };
}

export default Index;
