// Navigation component within the header that will be used to render the different sections of your portfolio
// Add titles corresponding to the sections About Me, Portfolio, Contact, and Resume. Title for corresponding selection is highlighted in the navigation bar
	// About Me Section: Include recent photo of self
	// Portfolio Section: Include list of 6 projects with link to corresponding repo
	// Contact Section: Contact form with fields for name, email, and message.
		// When curse moved out of form fields without entering text, alert required field

	// Resume Section: Downloadable link to resume

// Footer include linkedin, github, 3rd platform

export default function Nav() {
	return (
		<nav className="navigation">
			<section 
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
			}}
			>
				<div>
					<a href="#">About Me</a>
				</div>
				<div>
					<a href="#">Portfolio</a>
				</div>
				<div>
					<a href="#">Contact</a>
				</div>
				<div>
					<a href="#">Resume</a>
				</div>

			</section>
		</nav>
	)
}

