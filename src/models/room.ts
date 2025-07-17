import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface RoomAttributes {
  room_id: number;
  room_number: string;
  room_type: string;
  is_available: boolean;
}

interface RoomCreationAttributes extends Optional<RoomAttributes, 'room_id' | 'is_available'> {}

export class Room extends Model<RoomAttributes, RoomCreationAttributes> implements RoomAttributes {
  public room_id!: number;
  public room_number!: string;
  public room_type!: string;
  public is_available!: boolean;
}

Room.init(
  {
    room_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    room_number: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'rooms',
    timestamps: true,
  }
);
