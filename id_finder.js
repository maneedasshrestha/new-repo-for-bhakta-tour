function queryString(url) {
    const str1 = url.split('?')[1];
    const params = {};

    if (str1) {
        const pairs = str1.split('&');
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            // Decode the URI components
            params[key] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
    }

    return params;
}

// Get the current URL from the browser
const currentUrl = window.location.href;
const result = queryString(currentUrl);
console.log(result);


// // code to find the id of the herritage and extract the id of the extracted id from the supabase datbase

const db = supabase.createClient('https://ucltnbpxulzkyuceesmd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbHRuYnB4dWx6a3l1Y2Vlc21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzUwNTgxMiwiZXhwIjoyMDQ5MDgxODEyfQ.GHLORCjGhJkN8PzCwyxDLR0mDMVEwlQA2PUQ-lp8ceU')

const { data, error } = await db.from('Heritages').select('*').eq('id', result.id)

console.log(data)
console.log(data[0].title)
document.querySelector('.location-name').textContent = data[0].title;
document.querySelector('#overview').textContent = data[0].overview;
document.querySelector('#main-description').textContent = data[0].details;
document.getElementById('background-img').setAttribute( "src", data[0].image );

// async function fetchData() {
//     try {
//         const { data, error } = await supabase
//             .from('Heritages')  // Replace with your table name
//             .select('*');  // Replace '*' with specific columns if needed

//         if (error) {
//             console.error('Error fetching data:', error);
//             return;
//         }

//         // Display fetched data
//         document.getElementById('fetchedData').textContent = JSON.stringify(data, null, 2);
//     } catch (err) {
//         console.error('Error in fetchData function:', err);
//     }
// }