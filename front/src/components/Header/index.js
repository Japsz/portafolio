import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './styles.scss'
const Header = ({ siteTitle }) => (
  <header>
    <div
      className="nav"
    >
      <Link
        to="/"
        className="navLogo"
      >
        <span>BM</span>
        {siteTitle}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
