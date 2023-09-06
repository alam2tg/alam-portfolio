// create downloadable resume link
// export default function
import AaronWebDevResume from '../styles/files/AaronWebDevResume.pdf'


export default function Resume() {
	return (
		<div>
			<div>
				<h1>Skills</h1>

			</div>
			<div className = 'alamResume'>
				<h1>		
					<a href={AaronWebDevResume} download='AaronWebDevResume.pdf'>Aaron Lam's Resume</a>
				</h1>
			</div>
		</div>
	)
}