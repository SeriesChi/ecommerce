import { IconComponent } from "../../../utils/icons/icon-utils";
import { icons } from "./home-utils";
import "./home.scss";
import HomeCategory from "./HomeCategory";
import HomeContact from "./HomeContact";
import HomeOffer from "./HomeOffer";
import HomeProduct from "./HomeProduct";
import HomeVendor from "./HomeVendor";

const Home = () => {
	return (
		<>
			<section>
				<div className="dp-flex jc-between">
					{icons?.map((item, index) => (
						<div
							className="box"
							style={{ padding: "15px 30px 15px" }}
						>
							<IconComponent icon={item?.icon} className="icon" />
							<h2>{item?.title}</h2>
						</div>
					))}
				</div>
			</section>

			<HomeCategory />

			<HomeOffer />

			<HomeProduct title="Trandy Products" />

			<HomeContact />

			<HomeProduct title="Just Arrived" />

			<HomeVendor />
		</>
	);
};

export default Home;
