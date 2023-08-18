import { useSelector } from "react-redux"

function Header() {
    const cartTotal = useSelector(state => state.cartTotal);

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <p>Cart Total: {cartTotal}</p>
        </header>
    )
}

export default Header