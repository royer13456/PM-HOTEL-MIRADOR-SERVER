import { createPool } from "mysql2/promise";

export const connect = () => {
  const connection = createPool({
    host: 'containers-us-west-66.railway.app',
    user: 'root',
    password: 'SV2vUDvqzM2pDWaVX4jM',
    database: 'railway',
    port: 6795,
    connectionLimit: undefined
  })
  return connection;
}