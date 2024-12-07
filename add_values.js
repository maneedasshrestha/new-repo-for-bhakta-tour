

const db = supabase.createClient('https://ucltnbpxulzkyuceesmd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbHRuYnB4dWx6a3l1Y2Vlc21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzUwNTgxMiwiZXhwIjoyMDQ5MDgxODEyfQ.GHLORCjGhJkN8PzCwyxDLR0mDMVEwlQA2PUQ-lp8ceU')


console.log(db)


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

    const { data, error } =  db.from('Heritages').insert(updatedData).then(() => {
      if(!error){
        alert('Data Added Successfully');
    
    }else{
        alert('Data not added');
    }
    });
});

