/* eslint-disable no-console */
import 'dotenv/config';
import { app } from './app';

app.listen(process.env.SERVER_PORT, () => {
  console.log('🚀 Server ta On papai!');
});
