// Header component used on multiple pages

import '../styles/Header.css'

const styles = {
	headerStyle: {
		background: '#5d72e9',
	},
	headingStyle: {
		fontSize: '64px',
	}
};

function Header() {
	return(
		<header style={styles.headerStyle} className='header'>
			<h1 style={styles.headingStyle}>Aaron's Portfolio</h1>
		</header>
	);
}

export default Header;