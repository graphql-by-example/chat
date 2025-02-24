import { connection } from './connection.js';

const getUserTable = () => connection.table('user');

export async function getUser(username) {
  return await getUserTable().first().where({ username });
}
