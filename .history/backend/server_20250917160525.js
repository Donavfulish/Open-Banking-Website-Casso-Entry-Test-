// casso-ebook-backend/server.js
import dotenv from "dotenv";
dotenv.config(); // ✅
import express, { json, urlencoded } from "express";
import cors from 'cors'; // Để xử lý CORS từ frontend
import { PayOS } from '@payos/node';

const app = express();
// WHY 5000, 5000 OR 3030
const PORT = process.env.PORT || 5000;

// what de heo is that
const payOS = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID,
    apiKey: process.env.PAYOS_API_KEY,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY,
});

console.log(Object.keys(payOS.paymentRequests));
console.log("paymentRequests prototype methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(payOS.paymentRequests)));


// Middleware, for what
app.use(cors());
app.use(json());
// why false, true
app.use(urlencoded({ extended: true }));

// what is the action flow here
// --- API để tạo đơn hàng và lấy QR code từ PayOS ---
app.post('/create-payment-link', async (req, res) => {
    // ` and ' what is the diff
    const DOMAIN = `http://localhost:5173`;
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 2000,
        description: 'Thanh toan don hang',
        items: [
            {
                name: "Ebook Bí mật của may mắn",
                quantity: 1,
                price: 2000
            }
        ],
        returnUrl: `${DOMAIN}/success`,
        cancelUrl: `${DOMAIN}/fail`,
    };
   
    try {
        const paymentLinkResponse = await payOS.paymentRequests.create(body);
        // hay ne

        res.json(paymentLinkResponse)

    } catch (error) {
        console.error(error);
        res.send("Something went error");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});