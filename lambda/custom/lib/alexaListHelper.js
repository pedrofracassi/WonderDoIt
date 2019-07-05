const removeItem = (listItem, listId, listClient, consentToken) => {
    listClient.deleteListItem(listId, listItem.id, consentToken)
    .then((res) => {
        console.log(`${listItem.value} was removed from Alexa list`);
    }).catch((err) => {
        console.log("Error when trying to remove item from Alexa list");
    });
}

//TODO
const addItem = (listItem, listId, listClient, consentToken) => {
}

//TODO
const updateItem = (listItem, listId, listClient, consentToken) => {
}

//TODO
const getItems = (listId, listClient, consentToken) => {
}

/**
 * Fetches list item information for each listItem in listItemIds. Executes the
 * callback function with the response back from api.amazonalexa.com
 * for each item in the list.
 *
 * @param {String} listId list id to check
 * @param {String[]} listItemIds list item ids in the request
 * @param {String} consentToken consent token from Alexa request
 * @param {(String) => void} callback func for each list item
 */
const traverseListItems = (listId, listItemIds, consentToken, listClient, callback) => {
  listItemIds.forEach((itemId) => {
      const listRequest = listClient.getListItem(listId, itemId, consentToken);

      listRequest.then((response) => {
          callback(response);
      }).catch((err) => {
          console.error(err);
      });
  });
};

/**
* Fetches list information for given list id. Executes the
* callback function with the response back from api.amazonalexa.com.
*
* @param {String} listId list id to check
* @param {String} status specify either “active” or “completed” items.
* @param {String} consentToken consent token from Alexa request
* @param {(String) => void} callback func for the list
*/
const getListInfo = (listId, status, consentToken, listClient, callback) => {
  const listInfo = listClient.getList(listId, status, consentToken);

  listInfo.then((response) => {
      callback(response);
  }).catch((err) => {
      console.error(err);
  });
};

//TODO
const getShoppingItems = (listClient, consentToken) => {
    getItems(shoppingListId, listClient, consentToken)
}

//TODO
const getTodoItems = (listClient, consentToken) => {
    getItems(todoListId, listClient, consentToken)
}

//TODO
const addShoppingItem = (listItem, listClient, consentToken) => {
    addItem(listItem, shoppingListId, listClient, consentToken)
}

//TODO
const updateShoppingItem = (listItem, listClient, consentToken) => {
    updateItem(listItem, shoppingListId, listClient, consentToken)
}

//TODO
const addTodoItem = (listItem, listClient, consentToken) => {
    addItem(listItem, todoListId, listClient, consentToken)
}

//TODO
const updateTodoItem = (listItem, listClient, consentToken) => {
    updateItem(listItem, todoListId, listClient, consentToken)
}


module.exports = {
    traverseListItems, 
    getListInfo,
    //facade
    getShoppingItems,
    getToDoItems,
    updateShoppingItem,
    removeShoppingItem,
    addShoppingItem,
    updateTodoItem,
    removeTodoItem,
    addTodoItem
};