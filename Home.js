<script>
function toggleDropdown() {
  const content = document.getElementById("dropdownContent");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Optional: Close dropdown when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
};
</script>
