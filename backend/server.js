// casso-ebook-backend/server.js
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import cors from 'cors'; 
import { PayOS } from '@payos/node';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// PayOS init
const payOS = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID,
    apiKey: process.env.PAYOS_API_KEY,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY,
});

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// --- API để tạo đơn hàng và lấy QR code từ PayOS ---
app.post('/create-payment-link', async (req, res) => {
    const DOMAIN = process.env.CLIENT_URL || process.env.CLIENT_URL_LOCAL;

    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 2000,
        description: 'Thanh toán đơn hàng',
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
        res.json(paymentLinkResponse)
    } catch (error) {
        console.error(error);
        res.send("Something went error");
    }
});


// --- Serve React build ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Xác định đường dẫn gốc của project
const projectRoot = path.resolve(__dirname, '..');

// Xác định đường dẫn đến thư mục 'dist' một cách đáng tin cậy
const distPath = path.join(projectRoot, "dist");

// Cấu hình Express để phục vụ các file tĩnh từ thư mục 'dist'
app.use(express.static(distPath));

// Đường dẫn 'catch-all' để xử lý các route của frontend
app.get('/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});


// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
