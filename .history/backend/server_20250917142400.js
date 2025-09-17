// casso-ebook-backend/server.js
require('dotenv').config();
import express from 'express';
S C:\CV\Casso\Casso Test\OpenBanking-EntryTest> npm run dev

> openbanking-entrytest@0.0.0 dev
> concurrently "npm run dev:server" "npm run dev:client"

[0] 
[0] > openbanking-entrytest@0.0.0 dev:server
[0] > node backend/server.js
[0]
[1]
[1] > openbanking-entrytest@0.0.0 dev:client
[1] > vite
[1]
[0] (node:29744) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///C:/CV/Casso/Casso%20Test/OpenBanking-EntryTest/backend/server.js is not specified and it doesn't parse as CommonJS.
[0] Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
[0] To eliminate this warning, add "type": "module" to C:\CV\Casso\Casso Test\OpenBanking-EntryTest\backend\package.json.
[0] (Use `node --trace-warnings ...` to show where the warning was created)
[0] file:///C:/CV/Casso/Casso%20Test/OpenBanking-EntryTest/backend/server.js:4
[0] import { json, urlencoded } from 'body-parser';
[0]          ^^^^
[0] SyntaxError: Named export 'json' not found. The requested module 'body-parser' is a CommonJS module, which may not support all module.exports as named exports.
[0] CommonJS modules can always be imported via the default export, for example using:
[0]
[0] import pkg from 'body-parser';
[0] const { json, urlencoded } = pkg;
[0]
[0]     at ModuleJob._instantiate (node:internal/modules/esm/module_job:182:21)
[0]     at async ModuleJob.run (node:internal/modules/esm/module_job:266:5)
[0]     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
[0]     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
[0]
[0] Node.js v22.16.0
[0] npm run dev:server exited with code 1
[1] Port 5173 is in use, trying another one...
[1]
[1]   VITE v7.1.5  ready in 619 ms
[1]
[1]   ➜  Local:   http://localhost:5174/
[1]   ➜  Network: use --host to expose

import { post } from 'axios';
import { createHmac } from 'crypto'; // Để tạo mã hash
import cors from 'cors'; // Để xử lý CORS từ frontend
import PayOS from '@payos/node';

const app = express();
// WHY 5000, 5000 OR 3030
const PORT = process.env.PORT || 5000;

// what de heo is that
const payOS = new PayOS(
    process.env.PAYOS_CLIENT_ID,
    process.env.PAYOS_API_KEY,
    process.env.PAYOS_CHECKSUM_KEY
    //PAYOS_BASE_URL = process.env.PAYOS_BASE_URL
);

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