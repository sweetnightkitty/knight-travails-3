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
}

knightShortestPath([3, 3], [4, 3]);