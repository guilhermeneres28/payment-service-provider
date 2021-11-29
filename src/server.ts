import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello app is running' }));

app.listen(3333);
