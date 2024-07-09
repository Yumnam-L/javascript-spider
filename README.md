# Tic-Tac-Toe Game

A web-based Tic-Tac-Toe game build using vanilla javascript, css and html with additional features including timed moves and dynamic grid expansion.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Development](#development)

## Features

- **Standard Tic-Tac-Toe Gameplay**: Two players take turns marking spaces in a 3x3 grid.
- **Timed Moves**: Each player has 10 seconds to make their move, adding pressure and excitement.
- **Dynamic Grid**: The grid can expand to 4x4 or 5x5 during the game, adding complexity and new strategies.
- **Responsive Design**: The game adapts to different screen sizes and devices.

## Usage

1. Open `index.html` in your preferred web browser.
2. The game will start with a 3x3 grid by default.
3. Players take turns clicking on the grid cells to mark their move.
4. The game indicates whose turn it is and displays a timer for each move.
5. To change the grid size during the game, press the keys `3`, `4`, or `5` on your keyboard:
    - `3` for a 3x3 grid
    - `4` for a 4x4 grid
    - `5` for a 5x5 grid
6. Click the "Reset Game" button to restart the game at any time.

## Game Rules

- Players alternate turns, marking an empty cell in the grid.
- The first player to mark three consecutive cells in a row, column, or diagonal (or four/five consecutive cells in larger grids) wins the game.
- If all cells are marked and no player has won, the game is declared a draw.
- Each player has 10 seconds to make their move. If the timer runs out, the turn automatically switches to the other player.

## Development

### HTML Structure

- The HTML file (`index.html`) contains the structure of the game, including the game container, grid container, and reset button.

### CSS Styling

- The CSS file (`styles.css`) provides styling for the game elements, ensuring the grid cells are properly displayed and the game looks nice.

### JavaScript Logic

- The JavaScript file (`script.js`) handles:
    - Creation of the game grid based on the selected grid size.
    - Management of the game state, checking for win conditions or a draw.
    - Implementation of the timer for each player's move.
    - Handling of grid size changes based on keyboard input.

### Event Listeners

- `DOMContentLoaded`: Initializes the game by creating the grid and starting the timer.
- `click`: Handles cell clicks, updating the game state and checking for win conditions.
- `keydown`: Changes the grid size dynamically based on user input.
- `reset-btn`: Resets the game.

