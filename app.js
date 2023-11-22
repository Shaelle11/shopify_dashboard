function myDropdown() {
    document.getElementById("notification-message").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.bell')) {
      var dropdowns = document.getElementsByClassName("notification_message");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }