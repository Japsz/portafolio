import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './styles.scss'
const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-dark navbar-expand-md sticky-top">
    <div className="container-fluid">
      <Link
        to="/"
        className="navbar-brand"
      >
        <span>BM</span>
        {siteTitle}
      </Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/datascience"
              activeClassName="active"
              className="nav-link font-weight-bold"
            >
              Data Science
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
