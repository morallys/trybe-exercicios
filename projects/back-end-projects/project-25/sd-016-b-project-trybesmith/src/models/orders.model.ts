import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

import IOrders from '../interfaces/orders.interface';

const getAll = async (): Promise<IOrders[]> => {
  //
  const [orders] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');
  const [products] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

  const result = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: products.filter((product) => product.orderId === order.id).map((p) => p.id),
  }));

  return result as IOrders[];
};

export default {
  getAll,
};

/**
 * NOTE
 * Na função getAll, realiza duas consultas ao banco de dados Trybesmith, uma a tabela Orders e outra a tabela Products. Com esse resultado, faz um map em orders primeira tabela, inserindo os dados da primeira ordem como Id e UserId, na terceira propriedade que não existe em orders, faz um filter em products buscando todos os products com orderId igual ao id de order. Após isso cria um array com todos os produtos com orderId.
 * Retorna um array do tipo IOrders[] montando em cada posição objetos com id, userId e productsId.
 */