export const getCart = async () => {
    try {
        const response = await fetch('http://localhost:8080/GetCart?id=1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
  }