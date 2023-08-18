import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { Start } from "@mui/icons-material";


function Header() {
    const cartTotal = useSelector(state => state.cartTotal);

    return (
        <header className='App-header'>
            <Stack direction="row" justifyContent="space-between">
                <h1 className='App-title' >Pete's-a-Party & Sam-wiches</h1>
                <Box>Cart Total: {cartTotal}
                <Link to="customerform">
                    <IconButton color="success">
                        <ShoppingCartCheckoutIcon />
                    </IconButton>
                </Link>
                </Box>
            </Stack>


        </header>


    )
}

export default Header