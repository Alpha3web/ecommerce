const Button = ({styleList, handleClick, innerText, buttonType}) => {
    return(
        <button type={buttonType} onClick={handleClick} className={styleList}>{innerText}</button>
    )
}

export default Button;