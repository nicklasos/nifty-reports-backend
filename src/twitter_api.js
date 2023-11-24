const axios = require('axios');

const request = axios.create({
  baseURL: 'https://api.twitter.com/2/users/by/username',
  headers: {
    Authorization:
      'Bearer XXX',
  },
});

async function getTwitterFollowers(username) {
  const url = `/${username}?user.fields=public_metrics`;

  const {
    data: { data },
  } = await request.get(url);

  const followersCount = data.public_metrics.followers_count;

  return followersCount;
}

module.exports = {
  getTwitterFollowers,
};
