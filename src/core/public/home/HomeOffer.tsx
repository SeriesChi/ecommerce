import React from "react";
import { Offer1Image, Offer2Image } from "../../../styles/images/Image";

const offer = [
    {
        image: Offer1Image,
        title: "Spring",
    },
    {
        image: Offer2Image,
        title: "Winter",
    },
];

const HomeOffer = () => {
    return (
        <section>
            <div className="dp-flex jc-between">
                {offer?.map((offer, index) => (
                    <div className="card-offer offerList">
                        <img src={offer?.image} />
                        <div>
                            <p>20% OFF THE ALL ORDER</p>
                            <h1>{offer?.title} Collection</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeOffer;
