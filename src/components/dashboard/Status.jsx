import React from "react";

const Status = () => {
	return (
		<div>
			<h1>{/* Header page */}</h1>

			{/* Section 1 */}
			<div>
				<h2>{/* Header 2 (nutrition status) */}</h2>
				{/* border */}
				<p>{/* now date */}</p>
				<p>{/* Warning message */}</p>

				<div>
					{/* progress bar */}
					<div>{/* Calories */}</div>
					<div>{/* Carbohidrate */}</div>
					<div>{/* Protein */}</div>
					<div>{/* Fat */}</div>
				</div>
			</div>

			{/* Section 2 */}
			<div>
				<h2>{/* Header 2 (Meal input) */}</h2>
				{/* border */}
				<button>{/* Type to search button */}</button>
			</div>
		</div>
	);
};

export default Status;
