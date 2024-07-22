export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7JdRpgPr7cMfns4tjwTV2lDVg083GCvf&q=${category}&limit=20`;
  const result = await fetch(url);
  const { data } = await result.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
