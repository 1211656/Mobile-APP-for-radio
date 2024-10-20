
import { IServiceGraph } from "./IServiceGraph";
import {Graph} from "../structures/Graph";
import {Node} from "../structures/Node";
import {Edge} from "../structures/Edge";
import {Product} from "../domain/Product";

export class ProductsService implements IServiceGraph<Product> {

    private graph: Graph<Product>;

    constructor(){
        // fetching data from the api
        this.graph = new Graph<Product>();
        // this.fetchProducts();
    }
    public getEdge(node1: Node<Product>, node2: Node<Product>,){
        //TODO 
        return new Edge(node1,5);
        
    }
    public getNode(id: number){
        //TODO 
        return new Node(Product);
    }
    
    public getGraph(){
        //DONE
        return this.graph;
    }
    public getNeighbors(node: Node<Product>){
        //TODO
        return [];
    }
    public getShortestPath(node1: Node<Product>, node2: Node<Product>){
        //TODO
        return [];
    }
    
}