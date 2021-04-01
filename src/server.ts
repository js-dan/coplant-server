import app from './app';
import 'reflect-metadata';
import './database';

app.listen(3001, () => {
  console.log('🏃 Running Server');
});
