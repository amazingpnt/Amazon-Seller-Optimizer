chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_PRODUCT_NAME") {
    const textEl = document.getElementById("productTitle");
    const text = textEl ? textEl.textContent : "";
    sendResponse({ value: text });
    return; // indicate async response
  }

  if (message.type === "GET_SELLER_NAME") {
    const link = document.querySelector('div[style*="float:left"] > a');
    let seller = "";
    if (link) {
      const aria = link.getAttribute('aria-label');
      if (aria) {
        seller = aria.split('.')[0];
      }
    }
    sendResponse({ value: seller });
    return;
  }
});
