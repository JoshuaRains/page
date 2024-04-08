document.getElementById('toggle-btn').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-container');
    var toggleButton = document.querySelector('.sidebar-toggle');
    if (sidebar.style.width === '0%') {
        sidebar.style.width = '10%'; // Open sidebar
        toggleButton.style.left = '10%'; // Move button
        mainContent.style.marginLeft = '10%'; // Adjust main content margin
        mainContent.style.width = '90%'; // Adjust main content width
    } else {
        sidebar.style.width = '0%'; // Close sidebar
        toggleButton.style.left = '0%'; // Keep button visible
        mainContent.style.marginLeft = '0%'; // Adjust main content margin
        mainContent.style.width = '100%'; // Expand main content to full width
    }
});

document.getElementById('wheel').addEventListener('click', function() {
    document.getElementById('content-frame').src = 'wheelIPA.html';
});

document.getElementById('IPAVowelsEssay').addEventListener('click', function() {
    document.getElementById('content-frame').src = 'IPAVowelsEssay.html';
});
