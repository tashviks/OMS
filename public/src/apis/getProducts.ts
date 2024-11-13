export const getProducts = async () => {
    try {
        const response = await fetch('https://merry-normally-panda.ngrok-free.app/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
