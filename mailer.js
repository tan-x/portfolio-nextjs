const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'mail.privateemail.com',
	secure: true,
	auth: {
		type: 'login',
		user: 'tanx@tannermgriffin.com',
		pass: 't038T067@',
	},
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('server is readt to take our messages');
	}
});

const send = ({ email, name, text }) => {
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	const message = {
		from: 'Admin <admin@tannermgriffin.com>',
		to: 'tanx@tannermgriffin.com',
		subject: `New message from ${from}`,
		text,
		replyTo: from,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
	});
};

module.exports = send;
