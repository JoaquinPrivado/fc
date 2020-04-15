import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Flores from '../../assets/flores.svg';
import './style.scss'

const F = (props) => {
    const {goToB,goToP} = props;
    return(
        <div
            id="F"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToB}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="FContent"
            >
                <div
                    id="I7Text"
                >
                <h1>Futuro</h1>
                <p>
                    Esas cosas ya pasaron. Ahora viene el futuro.
                    Un futuro lleno de aventuras, claro, cuando termine la pandemia.
                    Un futuro donde al fin estes tranquila y seas feliz.

                </p>
                </div>
                <Flores
                    id="I7Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToP}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default F;