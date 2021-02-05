import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import BabyTree from "../images/baby_tree_res.jpg";
import OldWoods from "../images/old_woods_res.jpg";

function CarouselFront() {
    return (
        <div style={{ width: "100vw" }}>
            <Carousel indicators={false} fade={true} interval={null}>
                <Carousel.Item >
                    <img className="img-carousel" src={OldWoods} alt="First slide" />
                    <h1 className="slide-text">some text.</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-carousel" src={BabyTree} alt="Second slide" />
                    <h1 className="slide-text">more text</h1>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Carousel.Item>

            </Carousel >

        </div>

    )
}

export default CarouselFront;


