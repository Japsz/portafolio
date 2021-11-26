/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
const Layout = ({ children, header, ...props }) => {
  const HeaderComponent = header
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderComponent siteTitle={data.site.siteMetadata?.title || `Title`} {...props} />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.func,
  minimized: PropTypes.bool,
}
Layout.defaultProps = {
  header: Header,
  minimized: false,
}
export default Layout
