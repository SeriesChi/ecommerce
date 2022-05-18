import React from "react";
import { myIcons } from "../../styles/icons/Icons";
import { IconComponent } from "../../utils/icons/icon-utils";
import Brand from "../brand/Brand";

const icons = [
	{ Component: myIcons.facebook },
	{ Component: myIcons.twitter },
	{ Component: myIcons.linkedIn },
	{ Component: myIcons.instagram },
	{ Component: myIcons.youtube },
];

const Header = () => {
	return (
		<>
			<header className="dp-flex jc-between ai-center">
				<div className="dp-flex ai-center">
					<a href="">FAQs</a> <span className="vl" />{" "}
					<a href="">Help</a>
					<span className="vl" />
					<a href="">Support</a>
				</div>
				<div>
					{icons?.map((item, index) => (
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
					<form
						className="fx-grow"
						style={{
							margin: "0 30px 0",
						}}
					>
						<div className="box search-group">
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

					<div className="dp-flex">
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
