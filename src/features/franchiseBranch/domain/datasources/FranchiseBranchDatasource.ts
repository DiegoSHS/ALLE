import { FranchiseBranch } from "../entities/FranchiseBranch";

export abstract class FranchiseBranchDatasource {
    abstract create(franchiseBranch: FranchiseBranch): Promise<FranchiseBranch>;
    abstract findById(id: number): Promise<FranchiseBranch | null>;
    abstract findAll(): Promise<FranchiseBranch[]>;
    abstract update(id: number, franchiseBranch: Partial<FranchiseBranch>): Promise<FranchiseBranch>;
    abstract delete(id: number): Promise<void>;
    abstract createMany(franchiseBranches: FranchiseBranch[]): Promise<FranchiseBranch[]>;
}
