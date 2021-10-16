const Item = require("./item.json");

const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
};

async function handleRequest(request) {
    try {
        const item = Item[Math.floor(Math.random() * item.length)];

        const json = JSON.stringify({ Item: Item });

        return new Response(json, {
            headers: { ...header, "content-type": "application/json" },
        });
    } catch (error) {
        return new Response("Houve um erro em gerar o prato", {
            status: 500,
            headers: { ...header },
        });
    }
}