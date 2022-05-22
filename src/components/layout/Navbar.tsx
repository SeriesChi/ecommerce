import React, { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { chevronDownIcon, menu } from "../../styles/icons/Icons";
import { carousel1Image } from "../../styles/images/Image";
import { IconComponent } from "../../utils/icons/icon-utils";
import Brand from "../brand/Brand";

const Navbar = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== "/") {
			toggle(false);
		}
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
		<section className="pt-0">
			<div className="flex-row-container ai-start">
				<div className="flex-nav-item">
					<a
						className="collapsible-btn"
						id="dropdown"
						onClick={() => toggle()}
					>
						<span>Categories</span>
						<IconComponent
							icon={{ Component: chevronDownIcon }}
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
								icon={{ Component: chevronDownIcon }}
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

				<div
					className="flex-nav-item"
					style={{
						flex: "1 0 70%",
						flexDirection: "column",
						height: "445px",
						justifyContent: "flex-start",
					}}
				>
					<nav className="navbar horizontal-nav" id="horizontalNav">
						<div className="nav-brand">
							<Brand />
						</div>
						<div className="nav-item">
							<a>Home</a>
							<a href="/shop">Shop</a>
							<a>Shop Details</a>
							<a>Pages</a>
							<a href="/contact">Contact</a>
						</div>
						<div className="nav-item">
							<a>Login</a>
							<a>Register</a>
						</div>
						<a className="menuIcon">
							<IconComponent icon={{ Component: menu }} />
						</a>
					</nav>
					<div
						className="bg-danger fx-grow"
						style={{
							width: "100%",
							overflow: "hidden",
							position: "relative",
						}}
					>
						<img
							src={carousel1Image}
							style={{
								objectFit: "cover",
								height: "100%",
								width: "100%",
								overflow: "hidden",
								verticalAlign: "middle",
							}}
						/>
						<div
							style={{
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: "white",
								textAlign: "center",
							}}
						>
							<div>
								<p>10% OFF YOUR FIRST ORDER</p>
								<h1>Fashionable Price</h1>
								<button>Shop Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
