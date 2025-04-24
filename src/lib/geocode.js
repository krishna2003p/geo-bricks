export async function geocodeLocation(location) {
    const apiKey = process.env.POSITIONSTACK_API_KEY;
    const res = await fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${encodeURIComponent(location)}`);
    const json = await res.json();
    const coords = json.data?.[0];
    return coords ? { latitude: coords.latitude, longitude: coords.longitude } : { latitude: 0, longitude: 0 };
  }