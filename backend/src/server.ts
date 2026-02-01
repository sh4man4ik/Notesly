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
app.post('/api/getNotes', async (req, res) => {
	let data = req.body;

	let result = await notesCollection.findOne({ key: data.key });

	if (result !== null) {
		res.send(result);
	} else {
		res.end();
	}
});

app.post('/api/updateNotes', async (req, res) => {
	let data = req.body;

	let result = await notesCollection.findOne({ key: data.key });

	if (result === null) {
		await notesCollection.insertOne(data);
	} else {
		await notesCollection.findOneAndUpdate({ key: data.key }, { $set: { note: data.note } });
	}

	res.end();
});

app.post('/api/remakeKey', async (req, res) => {
	let data = req.body;

	await notesCollection.findOneAndUpdate({ key: data.oldKey }, { $set: { key: data.newKey } });

	res.end();
});

app.get('/', (req, res) => {
	res.send('Express launched');
});

async function runServer() {
	try {
		await mongoClient.connect();
		let noteslyDB = mongoClient.db('notesly');
		notesCollection = noteslyDB.collection('notes');
		console.log('Connected to MongoDB');

		app.listen(port, () => console.log(`Server is listening on port ${port}`));
	} catch (error) {
		await mongoClient.close();
		console.log(error);
	}
}
runServer();
