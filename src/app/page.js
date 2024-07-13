import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./ui/navbar";
import ProductImages from "./ui/product-image";
import ProductDiscription from "./ui/product-discription";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.productGrid}>
        <ProductImages />
        <ProductDiscription />
      </div>


    </main>
  );
}
