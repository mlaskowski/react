function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    handleClick(i) {
        const squares = this.props.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.props.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
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
        const squares = this.props.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.state.history[0].squares}
                        onClick={this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for(let i = 0; i<lines.length; i++){
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//
//     return null;
// }
//
// class Board extends React.Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         squares: Array(9).fill(null),
//     //         xIsNext: true,
//     //     };
//     // }
//
//     renderSquare(props) {
//         return <Square
//             value={props.value}
//             onClick={() => props.handleClick()}
//         />;
//     }
//
//     // handleClick(i) {
//         // const squares = this.state.squares.slice();
//         // if (calculateWinner(squares) || squares[i]) {
//         //     return;
//         // }
//         // this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O' ;
//         // this.setState({squares: squares,
//         //                xIsNext: !this.state.xIsNext})
//     // }
//
//     render() {
//         {items.map(item => <ObjectRow key={item.id} name={item.name} />)}
//         return (
//             <div>
//             <div className="board-row">
//             {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//     </div>
//         <div className="board-row">
//             {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//     </div>
//         <div className="board-row">
//             {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//         {this.renderSquare(this.props)}
//     </div>
//         </div>
//     );
//     }
// }
//
// class Game extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null),
//             }],
//             xIsNext: true,
//         };
//     }
//     handleClick(i) {
//         console.log(i)
//         const squares = this.state.history[0].squares.slice();
//         console.log(squares)
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O' ;
//         this.setState({squares: squares,
//                        xIsNext: !this.state.xIsNext})
//     }
//     render() {
//         const winner = calculateWinner(this.state.history[0].squares);
//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }
//
//         return (
//             <div className="game">
//             <div className="game-board">
//             <Board handleClick={() => this.handleClick()} value={9}/>
//             </div>
//             <div className="game-info">
//             <div>{status}</div>
//             <ol>{/* TODO */}</ol>
//             </div>
//             </div>
//         );
//     }
// }
//
// // ========================================
//
// ReactDOM.render(
// <Game />,
//     document.getElementById('root')
// );
