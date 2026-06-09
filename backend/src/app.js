import express from "express";
const app = express();

import userRoute from './routes/userroute.js';
app.use('/api/users', userRoute);

export default app;