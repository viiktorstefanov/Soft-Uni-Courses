function notify(message) {
 let notificationElement = document.getElementById('notification');
 notificationElement.textContent = message;
 notificationElement.style.display = "block";

notificationElement.addEventListener('click', () => {
  if(notificationElement.style.display = "block") {
    notificationElement.style.display = "none"
   } else {
    notificationElement.style.display = "block"
   }
})
}