const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Sample data
const items = [
    { name: "John Doe", category: "Person" },
    { name: "Jane Smith", category: "Person" },
    { name: "Lorem Ipsum", category: "Fictional Character" },
    { name: "Alice Wonderland", category: "Fictional Character" },
    { name: "Bob Ross", category: "Artist" },
    { name: "Emily Dickinson", category: "Poet" },
    { name: "Harry Potter", category: "Fictional Character" },
    { name: "Luna Lovegood", category: "Fictional Character" },
    { name: "Steve Jobs", category: "Innovator" },
    { name: "Marie Curie", category: "Scientist" },
    { name: "Gandalf the Grey", category: "Fictional Character" },
    { name: "Mona Lisa", category: "Artwork" },
    { name: "Sherlock Holmes", category: "Fictional Character" },
    { name: "Ada Lovelace", category: "Computer Scientist" },
    { name: "Leonardo da Vinci", category: "Artist" },
    { name: "Hermione Granger", category: "Fictional Character" },
    { name: "Vincent van Gogh", category: "Artist" },
    { name: "Bilbo Baggins", category: "Fictional Character" },
    { name: "Pablo Picasso", category: "Artist" },
    { name: "Elizabeth Bennet", category: "Fictional Character" },
];

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to search/filter items
app.get('/search', (req, res) => {
    const { name, category } = req.query;
    let filteredItems = items;

    if (name) {
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (category) {
        filteredItems = filteredItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    res.json(filteredItems);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
