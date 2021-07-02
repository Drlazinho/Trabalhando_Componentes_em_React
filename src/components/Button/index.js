const Button = ( {children, className,  onClick}) => {
    return(
        <button 
        type="button" 
        className={className}
        onClick = {onClick}> 
        {/* {(event) => {setValor(event.target.value + 1)}} É uma outra forma de adicionar porém é limitada/quebrada */}
            {children}
        </button>
    )
}

export default Button;