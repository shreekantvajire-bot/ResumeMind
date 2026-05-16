// ============================================================
// RESUMEMIND AI - SERVER.JS (BACKEND)
// ============================================================

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Serve Static Frontend Files (HTML, CSS, JS, Images)
// Assuming your HTML files are in the same root directory
app.use(express.static(__dirname));

// =========================================
// API ROUTES (Foundation for future AI)
// =========================================

// Test Route
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'ResumeMind AI Server is running flawlessly! 🚀' 
    });
});

// Future Route for OpenAI Generation
app.post('/api/generate-summary', async (req, res) => {
    try {
        const { role, skills, experienceLevel } = req.body;
        
        // TODO: Connect OpenAI API here later
        // const openaiResponse = await openai.chat.completions.create({...})
        
        res.json({
            success: true,
            summary: `This is a placeholder AI response for a ${role} with skills in ${skills}.`
        });
    } catch (error) {
        console.error("AI Generation Error:", error);
        res.status(500).json({ success: false, message: "Failed to generate AI content." });
    }
});

// =========================================
// DEFAULT CATCH-ALL ROUTE
// =========================================
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n=========================================`);
    console.log(`🚀 ResumeMind AI Server Started!`);
    console.log(`🌐 Running on: http://localhost:${PORT}`);
    console.log(`=========================================\n`);
});
