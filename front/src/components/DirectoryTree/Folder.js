import React from 'react';
import PropTypes from 'prop-types';
import DirectoryTree from '.';
import omit from '../../utils/omit';

const Folder = props => {
    const { parentSHA, myKey, myValues } = props
    return (
        <div className='accordion-item'>
            <div className="accordion-header" id={`panel-head-${myValues.sha}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panel-collapse-${myValues.sha}`} aria-expanded="true" aria-controls={`panel-collapse-${myValues.sha}`}>
                    <i className="bi bi-folder-fill text-primary"></i>
                    <span className="ms-2">{myKey}</span>
                </button>
            </div>
            <div id={`panel-collapse-${myValues.sha}`} className="accordion-collapse collapse" aria-labelledby={`panel-head-${myValues.sha}`} data-bs-parent={`#accordion-${parentSHA}`}>
                <div className="accordion-body">
                    <DirectoryTree paths={omit(myValues, ['sha', 'type'])} sha={myValues.sha} />
                </div>
            </div>
        </div>
    )
}
Folder.propTypes = {
    parentSHA: PropTypes.string.isRequired,
    myKey: PropTypes.string.isRequired,
    myValues: PropTypes.shape({
        type: PropTypes.string.isRequired,
        sha: PropTypes.string.isRequired,
    })
};

export default Folder;