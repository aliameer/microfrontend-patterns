import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js';

import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  domElementGetter: () => document.getElementById('user'),
});

export const { bootstrap, mount, unmount } = lifecycles;
