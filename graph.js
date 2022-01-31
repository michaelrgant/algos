class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdges(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }
  removeEdges(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (v) => v !== vertexOne
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (v) => v !== vertexTwo
    );
  }
  removeVertex(vertex) {
    console.log(this.adjacencyList);
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      console.log(adjacentVertex);
      this.removeEdges(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFS_Recursion(start) {
    let result = [];
    let visitedVertex = {};
    const adjacencyList = this.adjacencyList;
    console.log("outer lists", adjacencyList);
    let DFS = (vertex) => {
      if (vertex === null) {
        return;
      }
      visitedVertex[vertex] = true;
      console.log(visitedVertex)
      result.push(vertex);
      console.log("this is result",result)
      console.log("this is adj",adjacencyList[vertex]);
      adjacencyList[vertex].forEach((neighbor) => {
        console.log('this is neighbor',neighbor);
        console.log(visitedVertex[neighbor]);
        if (visitedVertex[neighbor] === undefined) {
           return DFS(neighbor);
        }
      });
    };
    DFS(start);
    return result;
  }
  DFS_Iterative(start) {
    console.log("this is adj",this.adjacencyList);
    let stack = [];
    let result = [];
    stack.push(start)
    let currentVertex;
    let visitedVertex = {};

    visitedVertex[start] = true;
    while (stack.length) {
      currentVertex = stack.pop()
      console.log("current",currentVertex);
      result.push(currentVertex);
      console.log("list",this.adjacencyList[currentVertex]);
      this.adjacencyList[currentVertex].forEach(neighbor => {
console.log("this is neighbor",neighbor);
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          console.log(visitedVertex);
          stack.push(neighbor)
          console.log(stack);
        }
       })
    }
    return result
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("C", "E");
g.addEdges("D", "E");
g.addEdges("D", "F");
g.addEdges("E", "F");

//g.removeVertex("Denver");
//g.removeEdges("Liberia", "Aspen");
console.log(g.DFS_Iterative("A"));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
console.log(g.adjacencyList);
