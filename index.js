import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            lastOp: 'clr',
            decBreak: true,
            opSwitch: '',
        }
        this.numberHandler = this.numberHandler.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
        this.operatorHandler = this.operatorHandler.bind(this);
        this.decimalHandler = this.decimalHandler.bind(this);
    }
    numberHandler(e) {
        if (this.state.display === '0') {
            this.setState({
                display: (e.target.innerHTML.toString()),
                lastOp: 'num'
            })
        }
        else {
            this.setState({
                display: (this.state.display + e.target.innerHTML.toString()),
                lastOp: 'num'
            })
        }
    }
    clearHandler() {
        this.setState({
            display: '0',
            lastOp: 'clr',
            decBreak: true
        })
    }
    operatorHandler(e) {
        switch(this.state.lastOp) {
            case 'add':
                this.setState({
                    display: (this.state.opSwitch + ' ' + e.target.innerHTML.toString() + ' '),
                    lastOp: e.target.id,
                    decBreak: true
                })
                break;
            case 'subtract':
                this.setState({
                    display: (this.state.opSwitch + ' ' + e.target.innerHTML.toString() + ' '),
                    lastOp: e.target.id,
                    decBreak: true
                })
                break;
            case 'multiply':
                this.setState({
                    display: (this.state.opSwitch + ' ' + e.target.innerHTML.toString() + ' ' ),
                    lastOp: e.target.id,
                    decBreak: true
                })
                break;
            case 'divide':
                this.setState({
                    display: (this.state.opSwitch + ' ' + e.target.innerHTML.toString() + ' '),
                    lastOp: e.target.id,
                    decBreak: true
                })
                break;
            default: 
                this.setState({
                    opSwitch: this.state.display,
                    display: (this.state.display + ' ' + e.target.innerHTML.toString() + ' '),
                    lastOp: e.target.id,
                    decBreak: true
                })
                break;
        }
    }
    decimalHandler() {
        if (this.state.decBreak) {
            if (this.state.lastOp === 'num' || this.state.lastOp === 'clr') {
                this.setState({
                    display: (this.state.display + '.'),
                    lastOp: 'dec',
                    decBreak: false
                })
            }
            else {
                this.setState({
                    display: (this.state.display + '0.'),
                    lastOp: 'dec',
                    decBreak: false
                })
            }
        }
    }
    render() {
        return (
            <div id = 'calcWrapper'>
                <div id = 'display'>
                    { this.state.display }
                </div>
                <button id = 'equals'>
                =
                </button>
                <button id = 'zero' className = 'numbers' onClick = { this.numberHandler }>
                0
                </button>
                <button id = 'one' className = 'numbers' onClick = { this.numberHandler }>
                1
                </button>
                <button id = 'two' className = 'numbers' onClick = { this.numberHandler }>
                2
                </button>
                <button id = 'three' className = 'numbers' onClick = { this.numberHandler }>
                3
                </button>
                <button id = 'four' className = 'numbers' onClick = { this.numberHandler }>
                4
                </button>
                <button id = 'five' className = 'numbers' onClick = { this.numberHandler }>
                5
                </button>
                <button id = 'six' className = 'numbers' onClick = { this.numberHandler }>
                6
                </button>
                <button id = 'seven' className = 'numbers' onClick = { this.numberHandler }>
                7
                </button>
                <button id = 'eight' className = 'numbers' onClick = { this.numberHandler }>
                8
                </button>
                <button id = 'nine' className = 'numbers' onClick = { this.numberHandler }>
                9
                </button>
                <button id = 'add' className = 'operators' onClick = { this.operatorHandler }>
                +
                </button>
                <button id = 'subtract' className = 'operators' onClick = { this.operatorHandler }>
                -
                </button>
                <button id = 'multiply' className = 'operators' onClick = { this.operatorHandler }>
                *
                </button>
                <button id = 'divide' className = 'operators' onClick = { this.operatorHandler }>
                /
                </button>
                <button id = 'decimal' onClick = { this.decimalHandler }>
                .
                </button>
                <button id = 'clear' onClick = { this.clearHandler }>
                C
                </button>
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<Calculator />, rootDiv)