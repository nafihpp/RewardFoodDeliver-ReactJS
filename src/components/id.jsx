import styles from "../styles/Product.module.css";
import { useContext, useEffect, useState } from "react";
import Pizza from "../img/pizza.png";
import styled from "styled-components";
import Navbar from "./Navbar";
import Size from "../img/size.png";
import { StoreContext } from "../context/Store";
const Product = () => {
    const {
        state: { user_basket },
    } = useContext(StoreContext);

    const basket = user_basket;
    basket.map((ite) => {});
    const [orderSize, setOrderSize] = useState("");
    const [size, setSize] = useState(0);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState({
        id: 1,
        img: { Pizza },
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    });
    const addCart = () => {};
    return (
        <>
            <Navbar />
            <div className={styles.container} key={item.id}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <img src={Pizza} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{item.name}</h1>
                    <span className={styles.price}>${item.price[size]}</span>
                    <p className={styles.desc}>{item.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={() => setSize(0)}>
                            <span className={styles.number}>Small</span>
                            <ImageDiv>
                                <Image src={Size} />
                            </ImageDiv>
                        </div>
                        <div className={styles.size} onClick={() => setSize(1)}>
                            <span className={styles.number}>Medium</span>
                            <ImageDiv className="medium">
                                <Image src={Size} />
                            </ImageDiv>
                        </div>
                        <div className={styles.size} onClick={() => setSize(2)}>
                            <span className={styles.number}>Large</span>
                            <ImageDiv className="large">
                                <Image src={Size} />
                            </ImageDiv>
                        </div>
                    </div>
                    <h3 className={styles.choose}>
                        Choose additional ingredients
                    </h3>
                    <div className={styles.ingredients}>
                        <div className={styles.option}>
                            <input
                                type="checkbox"
                                id="double"
                                name="double"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Double Ingredients</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id="cheese"
                                name="cheese"
                            />
                            <label htmlFor="cheese">Extra Cheese</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id="spicy"
                                name="spicy"
                            />
                            <label htmlFor="spicy">Spicy Sauce</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id="garlic"
                                name="garlic"
                            />
                            <label htmlFor="garlic">Garlic Sauce</label>
                        </div>
                    </div>
                    <div className={styles.add}>
                        <input
                            type="number"
                            defaultValue={1}
                            className={styles.quantity}
                            onChange={(e) => setCount(e.currentTarget.value)}
                        />
                        <button className={styles.button} onClick={addCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const ImageDiv = styled.div`
    width: 100%;
    &.medium {
        width: 120%;
    }
    &.larger {
        width: 170%;
    }
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
export default Product;
