// - Foreground script -
import createFeaturesMenu from './scripts/features.js';
import { setStorage} from './scripts/utils.js';

// -- Features Menu --
const features = createFeaturesMenu();
const body = document.getElementsByTagName('body');
body[0].appendChild(features);

const showFeatures = (e, selection = null) => {

  // menu appears differently for highlight VS right click
  if (selection) {
    const {right, top} = selection.getRangeAt(0).getBoundingClientRect()
    const pageLeft = document.documentElement.scrollLeft
    const pageTop = document.documentElement.scrollTop
    features.style.left = `${(right + pageLeft) - 1}px`
    features.style.top = `${(top + pageTop) - features.offsetHeight - 3}px`
  } else {
    features.style.left = `${e.pageX + 1}px`
    features.style.top = `${e.pageY - features.offsetHeight - 5}px`
  }
  features.style.visibility = 'visible';
};

const hideFeatures = () => {
  features.style.visibility = 'hidden';
}

// -- Validate Selection --
// validate and save selection
const validateSelection = () => {

  let selection = null;

  console.log('active element:', document.activeElement.tagName)
  const activeElement = document.activeElement.tagName
  if (activeElement === 'INPUT' || activeElement === 'TEXTAREA') {
    return;
  }
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
  const selection = validateSelection()
  if (selection) {
    showFeatures(event, selection);
  } else {
    hideFeatures();
  }
});

window.addEventListener('contextmenu', (event) => {
  showFeatures(event);
})