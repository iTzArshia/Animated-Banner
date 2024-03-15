const { readFileSync } = require("node:fs");

const token = 'Bot Token Here';                     // Put your Bot's Token
const newBanner = readFileSync('./Rick-Roll.gif');  // Path to your new banner file in this case Rick-Roll is our example

(async () => {

    try {
        const response = await fetch("https://discord.com/api/v10/users/@me", {
            method: "PATCH",
            headers: {
                Authorization: `Bot ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                banner: `data:image/gif;base64,${newBanner.toString("base64")}`
            })
        });

        if (response.ok) console.log("Banner Updated Successfully!");
        else {

            console.error("Failed to Update Banner:", response.statusText);
            const responseBody = await response.text();
            console.error("Response body:", responseBody);

        };

    } catch (error) {

        console.error("There is an Error here:", error);
    
    };

})();