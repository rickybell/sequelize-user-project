import { BaseRepository, WithId } from ".";

export abstract class DefaultRepository<T> implements BaseRepository<T> {
    public abstract create(data: T): Promise<WithId<T>>;
}