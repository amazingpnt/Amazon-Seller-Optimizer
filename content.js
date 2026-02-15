chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_DATA") {
    const text = document.getElementById("productTitle").textContent;
    sendResponse({ value: text });
  }
});

