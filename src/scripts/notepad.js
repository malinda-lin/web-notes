/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

// TODO: set up noteids
let noteId = 0;

const closeNote = (note, icon) => {
  note.style.visibility = 'hidden';
  icon.style.visibility = 'visible';
};

const deleteNote = (body, note, icon) => {
  body.removeChild(note);
  body.removeChild(icon);
};

const showNote = (note, icon) => {
  note.style.visibility = 'visible';
  icon.style.visibility = 'hidden';
};

export const createNote = (x, y) => {
  // create an open sticky note
  const body = document.querySelector('body');
  const note = document.createElement('div');
  const noteTextArea = document.createElement('textarea');
  const closeButton = document.createElement('button');
  const closeButtonIcon = document.createElement('img');
  const deleteButton = document.createElement('button');
  const deleteButtonIcon = document.createElement('img');
  const noteIconContainer = document.createElement('button');
  const noteIcon = document.createElement('img');

  note.id = `note-${(noteId += 1)}`;

  note.className = 'sticky-notes';
  noteTextArea.className = 'note-textarea';
  closeButton.className = 'edit-icon-container';
  closeButtonIcon.className = 'edit-icon';
  deleteButton.className = 'edit-icon-container';
  deleteButtonIcon.className = 'edit-icon';
  noteIconContainer.className = 'note-icon-container';
  noteIcon.className = 'note-icon';

  body.appendChild(note);
  note.appendChild(noteTextArea);
  note.appendChild(closeButton);
  note.appendChild(deleteButton);
  closeButton.appendChild(closeButtonIcon);
  deleteButton.appendChild(deleteButtonIcon);
  body.appendChild(noteIconContainer);
  noteIconContainer.appendChild(noteIcon);

  closeButtonIcon.src = 'https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png';
  deleteButtonIcon.src = 'https://img.icons8.com/fluent-systems-filled/24/000000/trash.png';
  noteIcon.src = 'https://img.icons8.com/wired/64/000000/note.png';

  closeButton.addEventListener('click', () => {
    closeNote(note, noteIconContainer);
  });
  deleteButton.addEventListener('click', () => {
    deleteNote(body, note, noteIconContainer);
  });
  noteIconContainer.addEventListener('click', () => {
    showNote(note, noteIconContainer);
  });

  note.style.left = `${x}px`;
  note.style.top = `${y}px`;
  noteIconContainer.style.left = `${x}px`;
  noteIconContainer.style.top = `${y}px`;
};
