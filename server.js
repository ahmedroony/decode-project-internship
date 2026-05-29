const express = require('express');
const app = express();
app.use(express.json());
//get req
app.get('/users', (req, res) => {
    res.status(200).json({
        message: "success! here are the users .",
        data: [{
                id: 1,
                name: 'bob'
            },
            {
                id: 2,
                name: "alice"
            }
        ]
    })
});
//post req
app.post('/users', (req, res) => {
    const incomingData = req.body;
    if (!incomingData || !incomingData.name) {
        return res.status(400).json({
            status: "error",
            message: "Bad Request: Please provide a 'name' for the user."
        })
    }
    res.status(201).json({
        message: "new user created successfully",
        receivedData: incomingData
    })
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
});