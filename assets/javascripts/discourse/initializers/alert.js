export default {
  name: 'alert',
  initialize() {
    function runMessageBox() {
      alert('Button Test');
    }
    document.addEventListener("DOMContentLoaded", function() {
      const button = document.querySelector('.match-tab');
      if (button) {
        button.addEventListener('click', runMessageBox);
      }
    });
  }
};
