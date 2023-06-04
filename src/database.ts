import { createPool } from "mysql2/promise";

export const connect = () => {
  const connection = createPool({
    host: 'containers-us-west-84.railway.app',
    user: 'root',
    password: 'lGJHNN5WaNdGRaQK5oeP',
    database: 'railway',
    port: 7857,
    connectionLimit: undefined
  })
  return connection;
}