import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SelectedAvatar = ({selected, data}) => {
    const selectedAvatar =  data.allFile.nodes.find(({base: originalName}) => originalName === selected)
    const image = getImage(selectedAvatar.childImageSharp)
    console.log(selected)
    return (
        <GatsbyImage
            height={74}
            width={74}
            image={image}
            alt="your avatar"
            className="rounded-circle"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}        
        />
    );
};

export default SelectedAvatar;