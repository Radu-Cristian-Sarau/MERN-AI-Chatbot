import express from 'express';

const app = express();

// Register a new route

app.use(express.json());

app.delete("/user/:userid", (req, res, next) => {
  console.log(req.params.userid);
  return res.send("Hello");
});

app.listen(5000, () => console.log('Server is running on port 5000.')); // Server is running on port 5000.
