//TODO
const syncToDoList = async (graphListHelper, alexaListHelperFacade, graphTasks, alexaTasks, alexaListClient, consentToken) => {
    /*
    //remove old items
    for each alexa task
        if not exists in outlook tasks
            alexaListHelperFacade.removeTodoItem(alexaItem, alexaListClient, consentToken)

    //create new items
    for each outlook task
        if not exists in alexa tasks
            alexaListHelperFacade.addTodoItem(alexaItem, alexaListClient, consentToken)

    //update state
    for each outlook tasks
        find corresponding alexa task
            alexaItem.state = outlookItem.state
            alexaListHelperFacade.updateTodoItem(alexaItem, alexaListClient, consentToken) 
    */
};

//TODO
const syncToDoList = async (graphListHelper, alexaListHelperFacade, graphTasks, alexaTasks, alexaListClient, consentToken) => {
    /*
    //remove old items
    for each alexa task
        if not exists in outlook tasks
            alexaListHelperFacade.removeShoppingItem(alexaItem, alexaListClient, consentToken)

    //create new items
    for each outlook task
        if not exists in alexa tasks
            alexaListHelperFacade.addShoppingItem(alexaItem, alexaListClient, consentToken)

    //update state
    for each outlook tasks
        find corresponding alexa task
            alexaItem.state = outlookItem.state
            alexaListHelperFacade.updateShoppingItem(alexaItem, alexaListClient, consentToken) 
    */
};

module.exports = {
    syncToDoList,
    syncShoppingList
};