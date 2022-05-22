import React from "react";

interface BrandProps {
	footer?: boolean;
}

const Brand = ({ footer = false }: BrandProps) => {
	return (
		<h1>
			<span
				className="brand-logo"
				style={{ borderColor: footer ? "#fff" : "" }}
			>
				E
			</span>
			Shopper
		</h1>
	);
};

export default Brand;
