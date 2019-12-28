import app from './app';
try {
  app.listen(3000, () => {
    console.log('ready to go!');
  });
} catch (e) {
  console.log(e);
}
