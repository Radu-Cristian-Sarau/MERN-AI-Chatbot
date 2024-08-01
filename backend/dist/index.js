import express from 'express';
const app = express();
// Middlewares
app.use(express.json());
// Connections and listeners
app.listen(5000, () => console.log('Server is running on port 5000.'));
//# sourceMappingURL=index.js.map