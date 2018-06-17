import Head from "next/head";
import Navbar from "components/Navbar";
import "../../styles/layout.scss";

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
