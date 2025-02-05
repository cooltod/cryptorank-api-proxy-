const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.CRYPTO_RANK_API_KEY; // Secure API key

app.get("/", (req, res) => {
    res.send("Welcome to CryptoVilla API Proxy!");
});

// Fetch Airdrops
app.get("/airdrops", async (req, res) => {
    try {
        let response = await fetch(`https://api.cryptorank.io/v1/airdrops?api_key=${API_KEY}`);
        let data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch airdrops" });
    }
});

// Fetch News
app.get("/news", async (req, res) => {
    try {
        let response = await fetch(`https://api.cryptorank.io/v1/news?api_key=${API_KEY}`);
        let data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));