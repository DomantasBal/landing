let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
let searchbarSection = document.getElementById('searchbar-section');

searchIcon.onclick = function () {
  if (
    searchbarSection.style.display === 'none' ||
    searchbarSection.style.display === ''
  ) {
    searchbarSection.style.display = 'block';
  } else {
    searchbarSection.style.display = 'none';
  }
};

function searchNode(node, query) {
  let matches = [];
  if (node.nodeType === 3) {
    if (node.nodeValue.toLowerCase().includes(query.toLowerCase())) {
      matches.push(node);
    }
  } else if (
    node.nodeType === 1 &&
    node.childNodes &&
    node.tagName.toUpperCase() !== 'SCRIPT' &&
    node.tagName.toUpperCase() !== 'STYLE'
  ) {
    for (let i = 0; i < node.childNodes.length; i++) {
      matches = matches.concat(searchNode(node.childNodes[i], query));
    }
  }
  return matches;
}

function clearHighlights() {
  let highlights = document.querySelectorAll('.highlight-text');
  highlights.forEach((highlight) => {
    let parent = highlight.parentNode;
    while (highlight.firstChild) {
      parent.insertBefore(highlight.firstChild, highlight);
    }
    parent.removeChild(highlight);
  });
}

searchButton.onclick = function () {
  clearHighlights();

  let query = searchInput.value.trim();
  if (query) {
    console.log('Searching for:', query);

    let matches = searchNode(document.body, query);

    console.log('Found matches:', matches.length);

    matches.forEach((node) => {
      let highlight = document.createElement('span');
      highlight.className = 'highlight-text';
      highlight.style.backgroundColor = 'yellow';
      node.parentNode.replaceChild(highlight, node);
      highlight.appendChild(node);
    });

    if (matches.length > 0) {
      matches[0].parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
};
