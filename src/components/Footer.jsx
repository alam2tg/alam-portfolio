// Footer component used on multiple pages
const styles = {
	container: {
		background: '#e8eaf6',
	},
	footerStyle: {
		fontSize: '1.5rem',
		alignContent: 'start',
		margin: '20px',
	}
}
function Footer() {
	return (
		<footer style={styles.container} className='footer'>
			<a style={styles.footerStyle} href="https://www.github.com/alam2tg" title="Github">Github</a>
         <a style={styles.footerStyle} href="https://www.linkedin.com/in/lam-aaron2/" title="Linkedin">LinkedIn</a>
		</footer>
	);
}

export default Footer;