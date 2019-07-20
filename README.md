# SMS4 NPM Module

Simple and straightforward way to send text messages. Read more on our website: [https://sms4.dev]([SMS4dev](https://sms4.dev))

## Installation

```bash
npm install sms4
```
or
```bash
yarn add sms4
```

## Usage

Our API allows you to send text messages to a single number or multiple numbers at once.

In order to use our API, you have to provide `SMS4_TOKEN`, and there are a few ways of doing it: by adding `SMS4_TOKEN` to you environment variables or by providing it explicitly as the 3rd argument to the `send` function.

### Sending message to the single number:

```javascript
const send = require('sms4');

// If you have SMS4_TOKEN in you environment variables
// you can simply call the funtion this way
send('+12345567890', 'The server is down!').then(response => {
  // See response details below
  console.log(response);
});

// Or you can specify your token explicitly
send('+12345567890', 'The server is down!', 'SMS4_TOKEN').then(response => {
  // See response details below
  console.log(response);
});
```

### Sending message to multiple numbers

The same principles apply with the only difference that you can pass an array of numbers as the first argument:

```javascript
const send = require('sms4');

// If you have SMS4_TOKEN in you environment variables
// you can simply call the funtion this way
send(['+12345567890', '+12345567891'], 'The server is down!').then(response => {
  // See response details below
  console.log(response);
});
```

### Response object

The `send` function returns a promise that resolves to the following object:

In case if messages sent successfully:

```json
{
  success: true,
  total: 0.014, // Total for all messages
  result: [{    // Details about each message
    number: "+12323232322",
    rate: 0.007,
    region: "US",
    isSent: true
  }, {
    number: "+12323232323",
    rate: 0.007,
    region: "US",
    isSent: true
  }]
}
```

And if delivery is failed:
```json
{
  success: false,
  error: {
    code: 404,
    message: "Can not find token with value 63...3d"
  }
}
```

## License

[MIT License](LICENSE)

