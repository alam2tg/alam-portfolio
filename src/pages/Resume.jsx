// create downloadable resume link
// export default function
import AaronWebDevResume from '../styles/files/AaronWebDevResume.pdf'


export default function Resume() {
	return (
		<div>
			<h1>Resume</h1>
			<p>Please click the link below to view a downloadable copy of my resume!</p>
			<h3>AARON LAM </h3>
			<h3>Web Developer</h3>

			<a href={AaronWebDevResume} download='AaronWebDevResume.pdf'>Download Here!</a>

		</div>
	)
}