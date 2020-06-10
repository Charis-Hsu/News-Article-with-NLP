
function checkForUrl(url) {
const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if (!pattern.test(url)) {
  alert("Please enter a valid URL.");
  return false;
} else {
  return true;
}

}

export { checkForUrl }
