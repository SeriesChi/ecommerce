import React from "react";
import { category } from "./home-utils";

const HomeCategory = () => {
	return (
		<section>
			<div className="flex-row-container">
				{category?.map((item, index) => (
					<div className="card-box flex-row-item" key={index}>
						<p className="tc-end text-light">
							{item.count} Products
						</p>
						<a href="" className="img-block">
							<img src={item.image} className="res-img" />
						</a>
						<h3 className="tc-start">{item.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeCategory;
