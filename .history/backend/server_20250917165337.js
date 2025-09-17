// casso-ebook-backend/server.js
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import cors from 'cors'; 
import { PayOS } from '@payos/node';

dotenv.config(); // ✅
const app = express();
const PORT = process.env.PORT || 5000;
const payOS = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID,
    apiKey: process.env.PAYOS_API_KEY,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY,
});

// Middleware
app.use(cors());
app.use(json());
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
