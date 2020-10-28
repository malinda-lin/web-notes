import { getStorage } from './utils.js';

const createFeaturesMenu = () => {
  const container = document.createElement('div');
  const highlightFeat = document.createElement('button');
  const notepadFeat = document.createElement('button');
  const highlightIcon = document.createElement('img');
  const notepadIcon = document.createElement('img');

  container.id = 'features-container';
  highlightFeat.id = 'highlight-feat';
  notepadFeat.id = 'notes-feat';

  // TODO: why doesnt getURL work?
  // highlightIcon.src = chrome.runtime.getURL('images/icons8-chisel-tip-marker-30.png');
  // notepadIcon.src = chrome.runtime.getURL('images/icons8-spiral-notepad-48.png');

  highlightIcon.src = "https://img.icons8.com/fluent-systems-regular/48/000000/chisel-tip-marker.png";
  notepadIcon.src = "https://img.icons8.com/dotty/80/000000/notepad.png";

  highlightFeat.className = 'feature-button';
  notepadFeat.className = 'feature-button';
  highlightIcon.className = 'icon';
  notepadIcon.className = 'icon';

  container.appendChild(highlightFeat);
  container.appendChild(notepadFeat);
  highlightFeat.appendChild(highlightIcon);
  notepadFeat.appendChild(notepadIcon);

  highlightFeat.addEventListener('click', () => {
    const selection = getStorage('selection')
    if (selection) {
      // TODO: create a highlight
    } else {
      // TODO: show warning tooltip for user
      alert('!warn: highlight something with your mouse first');
    }
  });

  notepadFeat.addEventListener('click', () => {});

  return container;
};

export default createFeaturesMenu;
