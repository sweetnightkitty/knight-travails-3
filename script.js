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

    //Add the start vertex to queue; has no predecessor so null
    queue.push(
        {
        position: start,
        moves: 0,
        predecessor: null
        }
    );

    //Mark the starting vertex as visited
    visited[start[0], start[1]] = true;


    //BFS CONINTUES:
    while (queue.length > 0) {
        //Assign 3 variables with the x, y, moves of the first vertex in the queue respectively
        let current = queue.shift();
        let [currentX, currentY] = current.position
        let moves = current.moves;
        let predecessor = current.predecessor;
        
        //If we reached the target-end then generate a list of moves along that path
        if(currentX === end[0] && currentY === end[1]) {
            let path = [];
            let currentNode = current;

            //Reconstruct the path from the end backwards to get in order list of moves
            while(currentNode) {
                path.unshift(currentNode.position);
                currentNode = currentNode.predecessor;
            }

            //Returns the number of moves and the total path
            return {moves, path};
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
                //Add the current vertex to predecessor forming a linked list of the path
                queue.push(
                    {
                        position: [newX, newY],
                        moves: moves + 1,
                        predecessor: current
                    }
                )
            }
        }
    }
    //If no path is found
    return -1;
}

function displayResults(result) {
    console.log(`You made it in ${result.moves} moves! Here's your path:`);
    for(path of result.path) {
        console.log(`[${path}]`);
    }
}


//DRIVING CODE:
const result = knightShortestPath([3, 3], [4, 3]);
displayResults(result);