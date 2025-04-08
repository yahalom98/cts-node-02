const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname,'notes'); 
// Create the notes directory if it doesn't exist
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir);
}

function createNote(title, content) {
  const filePath = path.join(notesDir, `${title}.txt`);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Note "${title}" created.`);
}

function readNote(title) {
  const filePath = path.join(notesDir, `${title}.txt`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(`📝 Content of "${title}":\n${content}`);
  } else {
    console.log(`❌ Note "${title}" not found.`);
  }
}

function listNotes() {
  try {
    const files = fs.readdirSync(notesDir);
    if (files.length === 0) {
      console.log('📂 No notes found.');
    } else {
      console.log('🗂️ Notes:');
      files.forEach((file) => console.log(`- ${file}`));
    }
  } catch (err) {
    console.error('⚠️ Error reading notes directory:', err);
  }
}

function deleteNote(title) {
  const filePath = path.join(notesDir, `${title}.txt`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ Note "${title}" deleted.`);
  } else {
    console.log(`❌ Note "${title}" does not exist.`);
  }
}

// DEMO:
// Comment/uncomment to test
createNote('shopping', 'Milk\nEggs\nBread');
// listNotes();
readNote('shopping');
deleteNote('shopping');
// listNotes();