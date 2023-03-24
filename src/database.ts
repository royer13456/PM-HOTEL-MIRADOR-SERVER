import { createPool } from "mysql2/promise";

export const connect = () => {
  const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hotel_torre_torre',
    port: 3306,
    connectionLimit: undefined
  })
  return connection;
}