const axios = require("axios");


async function getData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // loop
        const userData = response.data;
        // console.log("response.data: ", response.data);

        const userEntry = {};
        // example: const userEntry = { 1:10, 2:5, ... };

        for (let i = 0; i < userData.length; i++) {
            const userId = userData[i].userId;

            if (!userEntry[userId]) {
                userEntry[userId] = 1;
                // console.log(userEntry[userId])
            } else {
                userEntry[userId] = userEntry[userId] + 1;
                // console.log(userEntry[userId])
            }
        }

        console.log(userEntry)


        // calculate for each user


        return response;
    } catch (error) {
        console.error(error);
    }
}



getData()



