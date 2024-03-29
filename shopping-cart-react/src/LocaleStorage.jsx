    function uploadItemData (itemData, itemCount){
        
        // check if an item with the same ID exists in localStorage
        const existingItem = localStorage.getItem(`${itemData.id}`);

        if(existingItem) {
            const parsedData = JSON.parse(existingItem);

            // update the amount with the new itemCount
            parsedData.amount += itemCount;

            // store back data in localStorage
            const updatedData = JSON.stringify(parsedData);
            localStorage.setItem(`${itemData.id}`, updatedData);
        } else {
            //adding new value to itemData 
            itemData.amount = itemCount
            const data = JSON.stringify(itemData);

            localStorage.setItem(`${itemData.id}`, data)
        }

    }



    function retrieveItemData (){

    } 

    export {
        uploadItemData,
        retrieveItemData
    }