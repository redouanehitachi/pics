import axios from "axios";
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID uBxpbQDUOrONjB0O6Y4vwV78mM-NPJw2vv3XerSaVi0'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};
export default searchImages;