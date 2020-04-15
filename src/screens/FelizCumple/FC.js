import React from 'react';
import Image from '../../assets/I1.svg';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import './style.scss';
const FC = (props) => {
    
    const {goToMC} = props;

    return (
        <div
            id="I1"
        >
            <Image
                id="I1Image"
            />
            <div
                id="textI1"
            >
            <h1>Feliz Compleaños</h1>
            <p>Perdón, despues de tu reclamo se me ocurrió la forma de darte algo
                en lo que el regalo capitalista que tanto queres puede llegar hasta
                tus manos   
            </p>
            </div>
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToMC}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default FC;