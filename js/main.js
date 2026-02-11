let myInput = document.querySelector('.wrapper input');
let allListItems = document.querySelectorAll('.wrapper ul li');
let wrapperList = document.querySelector('.wrapper ul');

for (let i = 0; i < allListItems.length; i++) {
  allListItems[i].addEventListener('click', function () {
    myInput.value = this.innerText.trim();
    wrapperList.style.display = 'none';
  });
}

myInput.addEventListener('click', function () {
  wrapperList.style.display = 'block';
});

myInput.addEventListener('keyup', function () {

  let inputValue = myInput.value.trim().toLowerCase();

  for (let i = 0; i < allListItems.length; i++) {

    let itemText = allListItems[i].innerText.trim().toLowerCase();

    if (itemText.includes(inputValue)) {
      allListItems[i].style.display = 'block';
    } else {
      allListItems[i].style.display = 'none';
    }
  }
});