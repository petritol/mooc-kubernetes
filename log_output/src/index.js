import { v4 as uuidv4 } from "uuid";

setInterval(() => {
    const timestamp = new Date();
    const randomString = uuidv4();
    console.log(`${timestamp.toISOString()}: ${randomString}`);
}, 5000);