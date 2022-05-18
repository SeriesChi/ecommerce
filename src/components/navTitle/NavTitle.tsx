import React from "react";
import { useNavigate } from "react-router-dom";

interface ITitleBLock {
	title: string;
	title2: string;
}

const NavTitleBlock = (props: ITitleBLock) => {
	const navigate = useNavigate();
	const { title, title2 } = props;

	return (
		<div className="card-offer dp-flex jc-center ai-center fx-column">
			<h1>{title}</h1>
			<div className="dp-flex">
				<p
					className="tc-primary cursor-pointer"
					onClick={() => navigate("/")}
				>
					Home
				</p>{" "}
				<p> - {title2}</p>
			</div>
		</div>
	);
};

export default NavTitleBlock;
