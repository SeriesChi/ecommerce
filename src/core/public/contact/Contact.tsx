import React from "react";
import Social from "../../../components/layout/Social";
import NavTitleBlock from "../../../components/navTitle/NavTitle";

const Contact = () => {
	return (
		<>
			<NavTitleBlock title="CONTACT US" title2="Contact" />
			<h1 className="tc-center">--- Contact For Any Queries ---</h1>

			<section>
				<div className="flex-row-container">
					<div
						className="flex-row-item"
						style={{ flex: "0 0 55%", border: "0px" }}
					>
						<form className="dp-flex fx-column wd-100">
							<input
								type="text"
								placeholder="Your Name"
								className="form-input wd-100"
							/>
							<input
								type="text"
								placeholder="Your Email"
								className="form-input wd-100"
							/>
							<input
								type="text"
								placeholder="Subject"
								className="form-input wd-100"
							/>
							<textarea
								rows={5}
								placeholder="Message"
								className="form-control wd-100"
							></textarea>
							<button>Send Message</button>
						</form>
					</div>

					<div
						className="flex-row-item"
						style={{ flex: "1 0 30%", border: "0px" }}
					>
						<div>
							<h3>Get In Touch</h3>
							<p>
								Justo sed diam ut sed amet duo amet lorem amet
								stet sea ipsum, sed duo amet et. Est elitr dolor
								elitr erat sit sit. Dolor diam et erat clita
								ipsum justo sed.
							</p>
							<h3>Store 1</h3>
							<Social />
							<h3>Store 2</h3>
							<Social />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
