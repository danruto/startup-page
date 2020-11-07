(function () {
    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        if (response.ok) {
            // Update DOM elements
            // quote.textContent = data.content;
            // cite.textContent = data.author;
            document.getElementById('txt').textContent = data.content;
        } else {
            quote.textContent = 'An error occured';
            console.log(data);
        }
    }

    updateQuote();
})();
