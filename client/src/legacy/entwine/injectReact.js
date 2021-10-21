// function to create boilerplate for standard entwine field boostrap
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { schemaMerge } from 'lib/schemaFieldValues';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  const componentName = 'TaxonomyViewer';
  $(`.js-injector-boot #${componentName}`).entwine({
    Timer: null,
    Component: null,
    Root: null,

    onmatch() {
      this._super();

      const context = { context: 'Blueo\\TaxonomyViewer' };

      const Field = loadComponent(componentName, context);
      this.setComponent(Field);

      const reactRoot = $(this)[0];
      this.setRoot(reactRoot);

      this.refresh();
    },

    onunmatch() {
      this._super();

      const container = this.getRoot();
      if (container) {
        ReactDOM.unmountComponentAtNode(container);
      }
    },

    refresh() {
      const props = this.getAttributes();

      const Component = this.getComponent();

      ReactDOM.render(<Component {...props} />, this.getRoot());
    },

    getAttributes() {
      const state = $(this).data('state');
      const schema = $(this).data('schema');
      return schemaMerge(schema, state);
    },
  });
});
