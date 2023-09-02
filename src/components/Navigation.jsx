// Navigation component within the header that will be used to render the different sections of your portfolio
// Add titles corresponding to the sections About Me, Portfolio, Contact, and Resume. Title for corresponding selection is highlighted in the navigation bar
	// About Me Section: Include recent photo of self
	// Portfolio Section: Include list of 6 projects with link to corresponding repo
	// Contact Section: Contact form with fields for name, email, and message.
		// When curse moved out of form fields without entering text, alert required field

	// Resume Section: Downloadable link to resume

// Footer include linkedin, github, 3rd platform
const navStyle = {
	content: {
		padding: 20,
	},
	navFont: {
		fontSize: '2rem',
	}
}


export default function Nav() {
	return (
		<nav className="navigation">
			<section 
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					background: '#e8eaf6',
					

			}}
			>
				<div style={navStyle.content}>
					<a href="/" style={navStyle.navFont}>About Me</a>
				</div>
				<div  style={navStyle.content}>
					<a href="/portfolio"style={navStyle.navFont}>Portfolio
</a>
				</div>
				<div style={navStyle.content}>
					<a href="/contact" style={navStyle.navFont}>Contact
</a>
				</div>
				<div style={navStyle.content}>
					<a href="/resume" style={navStyle.navFont}>Resume</a>
				</div>

			</section>
		</nav>
	)
}

