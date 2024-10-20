import {Node} from './Node';

export class Edge<T> implements IEdge<T> {
    node: Node<T>;
    weight: number;
  
    constructor(node: Node<T>, weight: number) {
      this.node = node;
      this.weight = weight;
    }
  }