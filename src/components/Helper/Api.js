import axios from 'axios';

export const fetchImages = async (search, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=33021488-7d929b2799fcd0a326a4e0d29&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log('first', response.data);
  return response.data;
};
