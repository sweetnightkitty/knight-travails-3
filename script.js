//Main factory function 'knightMoves' in Odin Assignment
function knightShortestPath(start, end) {
    
    //Define the possible moves a knight can take (8 total);
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    //Checks if the position is within bounds of the 8x8 board
    function isInBounds(x, y) {
        return x >= 0 && x < 8 && y >=0 && y < 8;
    }

    //Initialize BFS with a queue, and way to track visited vertices
    let queue = [];
    let visited = Array.from({length: 8}, ()=> Array(8).fill(false));

    //----------------------------------------------------------------------

    //BFS BEGINS:

    //Add the start vertex to queue and mark it as visited
    queue.push([start[0], start[1], 0]) //[x, y, moves];
    visited[start[0], start[1]] = true;

    //BFS CONINTUES:
    while (queue.length > 0) {
        //Assign 3 variables with the x, y, moves of the first vertex in the queue respectively
        let [currentX, currentY, currentMoves] = queue.shift();
        
        //If we reached the target-end then return the # of moves in that path
        if(currentX === end[0] && currentY === end[1]) {
            return currentMoves;
        }

        //Calculate all possible moves from the currentX/Y location
        for(let [moveX, moveY] of knightMoves) {
            let newX = currentX + moveX;
            let newY = currentY + moveY;

            //If the new position is within bounds and hasn't been visited
            if(isInBounds(newX, newY) && !visited[newX][newY]) {
                //mark it visited
                visited[newX][newY] = true;
                //Add to queue and increase moves by 1 to reperesent a new level
                queue.push([newX, newY, currentMoves + 1]);
            }
        }
    }
}

knightShortestPath([3, 3], [4, 3]);