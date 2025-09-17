// casso-ebook-backend/server.js
require('dotenv').config();
import express from 'express';
import { json, urlencoded } from 'body-parser';
import { post } from 'axios';
import { createHmac } from 'crypto'; // Để tạo mã hash
import cors from 'cors'; // Để xử lý CORS từ frontend
import PayOS from '@payos/node';

const app = express();
const PORT = process.env.PORT || 5000;

const payOS = new PayOS (
   PAYOS_CLIENT_ID = process.env.PAYOS_CLIENT_ID,
   PAYOS_API_KEY = process.env.PAYOS_API_KEY,
   PAYOS_CHECKSUM_KEY = process.env.P
)
// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Cấu hình PayOS
const PAYOS_CLIENT_ID = process.env.PAYOS_CLIENT_ID;
const PAYOS_API_KEY = process.env.PAYOS_API_KEY;
const PAYOS_CHECKSUM_KEY = process.env.PAYOS_CHECKSUM_KEY;
const PAYOS_BASE_URL = 'https://api-merchant.payos.vn'; // Hoặc sandbox nếu dùng môi trường test

// --- API để tạo đơn hàng và lấy QR code từ PayOS ---
app.post('/create-payment-link', async (req, res) => {
    try {
        const orderCode = Math.floor(Math.random() * 1000000); // Mã đơn hàng ngẫu nhiên
        const amount = 99000; // 99.000 VNĐ cho Ebook
        const description = `Thanh toán Ebook "Bí mật của may mắn" - Mã đơn hàng: ${orderCode}`;
        const returnUrl = 'http://localhost:5173/payment-success'; // URL redirect sau khi thanh toán thành công (frontend)
        const cancelUrl = 'http://localhost:5173/payment-fail'; // URL redirect khi hủy thanh toán (frontend)
        const webhookUrl = 'http://localhost:5000/payos-webhook'; // Backend của bạn để nhận callback từ PayOS

        const orderData = {
            orderCode: orderCode,
            amount: amount,
            description: description,
            items: [
                {
                    name: "Ebook Bí mật của may mắn",
                    quantity: 1,
                    price: amount
                }
            ],
            cancelUrl: cancelUrl,
            returnUrl: returnUrl,
            webhookUrl: webhookUrl,
            accountNumber: 'YOUR_OCB_OR_MBBANK_ACCOUNT_NUMBER', // Tài khoản ngân hàng liên kết với PayOS
            // optional: 'YOUR_PAYOS_ACCOUNT_NAME' // Tên tài khoản
        };

        // Tạo chữ ký (checksum) theo hướng dẫn của PayOS
        // LƯU Ý: PayOS có hướng dẫn cụ thể về cách tạo checksum, cần tuân thủ đúng.
        // Đây là ví dụ đơn giản, bạn cần kiểm tra lại tài liệu PayOS.
        const hashData = `amount=${orderData.amount}&cancelUrl=${orderData.cancelUrl}&description=${orderData.description}&items=${JSON.stringify(orderData.items)}&orderCode=${orderData.orderCode}&returnUrl=${orderData.returnUrl}&webhookUrl=${orderData.webhookUrl}`;
        const signature = createHmac('sha256', PAYOS_CHECKSUM_KEY)
                                  .update(hashData)
                                  .digest('hex');

        const headers = {
            'x-client-id': PAYOS_CLIENT_ID,
            'x-api-key': PAYOS_API_KEY,
            'Content-Type': 'application/json'
        };

        // Gửi yêu cầu đến PayOS để tạo link thanh toán
        const payosResponse = await post(`${PAYOS_BASE_URL}/v2/payments`, {
            ...orderData,
            signature: signature // Thêm signature vào request
        }, { headers });

        res.json(payosResponse.data); // Trả về thông tin QR code và link thanh toán cho frontend

    } catch (error) {
        console.error('Error creating payment link:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Failed to create payment link', error: error.response ? error.response.data : error.message });
    }
});

// --- Webhook từ PayOS khi có sự kiện thanh toán ---
app.post('/payos-webhook', (req, res) => {
    // LƯU Ý QUAN TRỌNG: Cần xác thực webhook request từ PayOS để đảm bảo an toàn.
    // PayOS sẽ gửi một signature trong header hoặc body, bạn cần kiểm tra lại bằng PAYOS_CHECKSUM_KEY.
    // Nếu không xác thực, bất kỳ ai cũng có thể gửi request giả mạo.

    console.log('PayOS Webhook received:', req.body);

    const eventData = req.body;
    const orderCode = eventData.orderCode;
    const status = eventData.status; // Ví dụ: PAID, CANCELLED, ...

    if (status === 'PAID') {
        // Xử lý khi thanh toán thành công
        // Lưu thông tin vào database (nếu có)
        // Gửi link Ebook cho khách hàng (qua email hoặc lưu vào DB và trả về cho frontend)
        console.log(`Order ${orderCode} paid successfully. Sending Ebook link...`);
        // Trong môi trường thực tế, bạn sẽ gửi email hoặc lưu link vào database
        // Để đơn giản cho bài test, bạn có thể chỉ cần log ra hoặc lưu tạm.
    } else {
        console.log(`Order ${orderCode} has status: ${status}`);
    }

    res.status(200).send('Webhook received and processed.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});