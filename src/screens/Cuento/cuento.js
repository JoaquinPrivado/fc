import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Story from '../../assets/ella.svg';
import cuent from '../../assets/cuent.pdf';
import './style.scss';

const C = (props) => {
    const {goToR,goToB} = props;

    return(
        <div
            id="C"
        >
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToR}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <div 
                id="CContent"
            >
                <div
                    id="I5Text"
                >
                <h1>El primer relato</h1>
                <p>
                    La pequeña parte de mi que ya practicamente murió
                    Cuando todavía podias bromear con encerrarme en un
                    sotano para que viva escribiendo cosas para darte
                </p>
                <a href={cuent}>
                    Click Aqui
                </a>
                </div>
                <Story
                    id="I5Image"
                />
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToB}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default C;