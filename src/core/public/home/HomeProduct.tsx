import React, { useEffect, useState } from "react";
import { cartIcon, eyeIcon } from "../../../styles/icons/Icons";
import { IconComponent } from "../../../utils/icons/icon-utils";
import { product } from "./home-utils";

interface ProductProps {
    title?: string;
    col?: number;
}

const customCol = ["100%", "50%", "20%", "25%"];

const HomeProduct = (props: ProductProps) => {
    const { title, col } = props;
    const [productData, setProductData] = useState(product);

    useEffect(() => {
        if (col) {
            let count = col - (product.length % col);
            if (count > 0) {
                let extraData: any = [];
                let i = 0;
                debugger;
                while (i < count) {
                    extraData.push(productData[i]);
                    i++;
                }
                setProductData([...productData, ...extraData]);
            }
        }
    }, [col]);

    return (
        <section>
            {title && <h1 className="heading-01">{title}</h1>}
            <div className="flex-row-container tc-center">
                {productData?.map((item, index) => (
                    <div
                        className="card-box flex-row-item"
                        style={{ flex: `0 0 ${col ? customCol[col] : "20%"}` }}
                        key={index}
                    >
                        <a className="img-block">
                            <img src={item.image} className="res-img" />
                        </a>
                        <p>{item.title}</p>
                        <p>
                            {item.price}{" "}
                            <p
                                className="text-actual text-light"
                                style={{ display: "inline" }}
                            >
                                {item.actualPrice}
                            </p>
                        </p>
                        <div>
                            <span>
                                <IconComponent icon={{ Component: eyeIcon }} />
                                View Detail
                            </span>
                            <span>
                                <IconComponent icon={{ Component: cartIcon }} />
                                Add To Cart
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeProduct;
