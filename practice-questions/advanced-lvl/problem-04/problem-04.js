// Problem 4: Persistent Notes Application
// Objective:
// Build a notes application where data persists after refresh.

// Requirements:
// Add, edit, and delete notes
// Save notes to localStorage
// Load notes on page load
// Serialize and deserialize data using JSON.stringify / JSON.parse

// Handle edge cases:
// Empty storage
// Corrupt or invalid stored data

// Expected Outcome:
// Notes persist across refreshes
// App does not crash with invalid storage data
// Smooth user experience

// STATE-MANAGEMENT
const STORAGE_KEY = "app_notes_v1";
let notes = [];

// Helper: Generate unique ID
const generatedId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

const loadNotes = () => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
      notes = [];
      return;
    }

    const parseData = JSON.parse(storedData);

    if (!Array.isArray(parseData)) {
      throw new Error("Invalid data formate");
    }

    notes = parseData;
  } catch (error) {
    console.error("Error loading notes:", error);
    notes = [];
    alert("Warning: saved notes were corrupt and have been reset.");
  }
};

const savedNotes = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Storage full or error:", error);
    alert("Failed to save notes, localstorage might be full");
  }
};

// CRUD OPERATIONS
const addNote = (text) => {
  if (!text.trim()) return alert("Please write something");

  const newNote = {
    id: generatedId(),
    text: text.trim(),
    date: new Date().toLocaleDateString(),
    isEditing: false,
  };

  notes.unshift(newNote);
  savedNotes();
  render();
};

// Delete note
const deleteNote = (id) => {
  if (confirm("Are you sure you want to delete this notes??")) {
    notes = notes.filter((note) => note.id !== id);
    savedNotes();
    render();
  }
};

// edit note
const editNote = (id) => {
  const note = notes.find((n) => n.id === id);
  if (note) {
    note.isEditing = !note.isEditing;
    // We don't save to LS here strictly, usually UI state is transient,
    // but saving ensures if they refresh while editing, it resets (safe default).
    render();
  }
};

// save the edited text
const saveEditedNote = (id, newText) => {
  const note = notes.find((n) => n.id === id);
  if (note) {
    note.text = newText.trim();
    note.isEditing = false;
    savedNotes();
    render();
  }
};

// Rendering
const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const render = () => {
  const grid = document.getElementById("notes-grid");

  if (notes.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">No notes yet. Add one above</p>`;
    return;
  }

  grid.innerHTML = notes
    .map((note) =>
      // Logic: If in editing mode, show textarea. If not, show text.
      note.isEditing
        ? `
        <div class="note-card" data-id="${note.id}">
            <div class="timestamp">Editing...</div>
            <textarea class="note-textarea">${note.text}</textarea>
            <div class="card-footer">
                <button class="btn save-btn action-save">Save</button>
                <button class="btn danger-outline action-cancel">Cancel</button>
            </div>
        </div>
        `
        : ` <div class="note-card" data-id="${note.id}">
            <div class="timestamp">${note.date}</div>
            <div class="note-content">${escapeHtml(note.text)}</div>
            <div class="card-footer">
                <button class="btn warning action-edit">Edit</button>
                <button class="btn danger action-delete">Delete</button>
            </div>
        </div>
        `,
    )
    .join(" ");
};

// Event listeners
const init = () => {
  const addBtn = document.getElementById("add-btn");
  const input = document.getElementById("note-input");
  const grid = document.getElementById("notes-grid");
  const clearBtn = document.getElementById("clear-all-btn");

  // add note
  addBtn.addEventListener("click", () => {
    addNote(input.value);
    input.value = "";
  });

  // clear all notes
  clearBtn.addEventListener("click", () => {
    if (confirm("Delete all notes? This cannot be undone")) {
      notes = [];
      savedNotes();
      render();
    }
  });

  // Event Delegation for Dynamic Items (Edit/Delete/Save/Cancel)
  grid.addEventListener("click", (e) => {
    const target = e.target;
    const card = target.closest(".note-card");
    if (!card) return;

    const id = card.dataset.id;

    if (target.classList.contains("action-delete")) {
      deleteNote(id);
    }

    if (target.classList.contains("action-edit")) {
      editNote(id);
    }

    if (target.classList.contains("action-cancel")) {
      editNote(id);
    }

    if (target.classList.contains("action-save")) {
      const textarea = card.querySelector(".note-textarea");
      saveEditedNote(id, textarea.value);
    }
  });
};

// App Start
document.addEventListener("DOMContentLoaded", () => {
  loadNotes();
  render();
  init();
});
