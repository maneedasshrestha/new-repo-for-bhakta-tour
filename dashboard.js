const db = supabase.createClient(
    'https://ucltnbpxulzkyuceesmd.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbHRuYnB4dWx6a3l1Y2Vlc21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzUwNTgxMiwiZXhwIjoyMDQ5MDgxODEyfQ.GHLORCjGhJkN8PzCwyxDLR0mDMVEwlQA2PUQ-lp8ceU'
);

(async () => {
    const { data, error } = await db.from('Heritages').select('*');
    if (error) {
        console.error('Error fetching data:', error.message);
        return;
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
        console.warn('No data found');
        return;
    }

    const container = document.getElementById('post-card');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    // Clear existing content (optional)
    container.innerHTML = '';

    // Iterate over the data and create list items
    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'post-ittems'; // Add a class for styling
        const redirect = ` https://maneedasshrestha.github.io/Bhakta_Tour/edit_page.html?id=${item.id}`;
        https://maneedasshrestha.github.io/Bhakta-Tour/edit_page.html?id=19
        
        // Create inline content
        listItem.innerHTML = `
        <div class="titles">
            <div class="post-title">${item.title || 'Untitled'}</div>
        </div>
            <a href="${redirect}" class="view-button">View Post</a>
        `;
        
        // Append the list item to the container
        container.appendChild(listItem);
    });
})();

// https://maneedasshrestha.github.io/Bhakta-Tour/add_page.html
// https://maneedasshrestha.github.io/Bhakta-Tour/add_page.html