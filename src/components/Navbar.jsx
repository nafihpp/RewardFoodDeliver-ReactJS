import { React, useState, useEffect, useContext } from "react";
import styles from "../styles/Navbar.module.css";
import Location from "../img/location.jpg";
import eatnow from "../img/eatit.png";
import Cart from "../img/cart.png";
import styled from "styled-components";
import Geocode from "react-geocode";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const Navbar = ({ children }) => {
    const [lat, setLatitude] = useState("");
    const [lng, setLongitude] = useState("");
    const [modal, setModal] = useState(false);
    const [isModal, setModa] = useState(false);
    Geocode.setApiKey("AIzaSyA1Big55ZxwdB4Rr63kICLf9WdYN2yCqAc");
    Geocode.setLanguage("en");
    const [data, setData] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    Geocode.fromLatLng(lat, lng).then(
        (response) => {
            const address = response.results[1].formatted_address;
            setData(address);
        },
        (error) => {
            console.log(error);
        }
    );
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.callButton}>
                        <img src={Location} alt="" width="40" height="40" />
                    </div>
                    <div className={styles.texts}>
                        <a>Your Location</a>
                        <div className={styles.text}>
                            <p>{data}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Offers<Spanned>New</Spanned>
                        </li>
                        <li className={styles.listItem}>Menu</li>
                        <img src={eatnow} alt="" width="160px" height="69px" />
                        <li className={styles.listItem}>
                            <LoginButton
                                onClick={() => {
                                    setModal(!modal);
                                    setModa(false);
                                }}
                            >
                                Login
                            </LoginButton>
                        </li>
                        <li className={styles.listItem}>
                            <LoginButton
                                onClick={() => {
                                    setModa(!isModal);
                                    setModal(false);
                                }}
                            >
                                Signup
                            </LoginButton>
                        </li>
                    </ul>
                </div>
                <Linked to="/cart">
                    <div className={styles.cart}>
                        <img src={Cart} alt="" width="30px" height="30px" />
                        <div className={styles.counter}>2</div>
                    </div>
                </Linked>
            </div>
            {modal && <Login setModal={setModal} />}
        </div>
    );
};
const LoginButton = styled.a`
    cursor: pointer;
`;
const Linked = styled(Link)`
    display: flex;
    align-items: center;
    position: relative;
`;
const Spanned = styled.span`
    color: #ffa700;
    font-size: 10px;
    position: absolute;
    font-weight: 600;
    top: 20px;
    left: 62px;
`;
export default Navbar;
