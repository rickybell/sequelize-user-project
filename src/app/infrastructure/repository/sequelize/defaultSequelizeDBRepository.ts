import { BaseModel } from "@models/index";
import { DefaultRepository } from "@repositories/defaultRepository";
import { WithId } from "..";
import { Model } from "sequelize-typescript";

export abstract class DefaultSequelizeDBRepository<T extends BaseModel> extends DefaultRepository<T> {
    constructor(private model: Model<T>) {
        super();
    }

    async create(data: T) {
        try {
            const createdData = await this.model.save(data);
            return createdData.toJSON() as WithId<T>;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findAll() {
        try {
            const data = await this.model.get();
            return data;
            // return data.map((d) => d.toJSON()) as WithId<T>[];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}