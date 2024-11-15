document.getElementById('profileImageUpload').addEventListener('change', function(event) {
    const preview = document.getElementById('profileImagePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';  // Show the image preview
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';  // Hide if no file is chosen
    }
});
