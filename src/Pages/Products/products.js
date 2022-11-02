import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Product from '../../Components/product';
import { getAllProductsService, getProductCatergories, getProductsByCatergory } from '../../Services/productsAPI';


const Products = () => {
    const [productsList, setProductsList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        getAllProductsService()
            .then(res => {
                setProductsList(res.data.products);
            });
    }, []);

    useEffect(() => {
        getProductCatergories()
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            getProductsByCatergory(selectedCategory).then(res => {
                setProductsList(res.data.products);
            });
        }
    }, [selectedCategory]);

    return (
        <div className='products'>
            <Grid container spacing={1}>
                {categories.map(item => {
                    return (
                        <Grid item xs={2}>
                            <span className="catergory" onClick={() => setSelectedCategory(item)}>
                                {item}
                            </span>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid container spacing={2}>
                {productsList.map(product => {
                    return (
                        <Grid item xs={3}>
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>

        </div>
    )
};

export default Products;