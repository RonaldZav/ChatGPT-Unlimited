const Chat = require("./index.js");

const messageTest = "Como te llamas?";

async function startTest () {
	console.log("[RUNNING] Testing Package");
	
    const response = await Chat.create(messageTest);
        
	if(response) {console.log("[TEST] Completed ✅")} else {
        console.log('[TEST] Error ⛔:', error);	
	};
};

startTest();