import express from 'express';
import log from './utils/logger';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 8080;
  console.log('test');
  app.listen(port, () => {
    log.info(`application started at port ${port}`);
  });
};

main().catch(err => {
  log.error(err, 'something went wrong');
});
