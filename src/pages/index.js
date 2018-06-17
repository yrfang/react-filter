import Head from "next/head";
import Link from "next/link";

import "../styles/page/layout.scss";
import styles from "../styles/page/index.scss";

import Navbar from "../components/Navbar";

const App = (props) => {
  
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      </Head>
      <section className="page_layout">
        <Navbar />
        <h1 className={styles.title}>Hi, Next!</h1>
        <div className="container mx-auto">
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

App.getInitialProps = async function(props) {
  let title = "Latest post on next js";
  let slug = 'latest-post-next.js';
  return {
    title,
    slug
  };
}

export default App;
