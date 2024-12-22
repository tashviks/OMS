export const getAddress = async () => {
    try {
        const response = await fetch('https://marmoset-wondrous-singularly.ngrok-free.app/GetAddress?user_id=1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error;
    }
  }