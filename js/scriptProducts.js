var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

function replyClick (clickedId) {
  modal.style.display = 'block';
  modalImg.src = document.getElementById(clickedId).src
  captionText.innerHTML = document.getElementById(clickedId).alt;
}

var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
