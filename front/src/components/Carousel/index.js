import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import "./styles.scss"
const Carousel = props => {
    return (
        <div id="portfolioCarousel" className="carousel slide carousel-fade" data-bs-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <StaticImage
                        src="../images/brand/observa.png"
                        width={200}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Observa Ciudadanía"
                    />
                    <StaticImage
                        src="../images/brand/proyecta.png"
                        width={200}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Proyecta"
                    />
                </div>
                <div className="carousel-item">
                    <StaticImage
                        src="../images/brand/Gojump.png"
                        width={200}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Gojump"
                    />
                </div>
                <div className="carousel-item">
                    <StaticImage
                        src="../images/brand/siderval.png"
                        width={200}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Siderval"
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
        </div>

    );
};

export default Carousel;