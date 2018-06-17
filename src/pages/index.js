import Head from 'next/head';
import Navbar from "../components/Navbar";

import '../styles/page/layout.scss';
import styles from '../styles/page/index.scss';

const App = () => {
  
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="page-section">
        <Navbar />
        <h1 className={styles.title}>Hi, Next!</h1>
        <div className="container mx-auto">
          <p>
            Hi~~~
          </p>
        </div>
      </section>
    </div>
  )
}

export default App;
