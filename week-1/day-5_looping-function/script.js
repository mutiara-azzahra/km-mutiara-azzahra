// event ada yg secara otomatis ada yg tidak secara otomatis
// onload pas di load
// onclick saat kita klik
// onchange saat kita ubah
// onmouseenter saat kita
// event harus dipanggil supaya function bisa jalan

function changeWord(selectedText, changeText, text) {
  const newText = text.split(selectedText).join(changeText);

  return newText;
}

const kalimat1 = "Andini sangat mencintaimu selamanya";
const kalimat2 = "Gunung semeru yg dihilangkan";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("semeru", "bromo", kalimat2));

// do while, looping, function, function with return
