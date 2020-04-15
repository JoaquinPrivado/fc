import React from 'react';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import ArrowUpIcon from '../../assets/arrowUp.svg';
import Image from '../../assets/yoCorazon.svg';
import './style.scss'

const MC = (props) => {

    const {goToFC,goToLC} = props;

    return(
        <div
            id="MC"
        >
                   <div
                 className="button-scroll"
            >
                <button
                    onClick={goToFC}
                >
                        <ArrowUpIcon
                            className="up"
                        />
                </button>
            </div>

            <div
                id="MCContent"
            >
                <div
                    id="I2Text"
                >

                    <h1>  Mi Corazón </h1>
                    <p> 
                    Siguiendo con la constumbre de un poco de melosidad acá estoy yo
                    con mi corazón, de momento lo vas a ver gris, opaco, apagado, como
                    mi vida antes de conocerte.

                    </p>
                </div>
                <Image
                    id="I2Image"
                />
            </div>
        
            <div
                 className="button-scroll"
            >
                <button
                    onClick={goToLC}
                >
                        <ArrowDownIcon
                            className="down"
                        />
                </button>
            </div>
        </div>
    );
}

export default MC;