import { Client } from "../../domain/entities/Client";
import { ClientDatasource } from "../../domain/datasources/ClientDatasource";

export class ClientDatasourceImp extends ClientDatasource {
    async create(client: Client): Promise<Client> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<Client | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<Client[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, client: Partial<Client>): Promise<Client> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
