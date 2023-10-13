import { Model } from "sequelize";
import { Column, DataType, Is, Table } from "sequelize-typescript";

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




// import { SetupServer } from "@configs/index";
// import { UUID, UUIDV4, TEXT, STRING } from "sequelize";

// const Sequelize = SetupServer.getSequelize();

// const UserEntity = Sequelize.define("user", {
//     id: {
//         allowNull: false,
//         primaryKey: true,
//         type: UUID,
//         defaultValue: UUIDV4,
//     },
//     username: {
//         type: TEXT,
//         allowNull: false,
//         unique: true
//       },
//     hashedPassword: {
//         type: STRING(64),
//         validate: {
//             is: /^[0-9a-fA-F]{64}$/i
//         },
//     },
//     name: {
//         allowNull: false,
//         type: STRING, 
//         validate: { len: [6,200] }

//     },
//     surname: {
//         allowNull: false,
//         type: STRING,
//         validate: { len: [6,200] }
//     }
// });

// export default UserEntity;
