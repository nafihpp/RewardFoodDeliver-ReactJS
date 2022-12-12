import { React, useState } from "react";
import styles from "../styles/PizzaCard.module.css";
import Pizza from "../img/pizza.png";
import Burger from "../img/burger.jpg";
import Pasta from "../img/pasta.webp";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import Shawarma from "../img/shawarma.jpg";
import { Link } from "react-router-dom";

const PizzaCard = () => {
    const [product, setProducts] = useState([
        {
            id: 1,
            title: "Pizza",
            price: 10.95,
            image: `${Pizza}`,
        },
        {
            id: 2,
            title: "Hampatty Burger",
            price: 20.85,
            image: `${Burger}`,
        },
        {
            id: 3,
            title: "Pasta",
            price: 90.95,
            image: `${Pasta}`,
        },
        {
            id: 4,
            title: "Shawarma",
            price: 98.99,
            image: `${Shawarma}`,
        },
    ]);
    console.table(product);
    let listProducts = () => {
        return product.map((produc) => (
            <>
                <Child key={produc.id}>
                    <ImageContainer>
                        <ProductImg src={produc.image} alt="" />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct>{produc.title}</HeadProduct>
                        <strike>
                            <PriceProduct>${produc.price}</PriceProduct>
                        </strike>
                        <PriceProduct>
                            Offer Price: ${Math.floor(produc.price - 2)}
                        </PriceProduct>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <Links to="/pizza">
                            Go Now{" "}
                            <Spanned className="icon">
                                {produc.id === 1 ? <FaPizzaSlice /> : null}
                                {produc.id === 2 ? <FaHamburger /> : null}
                                {produc.id === 3 ? <FaHamburger /> : null}
                                {produc.id === 4 ? <FaPizzaSlice /> : null}
                            </Spanned>
                        </Links>
                    </Empdiv>
                </Child>
            </>
        ));
    };
    return (
        <>
            <MainContainer>
                <MainList>
                    <Wrapperlist>
                        <Mainheadline>Trending Now!</Mainheadline>
                        <ParentList>{listProducts()}</ParentList>
                    </Wrapperlist>
                </MainList>
            </MainContainer>
        </>
    );
};
const Mainheadline = styled.h1`
    border-bottom: 1px solid;
    color: white;
    text-align: end;
`;
const Spanned = styled.div`
    display: flex;
    align-items: center;
    display: none;
    margin-left: 6px;
`;
const MainList = styled.div`
    background-color: #641ab9;
`;
const Empdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Wrapperlist = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const MainContainer = styled.section`
    padding-top: 16px;
`;
const ParentList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
`;
const Child = styled.li`
    width: 23%;
    margin-bottom: 46px;
    border-radius: 4px;
    padding: 4px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        width: 46%;
        flex-wrap: wrap;
    }
`;
const ImageContainer = styled.div`
    width: 80%;
    max-width: 68%;
    overflow: hidden;
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;
`;
const HeadProduct = styled.h4`
    height: 1.5rem;
    overflow: hidden;
`;
const PriceProduct = styled.p``;
const Links = styled(Link)`
    margin: 8px 0;
    text-decoration: none;
    display: flex;
    font-weight: 600;
    background-color: #28b17b;
    padding: 5px;
    border-radius: 4px;
    color: white;
    justify-content: center;
    align-items: end;
    transition: 0.9s;
    margin-top: 14px;
    &:hover .icon {
        display: block;
    }
`;

export default PizzaCard;
