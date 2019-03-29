var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

function replyClick (clickedId) {
  modal.style.display = 'block';
  modalImg.src = clickedId.src;
  captionText.innerHTML = clickedId.alt;
  console.log(clickedId);
}

var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
