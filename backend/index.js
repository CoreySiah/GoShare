import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('B2B Collab API is up and running');
});

app.get('/help', (req, res) => {
    res.send('Help');
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
