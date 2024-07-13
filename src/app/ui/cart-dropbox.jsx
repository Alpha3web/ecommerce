import styles from "../page.module.css"

const CartDropBox = ({customClass}) => {
    
    return (
        <div className={customClass} >
            <p>Cart</p>
            <div className={styles.cartItems}>
                <p>Your cart is empty.</p>
            </div>
        </div>
    )
}

export default CartDropBox;