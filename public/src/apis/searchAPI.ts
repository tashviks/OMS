
export const searchAPI = {
    search: async (query: any) => {
        try {
            const response = await fetch(`https://marmoset-wondrous-singularly.ngrok-free.app/SearchProducts?query=${query}&offset=0`);
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            // console.log(data)
            return response.json();
        } catch (error) {
            console.error('Error fetching search results:', error);
            throw error;
        }
    },
};
