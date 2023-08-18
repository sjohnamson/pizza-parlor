import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function PizzaList() {

    const [pizzaList, setPizzaList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => { fetchPizzas() }, []);

    const fetchPizzas = () => {
        axios.get('/api/pizza')
            .then(response => {
                setPizzaList(response.data)
            }).catch((error) => {
                console.log('fetch failed:', error);
            })
    }

    const addPizza = (pizza) => {
        console.log('addpizza: ', pizza.price)
        dispatch({ type: 'ADD_COST', payload: pizza.price });
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }

    const removePizza = (pizza) => {

        dispatch({ type: 'REMOVE_COST', payload: pizza.price });
        dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
    }

    return (
        <>
            <h1>Select Your Pizzas!</h1>
            <hr />
                <Grid
                    container
                    rowGap={5}
                    columnGap={5}
                    alignItems="center"
                    justifyContent="center"
                    xs={12}>
                    {pizzaList.map((pizza, index) =>

                        <Card sx={{ width: 300 }} key={index}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={pizza.image_path}
                                title={pizza.name}
                            />
                            <CardContent
                                sx={{ height: 200 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pizza.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" component="div">
                                    {pizza.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pizza.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-evenly' }}>
                                <Button onClick={() => addPizza(pizza)} variant="contained" color="success" endIcon={<AddShoppingCartIcon />}>
                                    Add
                                </Button>
                                <Button onClick={() => removePizza(pizza)} variant="contained" color="error" endIcon={<RemoveShoppingCartIcon />}>
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>

                    )}
                </Grid>
        </>

    )
}

export default PizzaList;