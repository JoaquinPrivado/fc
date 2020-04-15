import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import World from '../../assets/world.svg';
import './style.scss'

const P = (props) => {

    const {goToF, goToJ} = props;

    return(
        <div
            id="P"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToF}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="PContent"
            >
                <div
                    id="I8Text"
                >
                <h1>Planes</h1>
                <p>
                   Que es el futuro sin planes. Un mundo por recorrer.
                   Un mundo fuera de este pais horrible y tercermundista.
                   Un mundo que podemos recorrer juntos, cuando podamos superar 
                   la pobreza.

                </p>
                </div>
                <World
                    id="I8Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToJ}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default P;