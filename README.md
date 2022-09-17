# whatAPairsII
One more attempt to create what a pairs algorithm. This time with top-down strategy

Algorithm for card creation implemented and tested. Works for nrOfSymbolsOnCard === primeNumber + 1.
Does not work for all possible instances, as does not work for example for 5 symbols on a card and 
there is a 'what a pairs' / dobble game with 5 symbols. 

There is a problem with graphics for this game, as it is extremaly difficult to find free of charge graphics in suitable number.
Best graphics would be SVG. Bot for now html symbols and plane text should do. 

As this is going to be written in pure JS without frameworks like Angular or React, now I must experiment a bit to find 
a way of writing and combining elements in pure JS.


# Planned features:
* select nr of symbols on a card (4, 6 or 8). Next possible solution is with 11 symbols, and this needs 133 symbols. Too much.
* Chose topic of the game
* Game should be easely extendable. If someone would like to use svg or some raster images instead of text ones, this should be possible to 
add such an option in a simple way.
* Some of card images should be rotated and resized, to make it more difficult to find matching symbols
* An multiuser mode on the same machine.
* Single player mode: playing with computer
* Single player mode: player finds pairs, where computer measures time
* Remember best score
