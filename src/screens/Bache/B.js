import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Regalo from '../../assets/WeHaveLiftOff.png';
import Roto from '../../assets/amor.svg'
import './styles.scss';

const B = (props) => {
    const {goToC,goToF} = props;
    return(
        <div
            id="B"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToC}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="BContent"
            >
                <div
                    id="I6Text"
                >
                <h1>Discusiones</h1>
                <p>
                    Siempre las hubo, muchas veces porque yo no puedo vivir
                    sin ver a mi arisca camionera. Pero la peor casi nos separa
                    dejando mi primer regalo. Prometo ir mejorando.

                </p>
                <a href={Regalo}>
                    Click Aqui
                </a>
                </div>
                <Roto
                    id="I6Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToF}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default B;