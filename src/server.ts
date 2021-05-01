import 'reflect-metadata';
import app from './app';
import './database';

app.listen(3001, () => {
  console.log('🏃 Running Server');
});
