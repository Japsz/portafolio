import React from 'react';
import PropTypes from 'prop-types';

const fileIcons = {
  'pdf': <i className="bi bi-file-pdf text-primary"/>,
  'ipynb': <i className="bi bi-journal-code text-primary"/>,
  'py': <i className="bi bi-file-earmark-code text-primary"/>,
  'csv': <i className="bi bi-file-earmark-ruled text-primary"/>,
  'sql': <i className="bi bi-server text-primary"/>
}
const File = ({ path, name, extension, ...props }) => {
  const Icon = fileIcons[extension] || <i className="bi bi-file-earmark text-primary"/>
  const onClick = () => {
    if(extension !== 'ipynb') {
      window.open(`https://github.com/japsz/DesafioLatam/tree/master/${encodeURIComponent(path)}`, '_blank')
    }
  }
  return (
    <div className="accordion-item" {...props}>
      <div className="accordion-header">
        <button className={`accordion-button accordion-${extension === 'ipynb' ? 'notebook' : 'github'} collapsed`} type="button" label={name} onClick={onClick}>
          {Icon}
          <span className="ms-2">{name}</span>
        </button>
      </div>
    </div>
  );
};

File.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default File;