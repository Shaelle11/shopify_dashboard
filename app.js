document.addEventListener('DOMContentLoaded', function () {
  const notificationBell = document.getElementById('notification-bell');
  const notificationMessage = document.getElementById('notification-message');


  // Toggle the dropdown on button 
  notificationBell.addEventListener('click', function () {
    const isOpen = notificationMessage.style.display === 'block';

    notificationMessage.style.display = isOpen ? 'none' : 'block';
    notificationBell.setAttribute('aria-expanded', !isOpen);

    // Set focus on the dropdown 
    if (!isOpen) {
      notificationMessage.focus();
    }
  });

  // Hide the dropdown on Escape key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      notificationMessage.style.display = 'none';
      notificationBell.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', function (event) {
    if (!notificationBell.contains(event.target) && !notificationMessage.contains(event.target)) {
      notificationMessage.style.display = 'none';
      notificationBell.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const userName = document.getElementById('user-name');
  const profileDrop = document.getElementById('profile');

  userName.addEventListener('click', function () {
    const isOpen = profileDrop.style.display === 'block';

    profileDrop.style.display = isOpen ? 'none' : 'block';
    userName.setAttribute('aria-expanded', !isOpen);

    if (!isOpen) {
      profileDrop.focus();
    }
  })

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      profileDrop.style.display = 'none';
      userName.setAttribute('aria-expanded', 'false');
    }
  })

  document.addEventListener('click', function (event) {
    if (!userName.contains(event.target) && !profileDrop.contains(event.target)) {
      profileDrop.style.display = 'none';
      userName.setAttribute('aria-expanded', 'true');
    }
  });
});

function closeAlert() {
  const subscrption = document.getElementById('alert-subscription')
  subscrption.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const dropButton = document.getElementById('drop_btn');
  const setupMenu = document.getElementById('Setup_menu');

  dropButton.addEventListener('click', function () {
    const isOpen = setupMenu.style.display === 'block';
    setupMenu.style.display = isOpen ? 'none' : 'block';
    dropButton.setAttribute('aria-expanded', !isOpen);

    if (!isOpen) {
      setupMenu.focus();
    }
  })
})

function switchImage() {
  const imageContainer = document.getElementById('drop_btn');

  imageContainer.classList.toggle('drop_page_btnclick');
  imageContainer.classList.toggle('drop_page_btn');

}

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = [
    { buttonId: 'drop_menu1', menuId: 'menucontents1' },
    { buttonId: 'drop_menu2', menuId: 'menucontents2' },
    { buttonId: 'drop_menu3', menuId: 'menucontents3' },
    { buttonId: 'drop_menu4', menuId: 'menucontents4' },
    { buttonId: 'drop_menu5', menuId: 'menucontents5' },
    // Add more dropdowns as needed
  ];

  let currentlyOpenDropdown = dropdowns[0]; // Open the first dropdown by default

  function openDropdownWithDelay({ buttonId, menuId }) {
    const dropBtn = document.getElementById(buttonId);
    const menuItem = document.getElementById(menuId);

    setTimeout(function () {
      menuItem.style.display = 'flex';
      dropBtn.style.display = 'none';
      dropBtn.setAttribute('aria-expanded', true);
      currentlyOpenDropdown = { buttonId, menuId };
    }, 500); // 2-second delay
  }

  dropdowns.forEach(({ buttonId, menuId }) => {
    const dropBtn = document.getElementById(buttonId);
    const menuItem = document.getElementById(menuId);

    dropBtn.addEventListener('click', function () {
      const isOpen = menuItem.style.display === 'flex';

      // Close the currently open dropdown with a 1-second delay
      if (currentlyOpenDropdown) {
        const currentButton = document.getElementById(currentlyOpenDropdown.buttonId);
        const currentMenu = document.getElementById(currentlyOpenDropdown.menuId);

        setTimeout(function () {
          currentButton.style.display = 'flex';
          currentMenu.style.display = 'none';
          currentButton.setAttribute('aria-expanded', false);
        }, 500);
      }

      // Open the current dropdown with a 2-second delay only if it's not already open
      if (!isOpen) {
        openDropdownWithDelay({ buttonId, menuId });
      }

      if (!isOpen) {
        menuItem.focus();
      }
    });

    // Open the first dropdown by default
    if (currentlyOpenDropdown && currentlyOpenDropdown.buttonId === buttonId) {
      openDropdownWithDelay({ buttonId, menuId });
    }
  });
});

function handleImageClick() {
  const image = document.getElementById('imageCheckbox');
  image.classList.toggle('checkbox');
  image.classList.toggle('.check_active');
  Checked();
}

function Checked() {
  const image = document.getElementById('imageCheckbox');  
  image.classList.toggle('CheckedImage');
  image.classList.toggle('check_active');
}



// document.addEventListener('DOMContentLoaded', function () {
//   const dropBtn = document.getElementById('drop_menu1');
//   const menuItem = document.getElementById('menucontents1');

//   dropBtn.addEventListener('click', function () {
//     const isOpen = menuItem.style.display === 'flex'
//     menuItem.style.display = isOpen ? 'none' : 'flex';
//     const isClose = dropBtn.style.display === 'none';
//     dropBtn.style.display = isClose ? 'flex' : 'none';
//     dropBtn.setAttribute('aria-expanded', !isOpen);

//     if (!isOpen) {
//       menuItem.focus();
//     }
//   })
  
// })
// document.addEventListener('DOMContentLoaded', function () {
//   const dropBtn = document.getElementById('drop_menu2');
//   const menuItem = document.getElementById('menucontents2');

//   dropBtn.addEventListener('click', function () {
//     const isOpen = menuItem.style.display === 'flex'
//     menuItem.style.display = isOpen ? 'none' : 'flex';
//     const isClose = dropBtn.style.display === 'none';
//     dropBtn.style.display = isClose ? 'flex' : 'none';
//     dropBtn.setAttribute('aria-expanded', !isOpen);

//     if (!isOpen) {
//       menuItem.focus();
//     }
//   })
  
// })
// function togglDropdown(dropdownId){
//   const dropdownContent = document.getElementById(dropdownId);

//   const allDropdowns = document.querySelectorAll('.menu_contents');
//   allDropdowns.forEach((dropdown) => {
//     if (dropdown.id !== dropdownId){
//       dropdown.style.display = 'none';
//     }
//   })

//   dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

// }


// document.addEventListener('DOMContentLoaded', function () {
//   const unchecked = document.getElementById('checkbox');
//   const checked = document.getElementById('checked');

//   unchecked.addEventListener('click', function () {
//     const isclicked = checked.style.display === 'flex';
//     checked.style.display = isclicked ? 'none' : 'flex';
//     const isclickedagain = 
//     dropBtn.setAttribute('aria-expanded', !isOpen);

//     if (!isOpen) {
//       menuItem.focus();
//     }
//   })
  
// })


// function togglDropdown(dropdownId){
//   const dropdownContent = document.getElementById(dropdownId);

//   const allDropdowns = document.querySelectorAll('.menu_contents');
//   allDropdowns.forEach((dropdown) => {
//     if (dropdown.id !== dropdownId){
//       dropdown.style.display = 'none';
//     }
//   })

//   dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

// }
// function toggleDropdown(id) {
//   const dropdown = document.getElementById(id);
//   dropdown.classList.toggle('open');
// }

// function handleCheckboxClick(checkbox) {
//   checkbox.classList.add('loading');

//   // Simulate a delay (0.5 seconds) for the buffering effect
//   setTimeout(() => {
//     checkbox.classList.toggle('checked');
//     checkbox.setAttribute('data-checked', checkbox.classList.contains('checked'));
//     checkbox.classList.remove('loading');
//   }, 500); // 0.5 seconds delay for the buffering effect
// }

