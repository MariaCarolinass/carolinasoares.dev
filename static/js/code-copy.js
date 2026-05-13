document.addEventListener("DOMContentLoaded", function() {
  var resetTimers = new WeakMap();

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function(resolve, reject) {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        var successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (successful) {
          resolve();
        } else {
          reject(new Error("copy command failed"));
        }
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function setCopyButtonState(button, copied) {
    button.dataset.copied = copied ? "true" : "false";
    button.textContent = copied ? "Copiado" : "Copiar";
  }

  document.querySelectorAll("pre").forEach(function(pre) {
    if (pre.dataset.copyEnhanced === "true") {
      return;
    }

    var code = pre.querySelector("code");
    if (!code || code.classList.contains("language-mermaid")) {
      return;
    }

    pre.dataset.copyEnhanced = "true";
    pre.classList.add("has-copy-button");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy-button";
    button.setAttribute("aria-label", "Copiar código");
    setCopyButtonState(button, false);

    button.addEventListener("click", function() {
      var text = code.textContent || "";

      copyTextToClipboard(text).then(function() {
        setCopyButtonState(button, true);

        var existingTimer = resetTimers.get(button);
        if (existingTimer) {
          window.clearTimeout(existingTimer);
        }

        var resetTimer = window.setTimeout(function() {
          setCopyButtonState(button, false);
          resetTimers.delete(button);
        }, 1800);

        resetTimers.set(button, resetTimer);
      }).catch(function() {
        setCopyButtonState(button, false);
      });
    });

    pre.insertBefore(button, pre.firstChild);
  });
});
