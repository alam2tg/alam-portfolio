// add 6 active repos to portfolio
// export default function
import { useState } from 'react'
import dieselDinDance from "../assets/images/diesel-din-dance.jpg"
import enDEVors from "../assets/images/enDEVors.png"
import placeholder from "../assets/images/placeholder.png"
import socialNetwork from "../assets/images/gif-social-network.gif"
import blackjack from "../assets/images/Blackjack.png"

export default function Portfolio() {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const styles = {
		card: {
			margin: 20,
			background: "e8eaf6",
			fontSize:"1.4rem"
		},
		content: {
			padding: 20,
		},
	};

	const project = [
		{
			id: 1,
			title: "EnDEVors",
			description: "",
			image: enDEVors,
			website: "https://endevor-3d604fa0490c.herokuapp.com/",
			github: "https://github.com/ssherp/EnDEVor",
		},
		{
			id: 2,
			title: "Specialized Fuel Locator",
			description: "This application searches for nearby gas stations by Zip Code and fuel type to return a list of nearby gas stations with their address",
			image: dieselDinDance,
			website: "https://iquiroz95.github.io/diesel-din-dance/",
			github: "https://github.com/iquiroz95/diesel-din-dance",
		},
		{
			id: 3,
			title: "Blackjack Card Counter",
			description: "This application allows a team to create a shared calendar for a group/team to create events, view schedules, and schedule meetings more effectively by avoiding scheduling conflicts",
			image: placeholder,
			website: "https://dashboard.heroku.com/apps/blackjack-card-counter-2023",
			github: "https://github.com/alam2tg/Card-Counting-Blackjack",
		},
		{
			id: 4,
			title: "Social Network API",
			description: "There is no deployed site for this project. This project was intended to test relational database concepts with MongoDB.",
			image: socialNetwork,
			website: "https://github.com/alam2tg/social-network-api",
			github: "https://github.com/alam2tg/social-network-api",
		},
		{
			id: 5,
			title: "Reverse Skull Key",
			description: "This application is a simple password generator that uses window prompts to accept",
			image: placeholder,
			website: "https://alam2tg.github.io/reverse-skull-key/",
			github: "https://github.com/alam2tg/reverse-skull-key",
		},
		{
			id: 6,
			title: "Aaron's Time Capsule",
			description: "My first personal website using HTML, CSS, and Flexbox",
			image: placeholder,
			website: "https://alam2tg.github.io/alamtimecapsule/",
			github: "https://github.com/alam2tg/alamtimecapsule",
		},
	]


	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
  };

  const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? project.length - 1 : prevIndex - 1
		);
  };

  const currentProject = project[currentIndex];

	return (
		<div className="projects-container carousel">
			<div style={styles.content}>
				<h1 >
					My Projects
				</h1>
				<p style={styles.card}>
					Here is a collection of some of the projects I have worked on in my time as a developer. The goal of these projects was to apply the new skills I have learned while coding. Please feel free to reach out in the Contact section if you have any questions!
				</p>
			</div>
			<h3 className="project-title">{currentProject.title}</h3>
			<div className="carousel-buttons">
            <button onClick={prevSlide}> ← </button>
            <button onClick={nextSlide}> → </button>
         </div>
			
			<div className="project-card">

				<div className="img-container">
					<div className="project-image">
						<img src={currentProject.image} alt={currentProject.title} 
						style={{
							width:'50%',
							maxHeight: '50vh',
							justifyContent: 'center'
						}}/>
					</div>
				</div>
				<div className="links" id="links-container">
					<button>
						<a href={currentProject.github}><strong>Github Repo</strong></a>
					</button>
					<button>
						<a href={currentProject.website}><strong>Website</strong></a>
					</button>
				</div>
			</div>
		</div>
	);
}
