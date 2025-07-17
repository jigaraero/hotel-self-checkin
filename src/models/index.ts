import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { setupAssociations } from './associations';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  logging: false,
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    setupAssociations();
    await sequelize.sync();
    console.log('Models synchronized');
  } catch (err) {
    console.error('Unable to connect to database', err);
  }
};
