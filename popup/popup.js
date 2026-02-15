
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: "GET_DATA" }, (response) => {
    document.getElementById("productName").textContent = response.value;
  });
});
