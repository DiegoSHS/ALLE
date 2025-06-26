import { User } from "../entities/User";

export abstract class UserDatasource {
    abstract create(user: User): Promise<User>;
    abstract findById(id: number): Promise<User | null>;
    abstract findAll(): Promise<User[]>;
    abstract update(id: number, user: Partial<User>): Promise<User>;
    abstract delete(id: number): Promise<void>;
}
