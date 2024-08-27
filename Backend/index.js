import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config({path:"Backend/.env"});

const PORT = process.env.PORT || 3000;  // Try using a different port

app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
