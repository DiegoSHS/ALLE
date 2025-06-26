import { User } from "../entities/User";
import { UserDatasource } from "../datasources/UserDatasource";

export abstract class UserRepository extends UserDatasource { }
