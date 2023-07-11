import express from 'express';

const app = express();
app.use(express.json());

const port = 3002;

app.post('/log', (req, res) => {
    console.log(req.body, JSON.stringify(req.body));
    return res.send({success: true});
});

app.listen(port, () =>
    console.log(`server is listening on ${port}.`),
);