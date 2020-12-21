import React from "react";
import {
  Typography,
  makeStyles,
  Container,
  Box,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  square: {
    bgcolor: "background.paper",
    margin: 2,
    fontSize: "5rem",
    width: "5rem",
    height: "5rem",
  },
}));

function Square(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.square}
        variant="contained"
        onClick={props.onClick}
        color=""
      >
        {props.value}
      </Button>
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      clicked: 0,
    };
    this.baseState = this.state;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const increase = this.state.clicked + 1;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      clicked: increase,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  getColor = () => {
    let cl = "";
    if (calculateWinner(this.state.squares)) {
      cl = "primary";
    } else if (this.state.clicked >= 9) {
      cl = "secondary";
    } else {
      cl = "initial";
    }
    return cl;
  };

  handleRestart = () => {
    this.setState(this.baseState);
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let btnmsg = "restart"
    let status;
    if (winner) {
      status = "Winner: " + winner;
      btnmsg = "New Game"
    } else if (this.state.clicked === 9) {
      status = "The Game is a tie!";
      btnmsg = "New Game"
    } else {
      status = "Turn: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div style={{ width: "100%" }}>
        <Typography variant="h3" color={this.getColor()} m={3}>
          {status}
        </Typography>
        <div margin={5}>
          <Box
            display="flex"
            bgcolor="background.paper"
          >
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Box>
          <Box
            display="flex"
            bgcolor="background.paper"
          >
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </Box>
          <Box
            display="flex"
            bgcolor="background.paper"
          >
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </Box>
        </div>
        <Box display="flex" m={5}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.handleRestart()}
            m={5}
          >
            {btnmsg}
          </Button>
        </Box>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <Container>
        <div>
            <Board />
        </div>
      </Container>
    );
  }
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;