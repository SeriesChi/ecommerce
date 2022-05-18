import React from "react";
import NavTitleBlock from "../../../components/navTitle/NavTitle";
import { myIcons } from "../../../styles/icons/Icons";
import { IconComponent } from "../../../utils/icons/icon-utils";
import HomeProduct from "../home/HomeProduct";
import FilterComponent from "./FilterComponent";
import { colorData, priceData, sizeData } from "./shop-utils";
import "./shop.scss";

const Shop = () => {
	return (
		<>
			<NavTitleBlock title="OUR SHOP" title2="Shop" />
			<div className="flex-row-container">
				<section className="pr-0">
					<div className="flex-nav-item">
						<FilterComponent title="Price" data={priceData} />
						<FilterComponent title="Color" data={colorData} />
						<FilterComponent title="Size" data={sizeData} />
					</div>
				</section>

				<div className="flex-nav-item fx-column">
					<HomeProduct col={3} />
					<div className="pagination">
						<div className="pagination-item">
							<IconComponent
								icon={{ Component: myIcons.chevronDoubleLeft }}
							/>
						</div>
						<div className="pagination-item">1</div>
						<div className="pagination-item">2</div>
						<div className="pagination-item">3</div>
						<div className="pagination-item">
							<IconComponent
								icon={{ Component: myIcons.chevronDoubleRight }}
								style={{ margin: "0px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Shop;
