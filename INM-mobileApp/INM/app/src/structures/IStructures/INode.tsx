interface INode<T> {
    value: T;
    edges: IEdge<T>[];
}