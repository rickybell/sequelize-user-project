export type WithId<T> = { id: string } & T;

export type FilterOptions = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface BaseRepository<T> {
    create(data: T): Promise<WithId<T>>;
    // findOne(options: FilterOptions): Promise<WithId<T> | undefined>;
    // find(options: FilterOptions): Promise<WithId<T>[]>;
    // deleteAll(): Promise<void>;
  }