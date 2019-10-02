class TicTacToe {
    constructor() {
        this.field = Array(9).fill('-');
        this.symbol = true;
        this.fieldState = {
            winner: false,
            winnerSymbol: '-',
            optionsLeft: 9
        };
    }

    getCurrentPlayerSymbol() {
        if (this.symbol) {
            return 'x'
        } else {
            return 'o'
        }
    }

    nextTurn(rowIndex, columnIndex) {
        const ndx = rowIndex * 3 + columnIndex;
        if (this.field[ndx] === '-') {
            this.symbol ? this.field[ndx] = 'x' : this.field[ndx] = 'o';
            this.symbol = !this.symbol;
            this.checkField();
        }
    }

    checkField() {
        const optionsLeft = this.field.filter(el => el === '-').length;
        this.fieldState.optionsLeft = optionsLeft;

        if (!this.fieldState.winner) {

            const patterns = [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]

            for (let p of patterns) {
                const isWinner = (this.field[p[0]] === this.field[p[1]]) && (this.field[p[0]] === this.field[p[2]]) && (this.field[p[0]] !== '-');
                if (isWinner) {
                    this.fieldState.winner = true;
                    this.fieldState.winnerSymbol = this.field[p[0]];
                    break;
                }
            }
        }
    }

    isFinished() {
        return this.fieldState.winner || (this.fieldState.optionsLeft === 0);
    }

    getWinner() {
        if (this.fieldState.winnerSymbol !== '-') {
            return this.fieldState.winnerSymbol;
        } else {
            return null;
        }
    }

    noMoreTurns() {
        if (this.fieldState.optionsLeft === 0) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if ((this.fieldState.optionsLeft === 0) && !this.fieldState.winner) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        const ndx = rowIndex * 3 + colIndex;
        if (this.field[ndx] === '-') {
            return null;
        }
        else {
            return this.field[ndx];
        }
    }
}

module.exports = TicTacToe;
