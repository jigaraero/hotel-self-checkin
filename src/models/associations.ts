import { Guest } from './guest';
import { Reservation } from './reservation';
import { Room } from './room';

export const setupAssociations = () => {
  Guest.hasMany(Reservation, { foreignKey: 'guest_id' });
  Reservation.belongsTo(Guest, { foreignKey: 'guest_id' });

  Room.hasMany(Reservation, { foreignKey: 'room_id' });
  Reservation.belongsTo(Room, { foreignKey: 'room_id' });
};
