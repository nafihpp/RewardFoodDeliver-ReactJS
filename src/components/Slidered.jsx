import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function Slidered() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoPlay: true,
    };
    return (
        <TopDiv>
            <MainDiv>
                <Wrapper>
                    <Sliders {...settings}>
                        <div>
                            <h1>Hello</h1>
                        </div>
                    </Sliders>
                </Wrapper>
            </MainDiv>
        </TopDiv>
    );
}
const Sliders = styled(Slider)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Images = styled.img`
    display: block;
    width: 100%;
`;
const TopDiv = styled.div`
    padding-top: 100px;
`;
const MainDiv = styled.div`
    background-color: #fff;
    padding: 0 0 50px 0;
`;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
export default Slidered;
