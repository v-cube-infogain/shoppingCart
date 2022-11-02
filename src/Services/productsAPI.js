import axios from 'axios';

export const getAllProductsService = () => {
    return axios.get('https://dummyjson.com/products');
};

export const getProductCatergories = () => {
    return axios.get("https://dummyjson.com/products/categories");
};

export const getProductsByCatergory = (catergory) => {
    return axios.get(`https://dummyjson.com/products/category/${catergory}`);    
};



