import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function PizzaList() {

    const [pizzaList, setPizzaList] = useState([]);

    const dispatch = useDispatch();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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
            <Box sx={{
                flexWrap: "wrap",
            }}
                justifyContent="center"
                alignItems="center">
                <Grid
                    container
                    rowGap={5}
                    columnGap={5}
                    alignItems="center"
                    justifyContent="center"
                    xs={12}>
                    {pizzaList.map((pizza, index) =>

                        <Item>
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
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>

                                <button onClick={() => addPizza(pizza)} >
                                    Add to Cart
                                </button>
                                <button onClick={() => removePizza(pizza)}>Remove from Cart</button>

                            </Card>
                        </Item>

                    )}
                </Grid>
            </Box>
            <Link to="customerform"><h3><button>Next ➡️</button></h3></Link>
        </>

    )
}

export default PizzaList;