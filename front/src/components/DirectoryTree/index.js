import React from 'react';
import PropTypes from 'prop-types';
import File from './File';
import Folder from './Folder';
import "./styles.scss"
const DirectoryTree = ({ paths, sha }) => {
  const mainKeys = Object.keys(paths)
  if (mainKeys.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <i className="bi bi-exclamation-circle-fill text-danger"/>
        <span className="my-1 fs-7 text-primary fw-bold">Hubo un error al conseguir la informacion de la API.</span>
        <span className="my-1 fs-7 text-primary fw-bold">Porfavor intentalo mas tarde.</span>
      </div>
    )
  }
  return (
    <div className="accordion accordion-rounded" id={`accordion-${sha}`}>
      {
        mainKeys
          .filter((item) => paths[item].type === 'dir')
          .map((item) => <Folder key={paths[item].sha} myKey={item} parentSHA={sha} myValues={paths[item]} />)
      }
      {
        mainKeys
          .filter((item) => paths[item].type === 'file')
          .map((item) => <File key={paths[item].sha} {...paths[item]} />)
      }
    </div>
  )
};

DirectoryTree.propTypes = {
  paths: PropTypes.object.isRequired,
  sha: PropTypes.string.isRequired,
};
DirectoryTree.defaultProps = {
  sha: 'root',
};

export default DirectoryTree;