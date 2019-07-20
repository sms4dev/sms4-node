const send = require('./index');

/**
 * If you have SMS4_TOKEN as an environment variable,
 * you can call the send function without specifying
 * the token explicitly
 */
send('+12323232322', 'Hello!').then(result => {
  // Result response sample:
  // {
  //   success: true,
  //   total: 0.01,
  //   result: [{
  //       number: "+12323232322",
  //       rate: 0.005,
  //       region: "US",
  //       isSent: true
  //   }]
  // }
  console.log(result);
});

/**
 * You can also specify your token explicitly
 * and pass it as a third argument for the
 * send function.
 */
send('+12323232322', 'Hello!', '63...3d').then(result => {
  // Result example see above
  console.log(result);
});

/**
 * In order to send a message to multiple senders,
 * simply pass an array as a first argument
 */
send(['+12323232322', '+12323232323'], 'Hello!').then(result => {
  // Result response sample:
  // {
  //   success: true,
  //   total: 0.014,
  //   result: [{
  //       number: "+12323232322",
  //       rate: 0.007,
  //       region: "US",
  //       isSent: true
  //   }, {
  //       number: "+12323232323",
  //       rate: 0.007,
  //       region: "US",
  //       isSent: true
  //   }]
  // }
  console.log(result);
});
