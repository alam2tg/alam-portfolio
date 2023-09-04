// add 6 active repos to portfolio
// export default function
import Projects from '../components/Projects';

const projectData = [
	{
		id: 1,
		title: '',
		website: '',
		github: '',
	},
	{
		id: 2,
		title: '',
		website: '',
		github: '',
	},
	{
		id: 3,
		title: '',
		website: '',
		github: '',
	},
	{
		id: 4,
		title: '',
		website: '',
		github: '',
	},
	{
		id: 5,
		title: '',
		website: '',
		github: '',
	},
	{
		id: 6,
		title: '',
		website: '',
		github: '',
	},
]

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
			<div>
				<ul className="project-list">
					return< Projects projectData={projectData}/>
				</ul>
			</div>
		</div>
	);
}