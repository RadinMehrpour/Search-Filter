let myInput = document.querySelector('.wrapper input');
let allListItems = document.querySelectorAll('.wrapper ul li');
let wrapperList = document.querySelector('.wrapper ul');

      for (let i = 0; i < allListItems.length; i++) {
        allListItems[i].addEventListener('click', function () {
          myInput.value = this.innerHTML.trim();
          wrapperList.style.display = 'none';
        });
      }

      myInput.addEventListener('click', function () {
        wrapperList.style.display = 'block';
      });

      myInput.addEventListener('keyup', function () {
        for (let i = 0; i < allListItems.length; i++) {
          if (
            allListItems[i].innerHTML.trim().startsWith(myInput.value.trim())
          ) {
            allListItems[i].style.display = 'block';
          } else {
            allListItems[i].style.display = 'none';
          }
        }
      });