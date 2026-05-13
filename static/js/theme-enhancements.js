var mermaidDarkMode = null;

function mermaidThemeVariables(isDarkMode) {
  if (isDarkMode) {
    return {
      background: "#1f2937",
      primaryColor: "#111827",
      primaryBorderColor: "rgba(248, 113, 113, 0.72)",
      primaryTextColor: "#e5e7eb",
      secondaryColor: "#0f172a",
      secondaryBorderColor: "#475569",
      secondaryTextColor: "#e5e7eb",
      tertiaryColor: "#0f172a",
      tertiaryBorderColor: "#64748b",
      tertiaryTextColor: "#e5e7eb",
      lineColor: "#cbd5e1",
      textColor: "#e5e7eb",
      mainBkg: "#111827",
      secondBkg: "#0f172a",
      tertiaryBkg: "#0f172a",
      fontFamily: "Lato, sans-serif"
    };
  }

  return {
    background: "#ffffff",
    primaryColor: "#f8fafc",
    primaryBorderColor: "#64748b",
    primaryTextColor: "#0f172a",
    secondaryColor: "#e2e8f0",
    secondaryBorderColor: "#94a3b8",
    secondaryTextColor: "#0f172a",
    tertiaryColor: "#cbd5e1",
    tertiaryBorderColor: "#cbd5e1",
    tertiaryTextColor: "#0f172a",
    lineColor: "#64748b",
    textColor: "#0f172a",
    mainBkg: "#ffffff",
    secondBkg: "#f8fafc",
    tertiaryBkg: "#e2e8f0",
    fontFamily: "Lato, sans-serif"
  };
}

function initializeMermaid(isDarkMode) {
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: mermaidThemeVariables(isDarkMode)
  });
}

function rerenderMermaidDiagrams() {
  document.querySelectorAll('div.mermaid[data-mermaid-source]').forEach(function(node) {
    node.textContent = node.dataset.mermaidSource;
    node.removeAttribute("data-processed");
  });

  mermaid.run({ querySelector: 'div.mermaid[data-mermaid-source]' });
}

function syncDarkBackground() {
  var darkThemeLink = document.getElementById("dark-theme");
  var isDarkMode = darkThemeLink && !darkThemeLink.disabled;

  document.documentElement.classList.toggle("carol-dark-background", isDarkMode);
  return isDarkMode;
}

document.querySelectorAll('pre code.language-mermaid').forEach(function(codeBlock) {
  var parent = codeBlock.parentElement;
  var mermaidText = codeBlock.textContent;
  var mermaidDiv = document.createElement('div');
  mermaidDiv.className = 'mermaid';
  mermaidDiv.dataset.mermaidSource = mermaidText;
  mermaidDiv.textContent = mermaidText;
  parent.parentNode.replaceChild(mermaidDiv, parent);
});

var isDarkMode = syncDarkBackground();
initializeMermaid(isDarkMode);
rerenderMermaidDiagrams();
mermaidDarkMode = isDarkMode;

var darkThemeLink = document.getElementById("dark-theme");
if (darkThemeLink) {
  new MutationObserver(function() {
    var nextDarkMode = syncDarkBackground();

    if (nextDarkMode !== mermaidDarkMode) {
      initializeMermaid(nextDarkMode);
      rerenderMermaidDiagrams();
      mermaidDarkMode = nextDarkMode;
    }
  }).observe(darkThemeLink, {
    attributes: true,
    attributeFilter: ["disabled"]
  });
}

renderMathInElement(document.body, {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '$', right: '$', display: false},
  ],
  throwOnError : false
});
