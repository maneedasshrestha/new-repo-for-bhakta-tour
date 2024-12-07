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
// console.log(result);

const db = supabase.createClient('https://ucltnbpxulzkyuceesmd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbHRuYnB4dWx6a3l1Y2Vlc21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzUwNTgxMiwiZXhwIjoyMDQ5MDgxODEyfQ.GHLORCjGhJkN8PzCwyxDLR0mDMVEwlQA2PUQ-lp8ceU')


// console.log(db)

const qrCanvas = document.getElementById('qr-code');
const currentURL = window.location.href;

const requiredURl="https://maneedasshrestha.github.io/Bhakta_Tour/attraction.html?id="+result.id
console.log(requiredURl)

// Generate QR code for the current URL
QRCode.toCanvas(qrCanvas, requiredURl, {
    width: 300,
    margin: 2,
    color: {
        dark: "#000000",
        light: "#ffffff"
    }
}, function (error) {
    if (error) console.error(error);
});

// Function to download the QR code as an image
function downloadQR() {
    const link = document.createElement('a');
    link.href = qrCanvas.toDataURL('image/png');
    link.download = 'qr-code.png';
    link.click();
}

// Function to share the URL
async function shareURL() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Check this out!',
                url: currentURL
            });
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        alert('Sharing is not supported on this browser.');
    }
}


// // code to find the id of the herritage and extract the id of the extracted id from the supabase datbase

async function fetchData() {
    const { data, error } = await db.from('Heritages').select('*').eq('id', result.id);
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }
    if (data.length > 0) {
        var image = document.getElementById('image-url');
        image.setAttribute('value', data[0].image);
        image.value = image.getAttribute('value');

        var herritage_name = document.getElementById('heritage-name');
        herritage_name.setAttribute('value', data[0].title);
        herritage_name.value = herritage_name.getAttribute('value');

        var description = document.getElementById('description');
        description.setAttribute('value', data[0].details);
        description.value = description.getAttribute('value');

        var overview = document.getElementById('overview');
        overview.setAttribute('value', data[0].overview);
        overview.value = overview.getAttribute('value');
    }
}

fetchData();

document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    
    // Capture form values
    const form = event.target; // The form element
    const formData = new FormData(form); // Creates a FormData object from the form
    
    // Extract individual values
    const image_url = formData.get('image-url'); // Get value of 'name' input
    const heritage_name = formData.get('heritage-name'); // Get value of 'email' input
    const overview = formData.get('overview'); // Get value of 'email' input
    const description = formData.get('description'); // Get value of 'email' input

    // const age = formData.get('age'); // Get value of 'age' input
    

    const updatedData = {
        title: heritage_name,
        overview: overview,
        details: description,
        image: image_url,
       
    };

    const { data, error } =  await db.from('Heritages').update(updatedData).eq('id', result.id);

    if (error) {
        console.error('Error updating data:', error);
    } else {
        console.log('Data updated successfully:', data);
    }
});
