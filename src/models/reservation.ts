import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';
import { Guest } from './guest';

interface ReservationAttributes {
  reservation_id: number;
  confirmation_number: string;
  guest_id: number;
  room_type: string;
  check_in_date: Date;
  check_out_date: Date;
  status?: string;
}

interface ReservationCreationAttributes extends Optional<ReservationAttributes, 'reservation_id' | 'status'> {}

export class Reservation extends Model<ReservationAttributes, ReservationCreationAttributes> implements ReservationAttributes {
  public reservation_id!: number;
  public confirmation_number!: string;
  public guest_id!: number;
  public room_type!: string;
  public check_in_date!: Date;
  public check_out_date!: Date;
  public status?: string;
}

Reservation.init(
  {
    reservation_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    confirmation_number: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    guest_id: {
      type: DataTypes.INTEGER,
      references: { model: Guest, key: 'guest_id' },
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    check_in_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    check_out_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'CONFIRMED',
    },
  },
  {
    sequelize,
    tableName: 'reservations',
    timestamps: true,
  }
);
