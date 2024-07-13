"use client"

import Image from "next/image";
import Button from "./button";
import styles from "../page.module.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useState } from "react";

const ProductDiscription = () => {
    const [qty, updateQty] = useState(1);

    return (
        <div className={styles.productDiscription}>
            <p>Sneaker Company</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className={styles.price}>
                <p>$125.00<span>50%</span></p>            
                <p>$250.00</p>
            </div>         
            <div className={styles.btnContainer}>
                <div className={styles.qtyBtns}>
                    <Button
                        styleList={styles.smallBtn}
                        buttonType="button"
                        innerText={
                            <Image alt="minus icon" src="/images/icon-minus.svg" width={12} height={4} priority />
                        }
                        handleClick={() => updateQty(qty > 1? qty - 1: 1)} 
                    />
                    <span>{qty}</span>
                    <Button
                        styleList={styles.smallBtn}
                        buttonType="button"
                        innerText={
                            <Image alt="minus icon" src="/images/icon-plus.svg" width={10} height={10} priority />
                        }
                        handleClick={() => updateQty(qty + 1)} 
                    />
                </div>
                <Button
                    innerText={
                        <>  
                            <IconContext.Provider value={{className: styles.reactCart}}>
                                <HiOutlineShoppingCart />
                            </IconContext.Provider>
                            <span>Add to cart</span>
                        </>
                    } 
                    styleList={styles.largeBtn} 
                    buttonType="button" handleClick={() => console.log("Ping just added the sniker")} />
            </div>     
        </div>
    )
}

export default ProductDiscription;