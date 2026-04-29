import fs from 'fs';

async function fetchLogos() {
  try {
    const latlonHtml = await fetch('http://www.latlontechnologies.com').then(r => r.text());
    const latlonMatch = latlonHtml.match(/src="([^"]*(?:logo|Latlon)[^"]*\.(?:png|jpg|jpeg|svg|webp))"/i);
    console.log("Latlon:", latlonMatch ? latlonMatch[1] : null);

    const fortuneHtml = await fetch('https://www.fortunepandiyanhotel.com/').then(r => r.text());
    const fortuneMatch = fortuneHtml.match(/src="([^"]*(?:logo|fortune)[^"]*\.(?:png|jpg|jpeg|svg|webp))"/i);
    console.log("Fortune:", fortuneMatch ? fortuneMatch[1] : null);
  } catch (e) {
    console.error(e);
  }
}
fetchLogos();
