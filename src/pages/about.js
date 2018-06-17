import Head from 'next/head';
import Layout from "../components/Layout";

const About = () => (
  <div>
    <Head>
      <title>About</title>
    </Head>
    <Layout>
      <h1>About this project!!!</h1>
    </Layout>
    <section className="page_layout">
      <p>
        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
      </p>
    </section>
  </div>
  
)

export default About;
