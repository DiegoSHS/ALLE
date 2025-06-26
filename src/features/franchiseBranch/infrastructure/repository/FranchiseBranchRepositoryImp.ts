import { FranchiseBranch } from "../../domain/entities/FranchiseBranch";
import { FranchiseBranchRepository } from "../../domain/repository/FranchiseBranchRepository";
import { FranchiseBranchDatasource } from "../../domain/datasources/FranchiseBranchDatasource";

export class FranchiseBranchRepositoryImp extends FranchiseBranchRepository {
    constructor(private readonly datasource: FranchiseBranchDatasource) {
        super();
    }

    async create(franchiseBranch: FranchiseBranch): Promise<FranchiseBranch> {
        return this.datasource.create(franchiseBranch);
    }
    async findById(id: number): Promise<FranchiseBranch | null> {
        return this.datasource.findById(id);
    }
    async findAll(): Promise<FranchiseBranch[]> {
        return this.datasource.findAll();
    }
    async update(id: number, franchiseBranch: Partial<FranchiseBranch>): Promise<FranchiseBranch> {
        return this.datasource.update(id, franchiseBranch);
    }
    async delete(id: number): Promise<void> {
        return this.datasource.delete(id);
    }
}
