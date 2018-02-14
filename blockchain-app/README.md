
## Blockchain App

This application was built using the Blockain API. The goal of this application is to allow the user to input their Bitcoin wallet address and it will show the current value of Bitcoin in that person's wallet. In addition, a list of recent transactions will appear below in the browser in the form of Hash ID's. The user can then input these on the Blockchain website and they will be shown the amount of Bitcoin that was sent or received in this transaction. 

This application was created using the React.js framework. It was also compiled using Node.js and "GET" requests for the API were handled by use of Axios. Initally, the locations where the API data will be stored when it is retrieved are empty arrays, but when the handler methods are called and the API data is retrieved, it is then stored inside of these empty objects, giving them a value. Once they are given a value, then different pieces of data can be rendered from them by use of a .map function. As a result, the application will display the person's BTC balance inside of the selected wallet address, as well as the Hash ID's which can then be searched to check and see if the transaction succeeded and is being processed. .



