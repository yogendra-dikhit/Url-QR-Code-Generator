document.addEventListener("DOMContentLoaded", (event) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let url = tabs[0]?.url;
    if (url) {
      let qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
      document.getElementById(
        "container"
      ).innerHTML = `<img src="${qr}" alt="QR Code"/>`;
    } else {
      document.getElementById("container").innerHTML =
        "<strong>OOPS! Something Went Wrong.</strong>";
    }
  });
});
