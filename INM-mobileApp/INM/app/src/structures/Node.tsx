import {Edge} from './Edge';

export class Node<T> implements INode<T> {
    value: T;
    edges: Edge<T>[];
  
    constructor(value: T) {
      this.value = value;
      this.edges = [];
    }

     
  }