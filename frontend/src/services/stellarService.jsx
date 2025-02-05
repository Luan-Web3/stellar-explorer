import StellarSdk from 'stellar-sdk';

const stellarService = {
    async getLatestBlocks(limit = 10) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockBlocks = Array.from({ length: limit }, (_, i) => ({
            sequence: 1234567 + i,
            hash: 'BLOCK_HASH_' + (1234567 + i),
            close_time: new Date().toISOString(),
            successful_transaction_count: Math.floor(Math.random() * 100),
            fee_pool: Math.random() * 1000,
            ledger: 12345 + i,
          }));
          resolve(mockBlocks);
        }, 500); // Simula um atraso de 500ms
      });
    },
  
    async getLatestTransactions(limit = 10) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockTransactions = Array.from({ length: limit }, (_, i) => ({
            hash: 'TRANSACTION_HASH_' + (9876543 + i),
            created_at: new Date().toISOString(),
            amount: (Math.random() * 100).toFixed(2),
            source_account: 'SOURCE_ACCOUNT_' + (54321 + i),
            destination_account: 'DESTINATION_ACCOUNT_' + (12345 + i),
          }));
          resolve(mockTransactions);
        }, 500); // Simula um atraso de 500ms
      });
    },
  
    async getBlockDetails(blockId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const mockBlock = {
            sequence: blockId,
            hash: 'BLOCK_HASH_' + blockId,
            close_time: new Date().toISOString(),
            successful_transaction_count: Math.floor(Math.random() * 100),
            fee_pool: Math.random() * 1000,
            ledger: 12345 + parseInt(blockId),
          };
  
          if (mockBlock.sequence > 1234600) { // Simula um bloco não encontrado
            reject({ message: 'Bloco não encontrado' });
          } else {
            resolve(mockBlock);
          }
        }, 500); // Simula um atraso de 500ms
      });
    },
  
    async getTransactionDetails(transactionId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const mockTransaction = {
            hash: transactionId,
            created_at: new Date().toISOString(),
            amount: (Math.random() * 100).toFixed(2),
            source_account: 'SOURCE_ACCOUNT_' + (54321 + parseInt(transactionId)),
            destination_account: 'DESTINATION_ACCOUNT_' + (12345 + parseInt(transactionId)),
          };
          if (!mockTransaction.hash.startsWith('TRANSACTION_HASH_9')) { // Simula transação não encontrada. Ajuste a condição conforme necessário
            reject({ message: 'Transação não encontrada' });
          } else {
            resolve(mockTransaction);
          }
        }, 500); // Simula um atraso de 500ms
      });
    },
  };
  
  export default stellarService;

/* 
import StellarSdk from 'stellar-sdk';

// Configuração do Horizon Server
const server = new StellarSdk.Server('https://horizon.stellar.org'); // Ou outro Horizon Server de sua preferência

const stellarService = {
  async getLatestBlocks(limit = 10) {
    try {
      const blocks = await server.blocks().order('desc').limit(limit).call();
      return blocks.records;
    } catch (error) {
      console.error('Erro ao buscar blocos:', error);
      throw error; // Re-lança o erro para ser tratado no componente
    }
  },

  async getLatestTransactions(limit = 10) {
    try {
      const transactions = await server.transactions().order('desc').limit(limit).call();
      return transactions.records;
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
      throw error; // Re-lança o erro para ser tratado no componente
    }
  },

  async getBlockDetails(blockId) {
    try {
      const block = await server.blocks().block(blockId).call();
      return block;
    } catch (error) {
      console.error(`Erro ao buscar detalhes do bloco ${blockId}:`, error);
      throw error; // Re-lança o erro para ser tratado no componente
    }
  },

  async getTransactionDetails(transactionId) {
    try {
      const transaction = await server.transactions().transaction(transactionId).call();
      return transaction;
    } catch (error) {
      console.error(`Erro ao buscar detalhes da transação ${transactionId}:`, error);
      throw error; // Re-lança o erro para ser tratado no componente
    }
  },
};

export default stellarService;
*/