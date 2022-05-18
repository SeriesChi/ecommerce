import { myIcons } from "../../../styles/icons/Icons";
import { myImages } from "../../../styles/images/Image";

const icons = [
	{
		icon: { Component: myIcons.check, size: "40px" },
		title: "Quality Products",
	},
	{
		icon: { Component: myIcons.shipping, size: "40px" },
		title: "Free Shipping",
	},
	{
		icon: { Component: myIcons.exchange, size: "40px" },
		title: "14-Day Return",
	},
	{
		icon: { Component: myIcons.phoneVolume, size: "40px" },
		title: "24/7 Support",
	},
];

const category = [
	{
		count: 15,
		image: myImages?.Cat1,
		title: "Men's dresses",
	},
	{
		count: 15,
		image: myImages?.Cat2,
		title: "Women's dresses",
	},
	{
		count: 15,
		image: myImages?.Cat3,
		title: "Baby's dresses",
	},
	{
		count: 15,
		image: myImages?.Cat4,
		title: "Accessories",
	},
	{
		count: 15,
		image: myImages?.Cat5,
		title: "Bags",
	},
	{
		count: 15,
		image: myImages?.Cat6,
		title: "Shoes",
	},
];

const product = [
	{
        image: myImages?.Product1,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product2,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product3,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product4,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product5,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product6,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product7,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
	{
        image: myImages?.Product8,
		title: "Colorful Stylish Shirt",
		price: "$123.00",
		actualPrice: "$123.00",
	},
];

const vendors = [myImages.Vendor1, myImages.Vendor2, myImages.Vendor3, myImages.Vendor4, myImages.Vendor5, myImages.Vendor6];

export {icons, category, product, vendors};