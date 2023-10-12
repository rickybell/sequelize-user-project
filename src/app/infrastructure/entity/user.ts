import { STRING, TEXT, UUID } from "sequelize";
import { SetupServer } from "@configs/index";
import UUIDV4 from '@sequelize/core';
const Sequelize = SetupServer.getSequelize();

const UserEntity = Sequelize.define("user", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
    },
    username: {
        type: TEXT,
        allowNull: false,
        unique: true
      },
    hashedPassword: {
        type: STRING(64),
        validate: {
            is: /^[0-9a-fA-F]{64}$/i
        },
    },
    name: {
        allowNull: false,
        type: STRING, 
        validate: { len: [6,200] }

    },
    surname: {
        allowNull: false,
        type: STRING,
        validate: { len: [6,200] }
    }
});

export default UserEntity;
