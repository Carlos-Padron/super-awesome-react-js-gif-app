export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dv3SqfPOzfmt9sM1alPUeGJxIfqbRsE6&q=${encodeURI(
    category
  )}&limit=10&offset=0`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
