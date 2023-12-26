const fetch = require('node-fetch');

module.exports = class Chat {
  static async create(prompt) {
    const apiUrl = `https://api.gglvxd.eu.org/v3/chatgpt?q=${encodeURIComponent(prompt)}`;
    const timeoutMillis = 30000;
    const timeOutMessage = "Tiempo de espera excedido.";
    
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(timeOutMessage));
      }, timeoutMillis);
    });

    try {
      const apiResponse = await Promise.race([fetch(apiUrl), timeoutPromise]);
      if (apiResponse === timeoutPromise) {
        throw new Error(timeOutMessage);
      }
      
      const response = await apiResponse.json();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};
