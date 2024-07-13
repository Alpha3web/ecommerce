"use client";

import Image from "next/image";
import { default as Link } from "next/link";
import styles from "@/app/page.module.css"
import CartDropBox from "./cart-dropbox";
import { useState } from "react";
import ToolKit from "./toolkit";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NavBar = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [showToolKit, setShowToolKit] = useState("hidden");
    const [showMenu, setShowMenu] = useState("mobileViewHidden");

    return (
        <nav className={styles.navBar}>
            <HiBars3 className={styles.menuIcon} onClick={() => setShowMenu("menuWrapper")}/>
            <Link href={"/"} scroll={false}>
                <Image alt="logo" src="/images/logo.svg" width={125} height={25} priority />
            </Link>
            <div className={styles[showMenu]}>
                <ul className={styles.navLinks}>
                    <HiXMark onClick={() => setShowMenu("mobileViewHidden")} size={30} className={styles.xMark}/>
                    <li><Link href={"/collections"} scroll={false}>Collections</Link></li>
                    <li><Link href={"/men"} scroll={false}>Men</Link></li>
                    <li><Link href={"/women"} scroll={false}>Women</Link></li>
                    <li><Link href={"/about"} scroll={false}>About</Link></li>
                    <li><Link href={"/contact"} scroll={false}>Contact</Link></li>
                </ul>
            </div>
            <div className={styles.profile}>
                <div>
                    <Image alt="cart" src="/images/icon-cart.svg" 
                        width={20} height={20} priority 
                        onClick={() => setIsHidden(!isHidden)}
                        onMouseEnter={() => setTimeout(() => setShowToolKit("toolKit"), 6000)}
                        onMouseLeave={() => setTimeout(() => setShowToolKit("hidden"), 6000)}
                    />
                    <ToolKit customClass={showToolKit} shortText="Cart"/>
                    <CartDropBox customClass={isHidden? styles.hidden: styles.cartBox}/>
                </div>
                <Image alt="cart" src="/images/image-avatar.png" width={35} height={35} priority />
            </div>
        </nav>
    )
}

export default NavBar;