import store from "../redux/store";
const cart = store.getState().reducer;
export const fetchProductGrades = async () => {
    try {
      const gradeDetails = await Promise.all(
        cart.map( async (item: any) => {
          // console.log(" ");
          // console.log("ITEM : ");
          // console.log(item);
          const response = await fetch(`https://merry-normally-panda.ngrok-free.app/GetGrade?id=${item.id}&grade=${item.grade}&bag_size=${item.bag_size}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
      );
      return gradeDetails;
    } catch (error) {
      console.error('Error fetching product grades:', error);
      throw error;
    }
  };