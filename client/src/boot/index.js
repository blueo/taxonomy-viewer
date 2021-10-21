/* global window */
import registerComponents from 'boot/registerComponents';
import '../legacy/entwine/injectReact';

window.document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
});
