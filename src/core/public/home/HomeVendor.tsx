import { vendors } from "./home-utils";

const HomeVendor = () => {
	return (
		<section>
			<div className="dp-flex jc-between">
				{vendors?.map((item, index) => (
					<div className="box" key={index}>
						<img src={item} />
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeVendor;
