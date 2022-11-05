import * as React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';

const Cart = () => {
    const { products } = useSelector(state => state.cart);
    let price = null;
    products.forEach(product => {
        price += product.price;
    });

    return (
        <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Table sx={{ width: "80%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Image</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Product Description</TableCell>
                        <TableCell align="right">Product Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={row.thumbnail} width="100px" height="100px" />
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">RS: {row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Total Price: {price}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default Cart;
