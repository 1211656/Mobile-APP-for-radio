

export interface IServiceMap<T> {
    getElement(number: number): Map<T,number>;
    getSize(map: Map<T,number>): number;
    getKeys(map: Map<T,number>): T[];
    getValues(map: Map<T,number>): number[];

}