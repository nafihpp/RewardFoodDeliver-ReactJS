import "../App.css";
import Featured from "./Featured";
import Id from "./id";
import PizzaCard from "./PizzaCard";
import Ads from "./Slidered";
import Cart from "./Cart";
import { useState } from "react";
import Navbar from "./Navbar";
import loaderData from "../loader/foodload.json";
import Lottie from "lottie-react";

function MainPage() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        width: "100%",
                    }}
                >
                    <Lottie
                        style={{
                            width: 200,
                        }}
                        animationData={loaderData}
                        loop={true}
                        width={20}
                    />
                </div>
            ) : (
                <>
                    <Navbar />
                    <Featured />
                    <PizzaCard />
                </>
            )}
        </>
    );
}

export default MainPage;
