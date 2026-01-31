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
let notesCollection: any;

/* server */
app.post('/api/updateNotes', async (req, res) => {
	const data = req.body;

	let result = await notesCollection.findOne({ key: data.key });

	if (result === null) {
		await notesCollection.insertOne(data);
	} else {
		await notesCollection.findOneAndUpdate({ key: data.key }, { $set: { note: data.note } });
	}

	res.end();
});

async function runServer() {
	try {
		await mongoClient.connect();
		console.log('Connected to MongoDB');

		const noteslyDB = mongoClient.db('notesly');
		notesCollection = noteslyDB.collection('notes');

		app.listen(port, () => console.log(`Server is listening on port ${port}`));
	} catch (error) {
		await mongoClient.close();
		console.log(error);
	}
}
runServer();
