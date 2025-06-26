import { User } from "../../domain/entities/User";
import { UserDatasource } from "../../domain/datasources/UserDatasource";

export class UserDatasourceImp extends UserDatasource {
    async create(user: User): Promise<User> {
        // Implementación con supabase
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<User | null> {
        // Implementación con supabase
        throw new Error('Not implemented');
    }
    async findAll(): Promise<User[]> {
        // Implementación con supabase
        throw new Error('Not implemented');
    }
    async update(id: number, user: Partial<User>): Promise<User> {
        // Implementación con supabase
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        // Implementación con supabase
        throw new Error('Not implemented');
    }
}
