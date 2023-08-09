const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');
const port = 5001; // Choose another available port

app.use(express.json());
app.use(cors());

app.get('/api/reviews', async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    const { apiKey } = req.query;

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apiKey}&input=DownTo%20The%20Details&inputtype=textquery`
        );

        const data = await response.json();
        console.log("first api fetch: ", data);

        if (data.candidates && data.candidates.length > 0) {
            const placeId = data.candidates[0].place_id;
            const detailsResponse = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}&fields=reviews`
            );

            const detailsData = await detailsResponse.json();

            if (detailsData.result && detailsData.result.reviews) {
                const reviews = detailsData.result.reviews;

                // Log the reviews data received on the server-side before sending to the client
                console.log('Reviews data on the server-side:', reviews);

                res.json(reviews); // Send the reviews data to the client
                return;
            }
        }

        res.json([]); // Return an empty array if no reviews are found
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


