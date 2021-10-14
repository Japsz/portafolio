import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const SelectedAvatar = ({selected, data}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {data.allFile.nodes.map(({base, name, childImageSharp: {gatsbyImageData}}) => {
                return (
                    selected === base ?
                    <div key={`s-${name}`}>
                        <GatsbyImage
                            image={gatsbyImageData}
                            className='rounded-circle'
                            aria-hidden={selected === base}
                            alt={name}
                            key={name}
                            width={74}
                            quality={95}
                        />
                    </div> : null
                )
            })}
        </div>
    );
};

export default SelectedAvatar;