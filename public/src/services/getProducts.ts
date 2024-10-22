export const getProducts = async () => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    console.log(data)
    return data;
}


