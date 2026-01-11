import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/backend', (req, res) => {
	console.log('Hi from server!');
	res.send({ express: 'Hi from server!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
