const https = require('https');

https.get('https://api.pexels.com/videos/search?query=gold+abstract&per_page=5', {
  headers: { 'Authorization': '563492ad6f917000010000018d09f7a421b14c33959b85c156d95393' } // Publicly known free key for testing
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(json.videos.map(v => v.video_files[0].link));
    } catch (e) { console.log(data); }
  });
});
