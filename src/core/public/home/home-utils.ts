import {
    checkIcon,
    exchangeIcon,
    phoneVolumeIcon,
    shippingIcon,
} from "../../../styles/icons/Icons";
import {
    Cat1Image,
    Cat2Image,
    Cat3Image,
    Cat4Image,
    Cat5Image,
    Cat6Image,
    Product1Image,
    Product2Image,
    Product3Image,
    Product4Image,
    Product5Image,
    Product6Image,
    Product7Image,
    Product8Image,
    Vendor1Image,
    Vendor2Image,
    Vendor3Image,
    Vendor4Image,
    Vendor5Image,
    Vendor6Image,
} from "../../../styles/images/Image";

const icons = [
    {
        icon: { Component: checkIcon, size: "40px" },
        title: "Quality Products",
    },
    {
        icon: { Component: shippingIcon, size: "40px" },
        title: "Free Shipping",
    },
    {
        icon: { Component: exchangeIcon, size: "40px" },
        title: "14-Day Return",
    },
    {
        icon: { Component: phoneVolumeIcon, size: "40px" },
        title: "24/7 Support",
    },
];

const category = [
    {
        count: 15,
        image: Cat1Image,
        title: "Men's dresses",
    },
    {
        count: 15,
        image: Cat2Image,
        title: "Women's dresses",
    },
    {
        count: 15,
        image: Cat3Image,
        title: "Baby's dresses",
    },
    {
        count: 15,
        image: Cat4Image,
        title: "Accessories",
    },
    {
        count: 15,
        image: Cat5Image,
        title: "Bags",
    },
    {
        count: 15,
        image: Cat6Image,
        title: "Shoes",
    },
];

const product = [
    {
        image: Product1Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product2Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product3Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product4Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product5Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product6Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product7Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
    {
        image: Product8Image,
        title: "Colorful Stylish Shirt",
        price: "$123.00",
        actualPrice: "$123.00",
    },
];

const vendors = [
    Vendor1Image,
    Vendor2Image,
    Vendor3Image,
    Vendor4Image,
    Vendor5Image,
    Vendor6Image,
];

export { icons, category, product, vendors };
