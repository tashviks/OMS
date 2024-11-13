export const postOrderLine = async (order_line_payload : any) => {
    try {
      const response = await fetch('https://merry-normally-panda.ngrok-free.app/PostOrderLine', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(order_line_payload),
      });
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error Posting Order Line :', error);
      throw error;
    }
  }