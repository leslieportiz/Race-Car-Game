# Race Car Game

    The Race Car Game is an exciting game where the aim is to reach the finish line before the enemy, with a speed of at least 100 miles per hour. 

### Game Functionalities


1. Winning the Game: 
    *If you reach the finish line, you win the game.
    *Code snippet in move.js:
    ```javascript
    //FINISH LINE
    if (y > 650) {
        window.location = "congrats.html";
    }

This calls a new HTML file called congrats.html.

2. Not Enough Fuel:
    *If you reach the finish line without enough fuel, you lose.
    *Code snippet in move.js:
    ```javascript
    if (y > 700 && percent < 100) {
        console.log("Not Enough Fuel!")
        window.location = "notEnoughFuel.html";
    }

This call a new HTML file called notEnoughFuel.html.

3. Out of Bounds:
    *If you go out of bounds from the corner, you lose.
    *Code snippet in move.js:
    ```javascript
    //OUT OF BOUND
    if (x < 50 || x > 800 || y < 50) {
        window.location = "outOfBound.html";
    }

This calls a new htmlfile called outofbound.html.
   
4. Bumping into Course Cone:
    *If you bump into the course cone, you lose.
    *Code snippet in move.js:
   ```javascript
    //BUMP CONE
    if (x >= 100 && y >= 250 && x <= 150 && y <= 300) {
        window.location = "outOfBound.html";
    }
    // Other similar conditions for bumping into course cones

This calls a new HTML file called outOfBound.html.

5. Collecting Fuel:
    *You can collect fuel power-ups to increase your speed.
    *Code snippet in move.js:
    ```javascript
    //POWER UP 1
    if (x >= 400 && y >= 220 && x <= 450 && y <= 270) {
        percent += 25
        // Code for updating fuel percentage and removing the fuel power-up
    }
    // other similar conditions for collecting fuel power ups
        
The collected fuel power-ups increase the speed of your car.

6. Speed:
    *Your speed is determined by the fuel percentage.
    *Code snippet in move.js:
    ```javascript
    // Calculation of speed based on fuel percentage
    // Speed values for different fuel percentages

Your car's speed increases with higher fuel percentages.

7. Losing the Game:
    *If the enemy reaches the finish line before you, you lose.
    *Code snippet in myEnemyNew.js:
    ```javascript
    async function moveEnemy() {
        // Code for enemy movement towards the finish line
        window.location = "lost.html";
    }

    This calls a new window called lost.html.

### HTML Pages

The game includes several HTML pages for different scenarios. Each HTML page provides a way to go back to the game.

    congrats.html: Displayed when you win the game.
    lost.html: Displayed when the enemy reaches the finish line before you.
    notEnoughFuel.html: Displayed when you reach the finish line without enough fuel.
    outOfBound.html: Displayed when you go out of bounds or bump into a course cone.
    
    To go back to the game from any of these HTML pages, click on the following link:

    ```html
    <a href="index.html">

### Issues
    Added a next level HTML called Test2.HTML.
    Level 2 shows continuity of the game but not all the functionalities.


