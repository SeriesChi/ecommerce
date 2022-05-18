import React from "react";

interface FilterDataProps {
	title: string;
	data: {
		title: string;
		value: number;
	}[];
}

const FilterComponent = (props: FilterDataProps) => {
	const { title, data } = props;
	return (
		<section className="wd-100">
			<h2>Filter by {title}</h2>
			<div>
				{data?.map((item, index) => (
					<div className="filter-item">
						<div>
							<input type="checkbox" name={`checkbox${index}`} />
							<span>{item?.title}</span>
						</div>
						<span className="filter-value">{item.value}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default FilterComponent;
