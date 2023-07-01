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
				<div className='flex my-4'>
					<button
						className={`mr-8 ${activeLink === "History" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("History")}
					>
						History
					</button>
					<button
						className={`mr-8 ${activeLink === "Graph" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("Graph")}
					>
						Graph
					</button>
				</div>
				<hr className='flex-grow border-gray-300 border-1 mb-8' />
			</div>
		);
	};

	return (
		<div>
			<Navbar />
			{renderComponent()}
		</div>
	);
};

export default ReportNav;
