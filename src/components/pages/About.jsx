const styles = {
	card: {
		margin: 20,
		background: 'e8eaf6',
		fontSize: '1.4rem',
		maxWidth: '45%'

	},
	content: {
		padding: 20,
	},
	row: {
		display: 'flex',
		flexDirection: 'row'
	}
};

export default function About() {
	return (
		<div style={styles.row}>
			<div style={styles.card}>
				<h1 style={styles.content}>About Me</h1>
				<p style={styles.content}>Hi, my name is Aaron Lam! This website tells the story of my career as a developer. I first coded in June of 2023 and decided to switch careers to web development. In my past life, I worked in finance/banking. Though finance is one of my passions, I have always had the itch to use my creativity and critical thinking in my daily life. After finally giving coding a shot, I thought it was the perfect path for me. Check out my projects form the Navbar, and feel free to reach out!
				</p>
			</div>
			<div style={styles.card} id="photo">
				<img style={{
					width:'100',
					height:'100%'
				}} src="./assets/images/me-and-my-dog-2.jpg" />
			</div>
		</div>
	)	
}