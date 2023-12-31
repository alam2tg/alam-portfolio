// Header component used on multiple pages

import '../styles/Header.css'

const styles = {
	headerStyle: {
		background:'e8eaf6'
	},
	headingStyle: {
		fontSize: '64px',
		alignContent: 'start',
	}
};

function Header() {
	return(
		<header style={styles.headerStyle} className='header'>
			<h1 style={styles.headingStyle}>Aaron's Developer Portfolio</h1>
		</header>
	);
}

export default Header;