// given a directed graph and two nodes S and E, design an algorithm to find whether there is a route from S to E

// inputs: a graph, a node S and a node E
// output: a boolean, representing whether or not there is a route between S and E in the graph

// breadth first search will minimize computation if there is a route

// if there's a route, I find it and immediately return true
// if there isn't a route, eventually, I run out of nodes that I haven't seen on either the S process or the E process

const routeBetweenNodes = (graph, s, e) => {
  // create a queue to manage breadth-first order
  // mark s as seen by s
  // mark e as seen by e
  // enqueue s in the queue
  // enqueue e in the queue
  // while the queue is NOT empty
    // create a currentNode variable that is based on dequeueing the queue
    // if the current node has been marked by both s and e
      // return true
    // otherwise
      // for each node adjacent to currentNode
        // if either the currentNode is marked by s and the adjacent node is NOT marked by s OR the currentNode is marked by e and the adjacent node is NOT marked by e
          // mark the adjacentNode with the current letter
          // enqueue the adjacentNode

}