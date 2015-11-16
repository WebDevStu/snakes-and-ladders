# Snakes and Ladders Automated Game

A friends tech test the criteria was to construct a game of snakes and ladders, random throw of the dice and certain conditions to fall on a snake or on a ladder.

> The challenge is to create a tool that plays snakes and ladders on it's own, in javascript.
> You must continue to roll the dice every second till you reach position 100 exactly, you start at position 1
> If your new position after the roll divides by 9 (9, 18, 27, 36...) you landed on a snake and must move back 3 places
> If your new position after the roll is 25 or 55 you must move forward 10 places
> If your roll is near the end of the game and you do not roll enough to move exactly to 100, you do not move forward
> You must output on a new line each turns dice roll, if they landed on a snake or ladder and where their final position was
> There must be a hyphen to separate the dice roll from the position and snake/ladder verdict

To run game: 

    node game.js