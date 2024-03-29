function uploadItemData(itemData, itemCount) {
    let existingData = JSON.parse(localStorage.getItem('itemData')) || [];
  
    // Check if an item with the same ID already exists in the array
    const existingItemIndex = existingData.findIndex(item => item.id === itemData.id);
  
    if (existingItemIndex !== -1) {
      // Update the amount of the existing item
      existingData[existingItemIndex].amount += itemCount;
    } else {
      // Add the new item with the provided itemCount
      itemData.amount = itemCount;
      existingData.push(itemData);
    }
  
    // Store the updated data in localStorage
    localStorage.setItem('itemData', JSON.stringify(existingData));
  }



    function retrieveItemData (){

    } 

    export {
        uploadItemData,
        retrieveItemData
    }