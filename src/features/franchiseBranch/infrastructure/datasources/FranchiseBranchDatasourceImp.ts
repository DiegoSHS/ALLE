import { FranchiseBranch } from "../../domain/entities/FranchiseBranch";
import { FranchiseBranchDatasource } from "../../domain/datasources/FranchiseBranchDatasource";

export class FranchiseBranchDatasourceImp extends FranchiseBranchDatasource {
    async create(franchiseBranch: FranchiseBranch): Promise<FranchiseBranch> {
        throw new Error('Not implemented');
    }
    async findById(id: number): Promise<FranchiseBranch | null> {
        throw new Error('Not implemented');
    }
    async findAll(): Promise<FranchiseBranch[]> {
        throw new Error('Not implemented');
    }
    async update(id: number, franchiseBranch: Partial<FranchiseBranch>): Promise<FranchiseBranch> {
        throw new Error('Not implemented');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Not implemented');
    }
}
