import { format } from "date-fns";

function addToLocalStorage(key, value) {
    try {
        const timestamp = format((new Date),'PP');

        const data = {
          value: value,
          timestamp: timestamp,
        };

        const serializedValue = JSON.stringify(data);
    
        localStorage.setItem(key, serializedValue);
    
        console.log(`Data with key "${key}" added to local storage.`);
    } catch (error) {
        console.error('Error adding data to local storage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
      const serializedData = localStorage.getItem(key);
  
      if (serializedData === null) {
        return null;
      }
  
      const data = JSON.parse(serializedData);
  
      const storedValue = data.value;
      const storedTimestamp = data.timestamp;
  
      return { value: storedValue, timestamp: storedTimestamp };
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return null;
    }
}

function removeFromLocalStorage(key) {
    try {
      localStorage.removeItem(key);
  
      console.log(`Item with key "${key}" removed from local storage.`);
    } catch (error) {
      console.error('Error removing item from local storage:', error);
    }
  }

export {addToLocalStorage,getFromLocalStorage,removeFromLocalStorage}