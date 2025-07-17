import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface GuestAttributes {
  guest_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
}

interface GuestCreationAttributes extends Optional<GuestAttributes, 'guest_id'> {}

export class Guest extends Model<GuestAttributes, GuestCreationAttributes> implements GuestAttributes {
  public guest_id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone?: string;
}

Guest.init(
  {
    guest_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'guests',
    timestamps: true,
  }
);
