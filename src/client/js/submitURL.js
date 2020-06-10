import {checkForUrl} from './urlChecker'
function handleSubmitArticle(event) {
  event.preventDefault();
  const url = document.getElementById("test-url").value;
  // const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  const name = document.getElementById("name").value;
  document.getElementById("clientName").innerHTML = `<div>Hi ${name}, Welcome to use NLP </div><br /><br />`;

  fetch("/article", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: url })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("polarity").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML = data.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =
        data.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =
        data.subjectivity_confidence;
      document.getElementById("excerpt").innerHTML = data.text;

    });
    checkForUrl(url)
    // if (!pattern.test(url)) {
    //   alert("Please enter a valid URL.");
    //   return false;
    // } else {
    //   return true;
    // }
}


export { handleSubmitArticle };
