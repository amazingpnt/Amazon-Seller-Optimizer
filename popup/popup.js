
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: "GET_PRODUCT_NAME" }, (response) => {
    const nameEl = document.getElementById("productName");
    nameEl.textContent += response && response.value ? response.value : "";
  });
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: "GET_SELLER_NAME" }, (response) => {
    const sellerEl = document.getElementById("sellerName");
    sellerEl.textContent += response && response.value ? response.value : "";
  });
});

