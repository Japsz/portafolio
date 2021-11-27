import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import './styles.scss'
const JupyterHeader = ({ path, back }) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    <span>BM</span>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-item text-light text-center d-none d-md-flex">
                    {path}
                </div>
                <div className="collapse mt-3 mt-md-0 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item text-light d-md-none">
                            {path}
                        </li>
                        <li className="nav-item">
                            <a href={`https://github.com/japsz/DesafioLatam/tree/master/${encodeURIComponent(path)}`} className="nav-link">
                                Ver en Github
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={back}
                                activeClassName="active"
                                className="nav-link font-weight-bold"
                            >
                                Back
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

JupyterHeader.propTypes = {
    path: PropTypes.string.isRequired,
    back: PropTypes.string,
};
JupyterHeader.defaultProps = {
    back: "/datascience",
};
export default JupyterHeader;