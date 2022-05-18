import React, { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { myIcons } from "../../styles/icons/Icons";
import { IconComponent } from "../../utils/icons/icon-utils";
import Brand from "../brand/Brand";

const icons = [
	{ Component: myIcons.heart, size: "17px" },
	{ Component: myIcons.cart, size: "17px" },
];

const Navbar = () => {
	const location = useLocation();
	// const match = useMatch("/");

	useEffect(() => {
		if (location.pathname !== "/") {
			toggle(false);
		} else {
			// toggle();
		}
		// toggle();
	}, [location.pathname]);

	const toggle = (show = true) => {
		let verticalNav = document.getElementById("vertical-nav");
		let attribute = verticalNav?.classList?.contains("vertical-nav-none");
		if (show) {
			attribute
				? verticalNav?.classList?.remove("vertical-nav-none")
				: verticalNav?.classList?.add("vertical-nav-none");
		} else {
			!attribute && verticalNav?.classList?.add("vertical-nav-none");
		}
	};

	return (
		<section>
			<div className="flex-row-container ai-start">
				<div className="flex-nav-item">
					<a
						className="collapsible-btn"
						id="dropdown"
						onClick={() => toggle()}
					>
						<span>Categories</span>
						<IconComponent
							icon={{ Component: myIcons?.chevronDown }}
							style={{ paddingRight: "30px" }}
						/>
					</a>
					<nav
						className="navbar vertical-nav wd-100"
						id="vertical-nav"
					>
						{/* <div> */}
						<a className="dp-flex jc-between">
							Dresses
							<IconComponent
								icon={{ Component: myIcons?.chevronDown }}
								style={{ paddingRight: "30px" }}
							/>
						</a>
						{/* <div className="">
							<a>Men's Dresses</a>
							<a>Women's Dresses</a>
							<a>Baby's Dresses</a>
						</div> */}
						{/* </div> */}
						<a>Shirts</a>
						<a>Jeans</a>
						<a>Swimwear</a>
						<a>Sleepwear</a>
						<a>Sportwear</a>
						<a>Jumpsuit</a>
						<a>Blazers</a>
						<a>Jackets</a>
						<a>Shoes</a>
					</nav>
				</div>

				<div className="flex-nav-item" style={{ flex: "1 0 70%" }}>
					<nav className="navbar horizontal-nav">
						<div>
							<a>Home</a>
							<a href="/shop">Shop</a>
							<a>Shop Details</a>
							<a>Pages</a>
							<a href="/contact">Contact</a>
						</div>
						<div>
							<a>Login</a>
							<a>Register</a>
						</div>
					</nav>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
