export interface Add<T> {
    add(element: T): Promise<boolean>;
}

export interface FindAll<T> {
    findAll(): Promise<T[]>;
}

export interface FindById<T, K> {
    findById(id: K): Promise<T | undefined>;
}
