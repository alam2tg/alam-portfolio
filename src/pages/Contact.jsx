import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleInputChange = e => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, username, and password
		if (inputType === 'name') {
			setName(inputValue);
		} else if (inputType === 'email') {
			setEmail(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		if(name === '' || email === '' || message === '') {
			alert('Please fill in all fields');
		}
	}

	return (
		<div className="contact-container">
			<div className="contact-form">
				<h1>
					Contact Form
				</h1>
				<form className="form" onSubmit={handleFormSubmit}>
					<input
						value={name}
						name="name"
						onChange={handleInputChange}
						// onChange={orThisWayForBoth}
						type="text"
						placeholder="Name"
					/>
					<input
						value={email}
						name="lastName"
						onChange={handleInputChange}
						// onChange={orThisWayForBoth}
						type="text"
						placeholder="Email"
					/>
					<input
						value={message}
						name="message"
						onChange={handleInputChange}
						// onChange={orThisWayForBoth}
						type="text"
						placeholder="Type your message here"
					/>

					<button type="submit" style={{
								width:'50%',
								height:'50%',
								justifyContent: 'center'}}>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact;