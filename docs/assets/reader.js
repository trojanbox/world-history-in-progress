(function () {
  'use strict';

  var STORAGE_KEY = 'world-history-reader-v1';
  var defaults = {
    theme: 'system',
    font: 'serif',
    size: 19,
    spacing: 'comfortable',
    width: 'standard'
  };

  function load() {
    try {
      return Object.assign({}, defaults, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
    } catch (_) {
      return Object.assign({}, defaults);
    }
  }

  var state = load();
  var root = document.documentElement;

  function clampSize(value) {
    return Math.min(25, Math.max(16, Number(value) || defaults.size));
  }

  function apply() {
    state.size = clampSize(state.size);
    root.dataset.readerTheme = state.theme;
    root.dataset.readerFont = state.font;
    root.dataset.readerSpacing = state.spacing;
    root.dataset.readerWidth = state.width;
    root.style.setProperty('--reader-font-size', state.size + 'px');

    var sizeOutput = document.getElementById('reader-font-size');
    if (sizeOutput) sizeOutput.textContent = state.size + 'px';

    document.querySelectorAll('[data-reader-theme]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.readerTheme === state.theme));
    });
    document.querySelectorAll('[data-reader-font]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.readerFont === state.font));
    });
    document.querySelectorAll('[data-reader-spacing]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.readerSpacing === state.spacing));
    });
    document.querySelectorAll('[data-reader-width]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.readerWidth === state.width));
    });
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
    apply();
  }

  function bindDataButtons(selector, key, dataKey) {
    document.querySelectorAll(selector).forEach(function (button) {
      button.addEventListener('click', function () {
        state[key] = button.dataset[dataKey];
        save();
      });
    });
  }

  apply();
  bindDataButtons('[data-reader-theme]', 'theme', 'readerTheme');
  bindDataButtons('[data-reader-font]', 'font', 'readerFont');
  bindDataButtons('[data-reader-spacing]', 'spacing', 'readerSpacing');
  bindDataButtons('[data-reader-width]', 'width', 'readerWidth');

  var minus = document.getElementById('reader-font-minus');
  var plus = document.getElementById('reader-font-plus');
  if (minus) minus.addEventListener('click', function () { state.size = clampSize(state.size - 1); save(); });
  if (plus) plus.addEventListener('click', function () { state.size = clampSize(state.size + 1); save(); });

  var reset = document.getElementById('reader-reset');
  if (reset) reset.addEventListener('click', function () {
    state = Object.assign({}, defaults);
    save();
  });

  var panel = document.getElementById('reader-settings');
  var overlay = document.getElementById('reader-settings-overlay');
  var openButton = document.getElementById('reader-settings-open');
  var closeButton = document.getElementById('reader-settings-close');

  function setPanel(open) {
    if (!panel || !overlay || !openButton) return;
    panel.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    overlay.setAttribute('aria-hidden', String(!open));
    openButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('reader-settings-open', open);
    if (open && closeButton) closeButton.focus();
  }

  if (openButton) openButton.addEventListener('click', function () { setPanel(true); });
  if (closeButton) closeButton.addEventListener('click', function () { setPanel(false); });
  if (overlay) overlay.addEventListener('click', function () { setPanel(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setPanel(false);
  });

  var progress = document.getElementById('reading-progress');
  if (progress) {
    var updateProgress = function () {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, ratio)) + ')';
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }
}());
