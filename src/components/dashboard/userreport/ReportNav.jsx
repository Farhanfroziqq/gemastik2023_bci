import React, { useState } from "react";
import History from "./History";
import Graph from "./Graph";

const ReportNav = () => {
	const [activeLink, setActiveLink] = useState("History");
	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	const renderComponent = () => {
		switch (activeLink) {
			case "History":
				return <History />;
			case "Graph":
				return <Graph />;
			default:
				return <History />;
		}
	};

	const Navbar = () => {
		return (
			<div>
				<div className='flex'>
					<button
						className={`mr-8 ${
							activeLink === "History" ? "font-semibold" : ""
						}`}
						onClick={() => handleLinkClick("History")}
					>
						History
					</button>
					<button
						className={`mr-8 ${activeLink === "Graph" ? "font-semibold" : ""}`}
						onClick={() => handleLinkClick("Graph")}
					>
						Graph
					</button>
				</div>
				<hr className='flex-grow border-1 my-2 mb-8' />
			</div>
		);
	};

	return (
		<div className='overflow-hidden overflow-y-auto'>
			<Navbar />
			{renderComponent()}
		</div>
	);
};

export default ReportNav;
