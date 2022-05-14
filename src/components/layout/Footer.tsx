import React from "react";
import { myIcons } from "../../styles/icons/Icons";
import { myImages } from "../../styles/images/Image";
import { IconComponent } from "../../utils/icons/icon-utils";

const quickLinks = [
	"Home",
	"Our Shop",
	"Shop Detail",
	"Shopping Cart",
	"Checkout",
	"Contact Us",
];

const Footer = () => {
	return (
		<footer>
			<section>
				<div>
					<h1>
						<span className="brand-logo">E</span>
						Shopper
					</h1>
					<p>
						Dolore erat dolor sit lorem vero amet. Sed sit lorem
						magna, ipsum no sit erat lorem et magna ipsum dolore
						amet erat
					</p>
					<p>
						<i className="ic-location icon" />
						<span>123 Street, New York, USA</span>
					</p>
					<p>
						<i className="ic-mail icon" />
						<span>info@example.com</span>
					</p>
					<p>
						<i className="ic-phone icon" />
						<span>+012 345 67890</span>
					</p>
				</div>
				{["", ""]?.map((_, index) => (
					<div key={index}>
						<h2>Quick Links</h2>
						<div className="dp-flex ai-start fx-column">
							{quickLinks?.map((item, index) => (
								<a
									href=""
									className="dp-flex ai-center"
									key={index}
								>
									<IconComponent
										icon={{
											Component: myIcons.chevronRight,
											size: "20px",
										}}
									/>
									<span>{item}</span>
								</a>
							))}
						</div>
					</div>
				))}
				{/* <div>
					<h2>Quick Links</h2>
					<div className="dp-flex ai-start fx-column">
						{quickLinks?.map((item, index) => (
							<a
								href=""
								className="dp-flex ai-center"
								key={index}
							>
								<IconComponent
									icon={{
										Component: myIcons.chevronRight,
										size: "20px",
									}}
								/>
								<span>{item}</span>
							</a>
						))}
					</div>
				</div> */}
				<div>
					<h2>Newsletter</h2>
					<form className="dp-flex fx-column">
						<input
							type="text"
							className="form-input"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="form-input"
							placeholder="Your Email"
						/>
						<button>Subscribe Now</button>
					</form>
				</div>
			</section>

			<section>
				<span>
					<hr color="#ffffff" />
					<div className="dp-flex jc-between">
						<span>
							©{" "}
							<a href="">
								<strong>Your Site Name</strong>
							</a>
							. All Rights Reserved. Designed by{" "}
							<a href="">
								<strong>HTML Codex</strong>
							</a>
						</span>
						<img src={myImages.Payment} />
					</div>
				</span>
			</section>
		</footer>
	);
};

export default Footer;