function changeTab(tabNumber) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content .content');
  tabContents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Show the selected tab content
  var selectedContent = document.getElementById('content' + tabNumber);
  selectedContent.style.display = 'block';
}
