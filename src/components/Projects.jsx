// Project component will be used multiple times in the Portfolio section
// Use prpops to generate each project in portfolio
// 

function List(project) {
	return (
		<li className="project-list" key={project.id}>
			<h3>{project.title}</h3>
			<a href={project.website}>Website</a>
			<a href={project.github}>Github</a>
			<img src={project.image}></img>
		</li>
	)
}
