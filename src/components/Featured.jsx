import { useEffect, useState } from "react";
import styled from "styled-components";
import mobileview from "../img/mobileview.png";
import bike from "../img/bike.png";
import Fade from "react-reveal/Fade";
import animationData from "../loader/foodload.json"; //Foodie Loader Json

const Featured = () => {
    const defaultOptions = {
        //Main Loader Settings
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true); //onmount setting loading as true
    }, []);

    setTimeout(function () {
        setLoading(false); //setting timeout for being loader as false
    }, 5000);

    return (
        <>
            <MainContainer>
                <Wrapper>
                    <MainDiv>
                        <LeftDiv>
                            <Headline>
                                <Fade left>
                                    Start Spending and Earn Rewards!
                                </Fade>
                            </Headline>
                            <ButtonContainer>
                                <Fade left duration={7000}>
                                    <Button>Get Started</Button>
                                </Fade>
                            </ButtonContainer>
                        </LeftDiv>
                        <LeafContainer>
                            <Fade left duration={6000}>
                                <Leafimg src={bike} alt="" />
                            </Fade>
                        </LeafContainer>

                        <RightDiv>
                            <Fade bottom duration={3000}>
                                <Image src={mobileview} alt="" />
                            </Fade>
                        </RightDiv>
                    </MainDiv>
                </Wrapper>
            </MainContainer>
        </>
    );
};

const ButtonContainer = styled.div`
    margin-top: 14px;
`;
const Button = styled.a`
    background-color: white;
    padding: 9px;
    border-radius: 6px;
    margin-left: 387px;
    cursor: pointer;
    font-weight: 600;
    font-family: unset;
    font-size: 15px;
`;
const LeafContainer = styled.div`
    width: 55%;
    position: absolute;
    right: 143px;
    top: 214px;
`;
const Leafimg = styled.img`
    width: 55%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Headline = styled.h1`
    font-family: system-ui;
    font-size: 59px;
`;
const MainContainer = styled.section`
    background-color: #641ab9;
    height: 600px;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftDiv = styled.div`
    width: 40%;
    margin-top: 80px;
`;
const RightDiv = styled.div`
    top: 134px;
    width: 32%;
    position: absolute;
    right: 0px;
`;
export default Featured;
