import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block

  it('check for button id is en-GB ', async () => {
    const el = await fixture('<button id="en-GB"></button>');
    expect(el.getAttribute('id')).to.equal('en-GB');
  });

  it('check for button id is not en-GB', async () => {
    const el = await fixture('<button id="en-GB"></button>');
    expect(el.getAttribute('id')).to.not.equal('en-GB1');
  });

});
