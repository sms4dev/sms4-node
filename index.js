const https = require('https');

const SMS4_HOST = 'sms4.dev';
const SMS4_SEND_ENDPOINT = '/send';

function validateInput(to, message) {
  if (!to || (typeof to !== 'string' && !Array.isArray(to))) {
    throw new Error(
      'Recepients string is invalid. Please refer to our documentation at https://sms4.dev to see correct options.',
    );
  }

  if (!message || typeof message !== 'string') {
    throw new Error(
      'Message string is invalid. Please refer to our documentation at https://sms4.dev to see correct options.',
    );
  }
}

function send(to, message, token) {
  const API_TOKEN = token || process.env.SMS4_TOKEN;

  validateInput(to, message);

  if (!API_TOKEN) {
    throw new Error(
      'SMS4 token is not defined. To fix this you have to either:\n1) Set environment variable SMS4_TOKEN\nor\n2) Pass the token as the 3rd argument to the send function.',
    );
  }

  const requestOptions = {
    hostname: SMS4_HOST,
    path: SMS4_SEND_ENDPOINT,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const requestData = JSON.stringify({
    to: Array.isArray(to) ? to.join(',') : to,
    message,
    token: API_TOKEN,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(requestOptions, res => {
      res.setEncoding('utf8');
      let body = '';

      res.on('data', chunk => {
        body = body + chunk;
      });

      res.on('data', data => {
        resolve(data);
      });
    });

    req.on('error', error => {
      reject(error);
    });

    req.write(requestData);
    req.end();
  });
}

module.exports = send;
