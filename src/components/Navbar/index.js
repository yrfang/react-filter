import React, { Component } from "react";
import Link from "next/link";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">ReactFilter</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a href="/" title="Home Page" className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a title="About Next JS" className="nav-link">About</a>
              </Link>
            </li>
          </ul>
          {/* <mark className="badge">Hello!</mark> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
