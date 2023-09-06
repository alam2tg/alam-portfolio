import '../styles/Footer.css'
// Footer component used on multiple pages
import iconGithub from '../assets/images/iconGithub.png'
import iconLinkedin from '../assets/images/iconLinkedin.png'
import iconEmail from '../assets/images/iconEmail.png'

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
			<div className='icons'>
				<a style={styles.footerStyle} href="https://www.github.com/alam2tg" title="Github"><img src={iconGithub} ></img></a>
				<a style={styles.footerStyle} href="https://www.linkedin.com/in/lam-aaron2/" title="Linkedin"><img src={iconLinkedin} ></img></a>
				<a style={styles.footerStyle} href="https://www.linkedin.com/in/lam-aaron2/" title="Email"><img src={iconEmail} ></img></a>
			</div>
		</footer>
	);
}

export default Footer;