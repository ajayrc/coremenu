// menu event handlers
function parentNodeSelected($node) {
  // show all child nodes under selected menu item
  const childrenContainer = $node.querySelector(
    ".menu__child-container"
  );
  const isActive = $node.attributes.active;
  if (isActive) {
    childrenContainer.style.display = "none";
    $node.attributes.active = false;
  } else {
    $node.attributes.active = true;
    childrenContainer.style.display = "block";
  }
}

// show alert
function submenuNodeSelected($childNode) {
  alert($childNode.querySelector(".menu__item").innerText);
}
