// Built-in methods used:
// - push: Adds one or more elements to the end of an array and returns the new length of the array.
// - shift: Removes the first element from an array and returns that removed element.
// - sort: Sorts the elements of an array in place and returns the sorted array.

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    // Enqueue method adds a node with its priority to the priority queue
    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.sort();
    }

    // Dequeue method removes and returns the node with the highest priority
    dequeue() {
        return this.queue.shift();
    }

    // Sorts the priority queue based on the priority of its elements
    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    // Checks if the priority queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Dijkstra's algorithm implementation
function dijkstra(graph, source) {
    // Initialize distance and previous nodes objects
    const distances = {};
    const previous = {};
    // Create a priority queue instance
    const pq = new PriorityQueue();

    // Initialize distances and previous nodes for all vertices
    for (let vertex in graph) {
        if (vertex === source) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            pq.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    // Main loop of Dijkstra's algorithm
    while (!pq.isEmpty()) {
        // Extract the node with the smallest distance from the priority queue
        const { node: current } = pq.dequeue();

        // Update distances and previous nodes for neighboring nodes
        for (let neighbor in graph[current]) {
            const distance = distances[current] + graph[current][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = current;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    // Return the computed distances and previous nodes
    return { distances, previous };
}

// Example graph represented as an adjacency list
const graph = {
    'A': { 'B': 3, 'C': 4 },
    'B': { 'A': 3, 'C': 2, 'D': 2 },
    'C': { 'A': 4, 'B': 2, 'D': 1 },
    'D': { 'B': 2, 'C': 1 }
};

const source = 'A';
const { distances, previous } = dijkstra(graph, source);

console.log("Shortest distances from source node '" + source + "':", distances);
console.log("Previous nodes in shortest paths:", previous);

