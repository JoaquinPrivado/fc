import React from 'react';
import ReactDOM from 'react-dom';
import FC from './screens/FelizCumple';
import MC from './screens/MiCorazon';
import LC from './screens/LapizCuchara';
import R from './screens/Robar';
import C from './screens/Cuento';
import B from './screens/Bache';
import F from './screens/Futuro';
import P from './screens/Planes';
import J from './screens/Juntos';
import TQ from './screens/TeQuiemo';
import "@babel/polyfill";
import './style.scss'


class App extends React.Component {
    

    constructor(props){
        super(props);
        const FCRef = React.createRef(); 
        const MCRef = React.createRef(); 
        const LCRef = React.createRef();
        const RRef = React.createRef();
        const CRef = React.createRef();
        const BRef = React.createRef();
        const FRef = React.createRef();
        const PRef = React.createRef();
        const TQRef = React.createRef();
        const JRef = React.createRef();
        this.state = {
            FCRef,
            MCRef,
            LCRef,
            RRef,
            CRef,
            BRef,
            FRef,
            PRef,
            TQRef,
            JRef
        }
    }

    goToFC = () =>{
        const {FCRef} = this.state;
        FCRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToMC = () => {
        const {MCRef} = this.state;
        MCRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToLC = () => {
        const {LCRef} = this.state;
        LCRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToR = () => {
        const {RRef} = this.state;
        RRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToC = () => {
        const {CRef} = this.state;
        CRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToB = () => {
        const {BRef} = this.state;
        BRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToF = () => {
        const {FRef} = this.state;
        FRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToP = () => {
        const {PRef} = this.state;
        PRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToJ = () => {
        const {JRef} = this.state;
        JRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    goToTQ = () => {
        const {TQRef} = this.state;
        TQRef.current.scrollIntoView({ behavior: 'smooth'});
    }


    render(){

        const {FCRef,MCRef,LCRef,RRef,CRef,BRef,FRef,PRef,TQRef,JRef} = this.state;

        return(
            <div>
                <div
                    ref={FCRef}
                >
                    <FC
                        goToMC = {this.goToMC}
                    />    
                </div>
                <div
                    ref={MCRef}
                >
                    <MC
                        goToFC = {this.goToFC}
                        goToLC = {this.goToLC}
                    />    
                </div>
                <div
                    ref={LCRef}
                >
                    <LC
                        goToMC = {this.goToMC}
                        goToR = {this.goToR}
                    />
                </div>

                <div
                    ref={RRef}
                >
                    <R
                        goToLC={this.goToLC}
                        goToC={this.goToC}
                    />
                </div>
                
                <div
                    ref={CRef}
                >
                    <C
                        goToR={this.goToR}
                        goToB={this.goToB}
                    />
                </div>

                <div
                    ref={BRef}
                >
                    <B
                        goToC={this.goToC}
                        goToF={this.goToF}
                    />
                </div>

                <div
                    ref={FRef}
                >
                    <F
                        goToB={this.goToB}
                        goToP={this.goToP}
                    />
                </div>

                <div
                    ref={PRef}
                >
                    <P
                        goToF={this.goToF}
                        goToJ={this.goToJ}
                    />
                </div>

                <div
                    ref={JRef}
                >
                    <J
                        goToP={this.goToP}
                        goToTQ={this.goToTQ}
                    />
                </div>

                <div
                    ref={TQRef}
                >
                    <TQ
                        goToJ={this.goToJ}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));



