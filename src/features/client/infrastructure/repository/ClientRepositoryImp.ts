import { Client } from "../../domain/entities/Client";
import { ClientRepository } from "../../domain/repository/ClientRepository";
import { ClientDatasource } from "../../domain/datasources/ClientDatasource";

export class ClientRepositoryImp extends ClientRepository {
    constructor(private readonly datasource: ClientDatasource) {
        super();
    }

    async create(client: Client): Promise<Client> {
        return this.datasource.create(client);
    }
    async findById(id: number): Promise<Client | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<Client[]> {
        return this.datasource.findAll();
    }
    async update(id: number, client: Partial<Client>): Promise<Client> {
        return this.datasource.update(id, client);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
