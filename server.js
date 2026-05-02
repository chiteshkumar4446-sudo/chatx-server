const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

// Ye check karne ke liye ki server live hai
app.get('/', (req, res) => {
    res.send("ChatX Global Backend is running 24/7! 🔥");
});

// Real OTP Send karne ka system (Yahan Fast2SMS ya Twilio ka API lagega)
app.post('/send-otp', async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit random OTP

    console.log(`Sending OTP ${otp} to ${phone}`);

    // Abhi ke liye ye bas success dikhayega, 
    // jab tu Fast2SMS API key lega tab yahan real SMS logic aayega.
    res.json({
        success: true,
        message: "OTP trigger ho gaya hai!",
        otp: otp // Testing ke liye hum OTP response mein bhej rahe hain
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});
