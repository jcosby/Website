import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

//Connect to MongoDB
mongoose.connect('mongodb://localhost/')

// Initialize http server
const app = express();
const router = Router();

//Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as a prefix for all API endpoints
app.use('/v1', router);


//Handle / Route
app.get('/', (req,res) =>
  res.send("Hello World!")
)

//Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
