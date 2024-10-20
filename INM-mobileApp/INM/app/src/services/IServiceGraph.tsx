import  {Graph}  from "../structures/Graph";
import {Node} from "../structures/Node";
import { Edge } from "../structures/Edge";

export interface IServiceGraph<T> {
    getEdge(node1: Node<T>, node2: Node<T>): Edge<T>; 
    getNode(id: number): Node<T>;
    getGraph(): Graph<T>;
    getNeighbors(node: Node<T>): Node<T>[];
    getShortestPath(node1: Node<T>, node2: Node<T>): Node<T>[];

}