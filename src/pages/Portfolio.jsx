// add 6 active repos to portfolio
// export default function
import Projects from "../components/Projects";
import dddLogo from "../images/dddLogo.jpg"
import enDEVors from "../images/enDEVors.png"
import placeholder from "../images/placeholder.png"


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
		image: dddLogo,
		website: "https://iquiroz95.github.io/diesel-din-dance/",
		github: "https://github.com/iquiroz95/diesel-din-dance",
	},
	{
		id: 3,
		title: "Project 3 Calendar",
		description: "This application allows a team to create a shared calendar for a group/team to create events, view schedules, and schedule meetings more effectively by avoiding scheduling conflicts",
		image: placeholder,
		website: "",
		github: "https://github.com/alam2tg/Calendar-Schedule-Sync",
	},
	{
		id: 4,
		title: "Social Network API",
		description: "There is no deployed site for this project. This project was intended to test relational database concepts with MongoDB.",
		image: placeholder,
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

export default function Project() {
	return (
		<div className="ProjectsContainer">
			<div style={styles.content}>
				<h1 >
					My Projects
				</h1>
				<p style={styles.card}>
					Here is a collection of some of the projects I have worked on in my time as a developer. The goal of these projects was to apply the new skills I have learned while coding. Please feel free to reach out in the Contact section if you have any questions!
				</p>
			</div>
			<div className="ProjectsCard">
				<div className='img-container'>
                    <div className="project-image">
                        <img src={currentProject.image} alt={currentProject.title} />
                    </div>
				<ul className="project-list">
					< Projects project={project}/>
				</ul>
			</div>
		</div>
	);
}