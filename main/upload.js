document.getElementById('artFile').addEventListener('change', function(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];
    
    // Clear previous preview or message
    imagePreview.innerHTML = '';

    // Validate the file type and create the preview
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.textContent = 'Please select a valid image file.';
    }
});
