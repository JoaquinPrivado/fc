import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Juntos from '../../assets/juntos.svg';
import './style.scss'

const J = (props) => {

    const {goToP,goToTQ} = props;

    return(
        <div
            id="J"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToP}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="JContent"
            >
                <div
                    id="I10Text"
                >
                <h1>Juntos</h1>
                <p>
                    Sabes que no soy fan de las relaciones a distancias, que mi sueño 
                    humedo es tenerte a lo maximo a cinco cuadras de distancia, pero 
                    siempre me vas a tener, siempre te voy a querer.

                </p>
                </div>
                <Juntos
                    id="I10Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToTQ}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default J;