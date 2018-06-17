import Head from 'next/head';
import '../styles/page/layout.scss';

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <section className="page_layout">
      <h1>About this project!!!</h1>
      <p>
        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
      </p>
    </section>
  </div>
  
)

export default About;
