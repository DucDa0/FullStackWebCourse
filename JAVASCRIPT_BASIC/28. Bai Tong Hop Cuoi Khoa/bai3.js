// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

const path=require('path');
function getExtensionFilename(filename) {
  // viết code ở đây.
  return path.extname(filename).slice(1);
}
