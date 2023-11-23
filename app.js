document.addEventListener('DOMContentLoaded', function () {
  const notificationBell= document.getElementById('notification-bell');
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
  
  document.addEventListener('DOMContentLoaded', function(){
    const userName = document.getElementById('user-name');
    const profileDrop = document.getElementById('profile');

    userName.addEventListener('click', function() {
      const isOpen = profileDrop.style.display === 'block';

      profileDrop.style.display = isOpen ? 'none' : 'block';
      userName.setAttribute('aria-expanded', !isOpen);

      if(!isOpen){
        profileDrop.focus();
      }
    })

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape'){
        profileDrop.style.display = 'none';
        userName.setAttribute('aria-expanded', 'false');
      }
    })

    document.addEventListener('click', function (event){
      if(!userName.contains(event.target)&& !profileDrop.contains(event.target)){
        profileDrop.style.display = 'none';
        userName.setAttribute('aria-expanded', 'true');
      }
    });
  });

  function closeAlert(){
    const subscrption = document.getElementById('alert-subscription')
    subscrption.style.display = 'none';
  }