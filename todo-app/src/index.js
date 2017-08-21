import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let i = 0; i<lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

class Board extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // }

    renderSquare(props, i) {
        return <Square
            value={props.value[i]}
            onClick={(i) => props.handleClick()}
        />;
    }

    // handleClick(i) {
        // const squares = this.state.squares.slice();
        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        // }
        // this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O' ;
        // this.setState({squares: squares,
        //                xIsNext: !this.state.xIsNext})
    // }

    render(props) {

        return (
            <div>
            <div className="board-row">
            {this.renderSquare(props, 0)}
        {this.renderSquare(props,1)}
        {this.renderSquare(props,2)}
    </div>
        <div className="board-row">
            {this.renderSquare(props,3)}
        {this.renderSquare(props,4)}
        {this.renderSquare(props,5)}
    </div>
        <div className="board-row">
            {this.renderSquare(props,6)}
        {this.renderSquare(props,7)}
        {this.renderSquare(props,8)}
    </div>
        </div>
    );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O' ;
        this.setState({squares: squares,
                       xIsNext: !this.state.xIsNext})
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
            <div className="game-board">
            <Board onClick={() => this.state.handleClick()}/>
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
