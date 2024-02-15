
var noDeleteEditor = document.getElementById('noDeleteEditor');
var draftModeToggle = document.getElementById('draftModeToggle');

draftModeToggle.addEventListener('change', function() {
  noDeleteEditor.onkeydown = this.checked ? function(event) {
    if ((event.key === 'Backspace' || event.key === 'Delete') && !event.altKey) {
      event.preventDefault();
    }
  } : null;
});

// Adjust the textarea height to fit the content
function resizeTextarea() {
  var expectedHeight = window.innerHeight - noDeleteEditor.offsetTop - 20; // 20px for bottom margin
  noDeleteEditor.style.height = expectedHeight + 'px';
}

// Call the resize function on page load and window resize
window.addEventListener('load', resizeTextarea);
window.addEventListener('resize', resizeTextarea);


// existing script content

var noDeleteEditor = document.getElementById('noDeleteEditor');
var wordCount = document.getElementById('wordCount');

// Function to update word count
function updateWordCount() {
  var words = noDeleteEditor.value.trim().split(/\s+/).filter(function(word) {
    return word.length > 0;
  }).length;
  wordCount.textContent = 'Words: ' + words;
}

// Update word count on input
noDeleteEditor.addEventListener('input', updateWordCount);

// Function to copy text
function copyText() {
    var copyButton = document.querySelector('.copy-button');
    var copyIcon = copyButton.querySelector('.copy-icon');
    var checkIcon = copyButton.querySelector('.check-icon');
    var buttonText = copyButton.querySelector('.button-text');  
    // Copy the text
    noDeleteEditor.select();
    document.execCommand('copy');
    noDeleteEditor.blur(); // To deselect the text
  
    // Change button text
    copyButton.textContent = 'Copied!';
    
    // Optional: Change back to original text after a delay
    setTimeout(function() {
      copyButton.innerHTML = '<i class="copy-icon">⎘</i> Copy text'; // Include the icon HTML
    }, 2000); // Change '2000' to however many milliseconds you want
  }
  

// Call updateWordCount to initialize the word count on page load
updateWordCount();
