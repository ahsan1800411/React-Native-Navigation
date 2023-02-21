import { useQuery } from 'react-query';
import axios from 'axios'

const fetchAllCharacters = () => {
    return axios.get(`https://rickandmortyapi.com/api/character`);
};

export const useCharacterData = () => {
    return useQuery(['fetch-character'], fetchAllCharacters);
};
const fetchSingleCharacters = (id) => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
};

export const useSingleCharacterData = (id) => {
    return useQuery(['fetch-single-character', id], () => fetchSingleCharacters(id));
};
