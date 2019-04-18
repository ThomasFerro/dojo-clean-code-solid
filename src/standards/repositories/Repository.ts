export interface Repository<T, K> {
    add(element: T): Promise<boolean>;
    findAll(): Promise<T[]>;
    findById(id: K): Promise<T | undefined>;
}
