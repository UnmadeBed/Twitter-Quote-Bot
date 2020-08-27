const Twitter = require('twitter');

// connect to twitter via api.
const client = new Twitter({
  consumer_key: 'Rl0U3Vw2Xg9Ew4nVm21li7yOi',
  consumer_secret: 'WTxQFyYnsc3ND5qUjulH6uH2VpP8SdEl4WLWpCartqbsLeWMtX',
  access_token_key: '1299065626678484993-AIFPwlioEBAynsx53MGV0p7bfSo3DP',
  access_token_secret: 'LmWlvIRN97vH0CPHQNJcnfuvdUj4pENjaP7fUaknRzVg9'
});

// pull next tweet out of spreadsheet

// send the tweet
client.post('statuses/update', { status: 'I Love Twitter' }, function (error, tweet, response) {
  if (error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

// remove quote from spreadsheet