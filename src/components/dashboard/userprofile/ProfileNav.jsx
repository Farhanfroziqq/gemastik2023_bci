import React, { useState } from "react";
import Account from "./Account";
import Personal from "./Personal";
import Contact from "./Contact";

const Settings = () => {
	return <div>Settings component</div>;
};

const ProfileNav = () => {
	const [activeLink, setActiveLink] = useState("Account");
	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	const renderComponent = () => {
		switch (activeLink) {
			case "Account":
				return <Account />;
			case "Personal":
				return <Personal />;
			case "Contacts":
				return <Contact />;
			case "Settings":
				return <Settings />;
			default:
				return <Account />;
		}
	};

	const Navbar = () => {
		return (
			<div>
				<div className='flex my-4'>
					<button
						className={`mr-8 ${activeLink === "Account" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("Account")}
					>
						Account
					</button>
					<button
						className={`mr-8 ${activeLink === "Personal" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("Personal")}
					>
						Personal
					</button>
					<button
						className={`mr-8 ${activeLink === "Contacts" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("Contacts")}
					>
						Contacts
					</button>
					<button
						className={`mr-8 ${activeLink === "Settings" ? "font-bold" : ""}`}
						onClick={() => handleLinkClick("Settings")}
					>
						Settings
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

export default ProfileNav;
