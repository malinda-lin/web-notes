// - Foreground script -
import createFeaturesMenu from './scripts/features.js';
import { setStorage } from './scripts/utils.js';

// -- Features Menu --
const features = createFeaturesMenu();
const body = document.getElementsByTagName('body');
body[0].appendChild(features);

const showFeatures = (e) => {
  features.style.visibility = 'visible';
  features.style.left = `${e.pageX}px`
  features.style.top = `${e.pageY}px`
};

const hideFeatures = () => {
  features.style.visibility = 'hidden';
}

// -- Validate Selection --
// validate and save selection
const validateSelection = () => {
  // TODO: what if selection isnt text, what if selection is inside input element
  let selection = null;
  if (window.getSelection) {
    selection = window.getSelection();
  } else if (document.getSelection) {
    selection = document.getSelection();
  } else if (document.selection) {
    selection = document.selection.createRange();
  }
  if (selection.type !== 'Range') {
    selection = null;
  }

  if (selection) {
    const selectionText = selection.text ? selection.text : selection.toString();
    setStorage('selectionText', selectionText);
  }

  setStorage('selection', selection);
  return selection;
};

// -- Event Listeners --
window.addEventListener('click', (event) => {
  // shows or hides features menu
  if (validateSelection()) {
    showFeatures(event);
  } else {
    hideFeatures();
  }
});
