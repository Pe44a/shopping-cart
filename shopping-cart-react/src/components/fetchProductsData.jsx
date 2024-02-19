async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=10');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

export default fetchData;