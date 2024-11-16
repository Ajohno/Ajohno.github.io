// This is the JavaScript file to load the Sidebar component onto each of the pages

class SidebarLoader {
  static loadSidebar(containerId, sidebarFile = '/Components/sidebar.html') {
      fetch(sidebarFile)
          .then(response => response.text())
          .then(data => {
              document.getElementById(containerId).innerHTML = data;
          })
          .catch(error => console.error('Error loading sidebar:', error));
  }
}

// Automatically load the sidebar if the container exists
document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
      SidebarLoader.loadSidebar('sidebar-container');
  }
});
