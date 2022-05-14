import React from "react";
import { myIcons } from "../../styles/icons/Icons";
import { IconComponent } from "../../utils/icons/icon-utils";

const icons = [
	{ Component: myIcons.facebook },
	{ Component: myIcons.twitter },
	{ Component: myIcons.linkedIn },
	{ Component: myIcons.instagram },
	{ Component: myIcons.youtube },
];

const Header = () => {
	return (
		<header className="dp-flex jc-between ai-center">
			<div className="dp-flex ai-center">
				<a href="">FAQs</a> <span className="vl" /> <a href="">Help</a>
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
	);
};

export default Header;
