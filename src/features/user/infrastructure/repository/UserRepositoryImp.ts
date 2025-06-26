import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import { UserDatasource } from "../../domain/datasources/UserDatasource";

export class UserRepositoryImp extends UserRepository {
    constructor(private readonly datasource: UserDatasource) {
        super();
    }

    async create(user: User): Promise<User> {
        return this.datasource.create(user);
    }
    async findById(id: number): Promise<User | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<User[]> {
        return this.datasource.findAll();
    }
    async update(id: number, user: Partial<User>): Promise<User> {
        return this.datasource.update(id, user);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
