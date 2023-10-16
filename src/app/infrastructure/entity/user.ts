import { Column, DataType, Is, Table, Model } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "users",
    modelName: "UserEntity",
})
export default class UserEntity extends Model{
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare hashedPassword: string;
    @Is("custom", (value: string) => {
        if (value.match(/^[a-z0-9]+$/i)) {
            return value;
        }   
    })
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: { len: [6,200] },
        unique: true
    })
    declare username: string;
    
    @Column({
        type: DataType.STRING,  
        allowNull: false,
        validate: { len: [6,200] }
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: { len: [6,200] }
    })
    declare surname: string;
}