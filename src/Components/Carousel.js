import "./style.css";
import React from "react";
import image1 from './Images/CarouselImage1.jpeg'
import image2 from './Images/CarouselImage2.jpeg'
import image3 from './Images/CarouselImage3.jpeg'

export default function Carousel() {
    return (
        <div>
            <div
                id="myCarousel"
                className="carousel slide mb-6"
                data-bs-ride="carousel">
                <div className="carousel-indicators ">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-label="Slide 1"
                        aria-current="true"></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className=""></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} alt="..." style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">
                                    Some representative placeholder content for the first slide of
                                    the carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-primary">
                                        Sign up today
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} alt="..." style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Some representative placeholder content for the second slide
                                    of the carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-primary">Learn more</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} alt="..." style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Some representative placeholder content for the third slide of
                                    this carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-primary">
                                        Browse gallery
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next">
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}