import React from 'react';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Corazon from '../../assets/corazon.svg';
import './style.scss'
const TQ = (props) => {
    const {goToJ} = props;
    return(
        <div
            id="TQ"
        >
            <div
                 className="button-scroll"
            >
                <button
                   onClick={goToJ}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>
            <Corazon
                id="I9Image"
            />
            <h1 className="final">Te Quiemo, Te Quiero</h1>
            <h1 className="final">Te Amo, Te Adoro</h1>
        </div>
    );
}

export default TQ;