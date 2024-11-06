export const postOrder = async (order_payload : any) => {
    try {
      const response = await fetch('http://localhost:8080/PostOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order_payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error Placing Order:', error);
      throw error;
    }
  }