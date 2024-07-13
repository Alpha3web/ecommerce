import styles from "../page.module.css";

const ToolKit = ({shortText, customClass}) => <p className={`${styles.toolKit} ${styles[customClass]}`}>{shortText}</p>

export default ToolKit;