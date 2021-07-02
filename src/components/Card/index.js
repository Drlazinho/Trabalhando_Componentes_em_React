import  { useState } from 'react';
import Button  from '../Button';
const Card = () => {
    
    const [valor, setValor] = useState(24)

    function Adicionar (){
        setValor(valor + 1)
    }
    function Remover (){
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu Primero Card
            </div>
            <div className="card-body">

                {/* Forma de dentação padrão do React */}
                <button 
                    className="btn btn-success" 
                    onClick = {Adicionar}
                > 
                    {/* {(event) => {setValor(event.target.value + 1)}} É uma outra forma de adicionar porém é limitada/quebrada */}
                        Adicionar
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick = {Remover}
                > 
                        Remover
                </button>       
                
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;