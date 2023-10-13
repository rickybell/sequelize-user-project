import { BaseModel } from "@models/index";
import { DefaultRepository } from "@repositories/defaultRepository";
import { WithId } from "..";
import { Model, ModelCtor } from "sequelize/types";

export abstract class SequelizeDBRepository<T extends BaseModel> extends DefaultRepository<T> {
    constructor(private model: ModelCtor<Model<T, T>>) {
        super();
    }

    async create(data: T | ModelCtor<Model<any, any>> | null | undefined) {
        try {
            const createdData = await this.model.create(data);
            return createdData.toJSON() as WithId<T>;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}