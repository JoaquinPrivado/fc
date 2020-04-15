import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import LapizCuchara from '../../assets/cucharaLapiz.svg'
import './style.scss';

const LC = (props) => {
    
    const {goToMC,goToR} = props;

    return(
        <div
            id="LC"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToMC}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="LCContent"
            >
                <div
                    id="I3Text"
                >
                <h1>El Lapiz y la cuchara</h1>
                <p>
                    Como olvidar el día en que esta diosa despampanante
                    intento prevenir que este pobre miserable coma su postre
                    con un triste tenedor. O el día que la vi, desesperada antes 
                    de entrar a su primer examen de matematica sin un lapiz,
                    y no puede evitar ir al rescate. El principio de todo.
                </p>
                </div>
                <LapizCuchara
                    id="I3Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToR}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default LC;