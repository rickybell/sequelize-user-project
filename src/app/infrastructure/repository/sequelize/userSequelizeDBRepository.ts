import UserEntity from "@entities/user";
import { DefaultSequelizeDBRepository } from "./defaultSequelizeDBRepository";
import { UserRepository } from "..";

export class UserSequelizeDBRepository 
    extends DefaultSequelizeDBRepository<UserEntity>
    implements UserRepository {
    constructor(userEntity = new UserEntity) {
        super(userEntity);
    }

    async findAll() {
        try {
            const users = await this.findAll();
            return users?.toJSON() as UserEntity;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}