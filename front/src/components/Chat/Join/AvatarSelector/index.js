import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
export const avatars = ['one.png', 'two.png', 'three.png', 'four.png']

const AvatarSelector = (props) => {
    const {selected, setSelected} = props
    return (
        <div className="row my-4">
            <span className="mb-2">Avatar</span>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <StaticImage
                    onClick={() => setSelected("one.png")} role="button" tabIndex={0}
                    src="../../../../images/avatars/one.png"
                    width={74}
                    className={`rounded-circle ${selected === 1 && 'active'}`}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="My face"
                />
            </div>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <StaticImage
                    onClick={() => setSelected("two.png")} role="button" tabIndex={-1}
                    src="../../../../images/avatars/two.png"
                    width={74}
                    className={`rounded-circle ${selected === 2 && 'active'}`}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="My face"
                />
            </div>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <StaticImage
                    src="../../../../images/avatars/three.png"
                    width={74}
                    className={`rounded-circle ${selected === 3 && 'active'}`}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="My face"
                />
            </div>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <StaticImage
                    src="../../../../images/avatars/four.png"
                    width={74}
                    className={`rounded-circle ${selected === 4 && 'active'}`}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="My face"
                />
            </div>
        </div>
    );
};

export default AvatarSelector;