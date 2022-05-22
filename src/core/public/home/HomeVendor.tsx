import { vendors } from "./home-utils";

const HomeVendor = () => {
	return (
		<section>
			<div className="vendor-block">
				{vendors?.map((item, index) => (
					<div className="box" key={index}>
						<img style={{ objectFit: "cover" }} src={item} />
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeVendor;
