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
    const DOMAIN = `http://localhost:3000`;
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
        returnUrl: `${DOMAIN}?sucess=true`,
        cancelUrl: `${DOMAIN}?canceled=true`,
    };
    // try {
    //     //const webhookUrl = 'http://localhost:5000/payos-webhook'; // Backend của bạn để nhận callback từ PayOS
    //     //const accountNumber: 'YOUR_OCB_OR_MBBANK_ACCOUNT_NUMBER', // Tài khoản ngân hàng liên kết với PayOS

    //     // Tạo chữ ký (checksum) theo hướng dẫn của PayOS
    //     // LƯU Ý: PayOS có hướng dẫn cụ thể về cách tạo checksum, cần tuân thủ đúng.
    //     // Đây là ví dụ đơn giản, bạn cần kiểm tra lại tài liệu PayOS.
    //     const hashData = `amount=${orderData.amount}&cancelUrl=${orderData.cancelUrl}&description=${orderData.description}&items=${JSON.stringify(orderData.items)}&orderCode=${orderData.orderCode}&returnUrl=${orderData.returnUrl}&webhookUrl=${orderData.webhookUrl}`;
    //     const signature = createHmac('sha256', PAYOS_CHECKSUM_KEY)
    //         .update(hashData)
    //         .digest('hex');

    //     const headers = {
    //         'x-client-id': PAYOS_CLIENT_ID,
    //         'x-api-key': PAYOS_API_KEY,
    //         'Content-Type': 'application/json'
    //     };

    //     // Gửi yêu cầu đến PayOS để tạo link thanh toán
    //     const payosResponse = await post(`${PAYOS_BASE_URL}/v2/payments`, {
    //         ...orderData,
    //         signature: signature // Thêm signature vào request
    //     }, { headers });

    //     res.json(payosResponse.data); // Trả về thông tin QR code và link thanh toán cho frontend

    // } catch (error) {
    //     console.error('Error creating payment link:', error.response ? error.response.data : error.message);
    //     res.status(500).json({ message: 'Failed to create payment link', error: error.response ? error.response.data : error.message });
    // }
    try {
        const paymentLinkResponse = await payOS.createPaymentLink(body);
        // hay ne

        res.json(paymentLinkResponse)

    } catch (error) {
        console.error(error);
        res.send("Something went error");
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