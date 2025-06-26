import { Client } from "../entities/Client";

export abstract class ClientDatasource {
    abstract create(client: Client): Promise<Client>;
    abstract createMany(clients: Client[]): Promise<Client[]>;
    abstract findById(id: number): Promise<Client | null>;
    abstract findAll(): Promise<Client[]>;
    abstract update(id: number, client: Partial<Client>): Promise<Client>;
    abstract delete(id: number): Promise<void>;
}
