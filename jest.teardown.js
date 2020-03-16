const execa = require('execa');

module.exports = async () => {
  await execa('docker-compose', ['down']);
};
