import {Node} from './Node'
import {Edge} from './Edge'

export class Graph<T> {
    nodes: Node<T>[];
  
  
    constructor() {
      this.nodes = [];
    }

  
    addNode(value: T): Node<T> {
      const node = new Node(value);
      this.nodes.push(node);
      return node;
    }
  
    addEdge(node1: Node<T>, node2: Node<T>, weight: number): void {
      node1.edges.push(new Edge(node2, weight));
      node2.edges.push(new Edge(node1, weight));
    }
  }