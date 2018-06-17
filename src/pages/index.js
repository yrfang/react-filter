import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { startClock, serverRenderClock } from '../store'
import Examples from 'components/examples'

import Head from "next/head";
// import Link from "next/link";

import Layout from "components/Layout";
import styles from "../styles/page/index.scss";

class Index extends React.Component {
  
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))

    return { isServer }
  }

  componentDidMount() {
    this.timer = this.props.startClock()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
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
          </div>
          <Examples />
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Index);
