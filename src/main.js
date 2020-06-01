function appendElementToAPP({ tag = "div", content = "" }) {
  const appEle = document.getElementById("app");
  const newEle = document.createElement(tag);
  newEle.innerHTML = content;
  appEle.append(newEle);
}

appendElementToAPP({
  tag: "div",
  content: `append content by js on ${new Date().toUTCString()}`,
});
