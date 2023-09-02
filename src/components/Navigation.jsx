// Navigation component within the header that will be used to render the different sections of your portfolio
// Add titles corresponding to the sections About Me, Portfolio, Contact, and Resume. Title for corresponding selection is highlighted in the navigation bar
	// About Me Section: Include recent photo of self
	// Portfolio Section: Include list of 6 projects with link to corresponding repo
	// Contact Section: Contact form with fields for name, email, and message.
		// When curse moved out of form fields without entering text, alert required field

	// Resume Section: Downloadable link to resume

// Footer include linkedin, github, 3rd platform

import { Link, useLocation } from 'react-router-dom';

const navStyle = {
	content: {
		padding: 20,
	},
	navFont: {
		fontSize: '2rem',
	}
}



export default function Nav() {

	const currentPage = useLocation().pathname;

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
					<Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} style={navStyle.navFont}>About Me</Link>
				</div>
				
				<div  style={navStyle.content}>
					<Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'} style={navStyle.navFont}>Portfolio</Link>
				</div>
				<div style={navStyle.content}>
					<Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} style={navStyle.navFont}>Contact</Link>
				</div>
				<div style={navStyle.content}>
					<Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'} style={navStyle.navFont}>Resume</Link>
				</div>

			</section>
		</nav>
	)
}

