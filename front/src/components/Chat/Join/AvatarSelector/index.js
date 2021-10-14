import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
export const avatars = ['one.png', 'two.png', 'three.png', 'four.png']

const AvatarSelector = (props) => {
    const {selected, setSelected, data} = props
    return (
        <div className="row mb-4">
            <span className="mb-2 text-center">Avatars</span>
            {data.allFile.nodes.map(({base, name, childImageSharp: {gatsbyImageData}}) => {
                return (
                    <div className={`col-6 col-sm-3 mb-2 d-flex justify-content-center ${selected === base ? 'selectedAvatar' : ''}`} key={name}>
                        <GatsbyImage
                            image={gatsbyImageData}
                            className={`rounded-circle`}
                            alt={name}
                            onClick={() => setSelected(base)}
                            role="button"
                            tabIndex={0}
                            width={74}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default AvatarSelector;