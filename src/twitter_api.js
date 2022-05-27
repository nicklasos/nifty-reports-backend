const axios = require('axios');

const request = axios.create({
	baseURL: 'https://api.twitter.com/2/users/by/username',
	headers: {
		'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALUvdAEAAAAAL0%2FHGAFZEqfiVOW4e2hNLvF%2FBO0%3DrDdt6x4HFIRE8fk4P87E4tH2q5IqUGXrPjj6ZUXOhbdPMPhDll',
	}
});

async function getTwitterFollowers(username) {
	const url = `/${username}?user.fields=public_metrics`
  
	const { data: {data} } = await request.get(url);
  
  const followersCount = data.public_metrics.followers_count
 
	return followersCount;
}

module.exports = {
	getTwitterFollowers,
}