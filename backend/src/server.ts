import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

/* dotenv */
dotenv.config();

/* express */
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* mongodb */
const url = process.env.MONGODB_URI || '';
const mongoClient = new MongoClient(url);

/* server */
app.get('/test', async (req, res) => {
	res.send('Hi from server');
});

async function runServer() {
	try {
		await mongoClient.connect();
		console.log('Connected to MongoDB');

		app.listen(port, () => console.log(`Server is listening on port ${port}`));
	} catch (error) {
		await mongoClient.close();
		console.log(error);
	}
}
runServer();
