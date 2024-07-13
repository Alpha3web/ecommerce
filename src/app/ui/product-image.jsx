"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "@/app/page.module.css"

const ProductImages = () => {
    const initialImageSrc = "/images/image-product-1.jpg"
    const [displayedImage, changeDisplayedImage] = useState(initialImageSrc);

    // const handleClick = () => {

    // }

    return (
        <div className={styles.productImage}>
            <div>
                <Image alt="product image" fill src={displayedImage} priority/>
            </div>

            <ul className={styles.thumbnails}>
                <li>
                    <Image 
                        alt="product thumbnail 1" src="/images/image-product-1-thumbnail.jpg" 
                        width={50} height={50} priority 
                        onClick={() => changeDisplayedImage("/images/image-product-1.jpg")} />
                </li>
                <li>
                    <Image 
                        alt="product thumbnail 2" src="/images/image-product-2-thumbnail.jpg" 
                        width={50} height={50} priority 
                        onClick={() => changeDisplayedImage("/images/image-product-2.jpg")} />
                </li>
                <li>
                    <Image 
                        alt="product thumbnail 3" src="/images/image-product-3-thumbnail.jpg" 
                        width={50} height={50} priority 
                        onClick={() => changeDisplayedImage("/images/image-product-3.jpg")} />
                </li>
                <li>
                    <Image
                        alt="product thumbnail 4" src="/images/image-product-4-thumbnail.jpg" 
                        width={50} height={50} priority 
                        onClick={() => changeDisplayedImage("/images/image-product-4.jpg")} />
                </li>
            </ul>
        </div>
    )
}

export default ProductImages;