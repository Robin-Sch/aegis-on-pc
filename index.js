const { generateToken } = require('authenticator');
const { readFileSync } = require('fs');
const prompts = require('prompts');

try {
	(async () => {
		const json = JSON.parse(readFileSync('aegis.json', 'utf8'));
		const codes = json.db.entries;

		let message = '';
		for(let i = 0; i < codes.length; i++) {
			const current = codes[i];
			message += `${i+1}: ${current.issuer} (${current.name})\n`
		}

		const response = await prompts({
			type: 'number',
			name: 'answer',
			message,
		})

		const index = response.answer - 1;
		const token = generateToken(codes[index].info.secret);
		return console.log(token);
	})()
} catch (err) {
	console.log(`Error: ${err}`)
}
