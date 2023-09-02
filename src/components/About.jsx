const styles = {
	card: {
		margin: 20,
		background: 'e8eaf6',
		fontSize:'1.4rem'
	},
	content: {
		padding: 20,
	},
};

export default function AboutMe() {
	return (
		<div style={styles.card}>
			<h1 style={styles.content}>About Me</h1>
			<p style={styles.content}>Hi, my name is Aaron Lam! This website tells the story of my career as a developer. I first coded in June of 2023 and decided to switch careers to web development. In my past life, I worked in finance/banking. Though finance is one of my passions, I have always had the itch to use my creativity and critical thinking in my daily life. After finally giving coding a shot, I thought it was the perfect path for me. Check out my projects form the Navbar, and feel free to reach out!
			</p>
		</div>
	)}