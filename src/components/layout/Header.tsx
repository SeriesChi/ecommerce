import React from "react";
import {
	cartIcon,
	facebookIcon,
	heartIcon,
	instagramIcon,
	linkedInIcon,
	twitterIcon,
	youtubeIcon,
} from "../../styles/icons/Icons";
import { IconComponent } from "../../utils/icons/icon-utils";
import Brand from "../brand/Brand";

const socialIcons = [
	{ Component: facebookIcon },
	{ Component: twitterIcon },
	{ Component: linkedInIcon },
	{ Component: instagramIcon },
	{ Component: youtubeIcon },
];

const icons = [
	{ Component: heartIcon, size: "17px" },
	{ Component: cartIcon, size: "17px" },
];

const Header = () => {
	return (
		<>
			<header>
				<div className="header-support">
					<a href="">FAQs</a> <span className="vl" />{" "}
					<a href="">Help</a>
					<span className="vl" />
					<a href="">Support</a>
				</div>
				<div className="header-social">
					{socialIcons?.map((item, index) => (
						<a href="" key={index}>
							<IconComponent icon={item} />
						</a>
					))}
				</div>
			</header>
			<section className="nav-header">
				<div>
					<Brand />
				</div>

				<div>
					<form className="form-group">
						<div className="search-group">
							<input
								type="text"
								placeholder="Search for products"
								className="form-input"
								style={{ width: "100%", marginBottom: 0 }}
							/>
							{/* <div className="vl" style={{ height: "100%" }} /> */}
							<i className="ic-search" />
						</div>
					</form>

					<div className="dp-flex" style={{ paddingRight: "1rem" }}>
						{icons?.map((item, index) => (
							<div className="box" key={index}>
								<IconComponent icon={item} className="icon" />
								<span>0</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
