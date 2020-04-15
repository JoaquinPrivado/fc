import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Corazon from '../../assets/corazon1.svg';
import Image3 from '../../assets/imagen.jpeg';
import './style.scss'

const R = (props) =>{
    const {goToLC,goToC} = props;

    return(
        <div
            id="R"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToLC}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="RContent"
            >
                <div
                    id="I4Text"
                >
                <h1>Cuando te volviste importante para mi</h1>
                <p>
                    Ya pasaron tres años de mi primer ataque depre. 
                    Cuando, pese a llevar poco tiempo de conocerte, me dijiste
                    una de las cosas mas dulces. En la practica no me tenes tanta 
                    paciencia pero lo cumpliste y te quiemo por eso.
                </p>
                <a href={Image3}>
                    Click Aqui
                </a>
                </div>
                <Corazon
                    id="I4Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToC}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default R;