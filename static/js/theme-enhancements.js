var mermaidDarkMode = null;

function mermaidThemeVariables(isDarkMode) {
  if (isDarkMode) {
    return {
      background: "#1f2937",
      primaryColor: "#111827",
      primaryBorderColor: "rgba(248, 113, 113, 0.72)",
      primaryTextColor: "#e5e7eb",
      secondaryColor: "#475569",
      secondaryBorderColor: "#94a3b8",
      secondaryTextColor: "#e5e7eb",
      tertiaryColor: "#475569",
      tertiaryBorderColor: "#94a3b8",
      tertiaryTextColor: "#e5e7eb",
      lineColor: "#cbd5e1",
      textColor: "#e5e7eb",
      mainBkg: "#111827",
      secondBkg: "#475569",
      tertiaryBkg: "#475569",
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

  return mermaid.run({ querySelector: 'div.mermaid[data-mermaid-source]' });
}

function applyMindmapBackground() {
  if (!isDarkMode) {
    return;
  }

  document.querySelectorAll('div.mermaid.mermaid-mindmap').forEach(function(node) {
    var rootLabelMatch = node.dataset.mermaidSource && node.dataset.mermaidSource.match(/^\s*mindmap[\s\S]*?root\(\((.+?)\)\)/m);
    var rootLabel = rootLabelMatch ? rootLabelMatch[1].trim() : '';
    var shapeSelectors = 'circle, rect, ellipse, polygon, path';
    var childFillColor = '#334155';
    var childStrokeColor = 'rgba(148, 163, 184, 0.5)';

    Array.from(node.querySelectorAll('svg g')).forEach(function(group) {
      if (!group.querySelector(shapeSelectors)) {
        return;
      }

      var label = group.querySelector('text');
      var labelText = label ? label.textContent.trim() : '';

      if (rootLabel && labelText === rootLabel) {
        return;
      }

      group.querySelectorAll(shapeSelectors).forEach(function(shape) {
        shape.style.setProperty('fill', childFillColor, 'important');
        shape.style.setProperty('stroke', childStrokeColor, 'important');
      });
    });
  });
}

function ensureMermaidZoomControls() {
  document.querySelectorAll('div.mermaid[data-mermaid-source]').forEach(function(node) {
    var wrapper = node.parentElement;
    if (!wrapper) {
      return;
    }

    if (!wrapper.classList.contains('mermaid-frame')) {
      wrapper.classList.add('mermaid-frame');
    }

    if (wrapper.querySelector('.mermaid-zoom-button')) {
      return;
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'mermaid-zoom-button';
    button.setAttribute('aria-label', 'Aproximar diagrama');
    button.setAttribute('title', 'Aproximar diagrama');
    button.setAttribute('aria-pressed', node.classList.contains('mermaid-zoomed') ? 'true' : 'false');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="7"></circle><line x1="16.65" y1="16.65" x2="21" y2="21"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>';

    button.addEventListener('click', function() {
      var isZoomed = node.classList.toggle('mermaid-zoomed');
      button.setAttribute('aria-pressed', isZoomed ? 'true' : 'false');
      button.setAttribute('title', isZoomed ? 'Voltar ao tamanho normal' : 'Aproximar diagrama');
      button.classList.toggle('is-zoomed', isZoomed);
    });

    wrapper.insertBefore(button, node);
  });
}

function syncDarkBackground() {
  var darkThemeLink = document.getElementById("dark-theme");
  var isDarkMode = darkThemeLink && !darkThemeLink.disabled;

  document.documentElement.classList.toggle("carol-dark-background", isDarkMode);
  return isDarkMode;
}

var isDarkMode = syncDarkBackground();

document.querySelectorAll('pre code.language-mermaid').forEach(function(codeBlock) {
  var parent = codeBlock.parentElement;
  var mermaidText = codeBlock.textContent;
  var mermaidDiv = document.createElement('div');
  mermaidDiv.className = 'mermaid';
  if (/^\s*mindmap\b/.test(mermaidText)) {
    mermaidDiv.classList.add('mermaid-mindmap');
  }
  mermaidDiv.dataset.mermaidSource = mermaidText;
  mermaidDiv.textContent = mermaidText;
  var mermaidFrame = document.createElement('div');
  mermaidFrame.className = 'mermaid-frame';
  mermaidFrame.appendChild(mermaidDiv);
  parent.parentNode.replaceChild(mermaidFrame, parent);
});

initializeMermaid(isDarkMode);
rerenderMermaidDiagrams().then(function() {
  ensureMermaidZoomControls();
  applyMindmapBackground();
});
mermaidDarkMode = isDarkMode;

var darkThemeLink = document.getElementById("dark-theme");
if (darkThemeLink) {
  new MutationObserver(function() {
    var nextDarkMode = syncDarkBackground();

    if (nextDarkMode !== mermaidDarkMode) {
      initializeMermaid(nextDarkMode);
      rerenderMermaidDiagrams().then(function() {
        ensureMermaidZoomControls();
        applyMindmapBackground();
      });
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
