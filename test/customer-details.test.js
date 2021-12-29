import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  it('checking for email with valid id field', async () => {
    const el = await fixture('<lion-input-email id="email"></lion-input-email>');
    expect(el.getAttribute('id')).to.equal('email');
  });

  it('checking for email with invalid field  id', async () => {
    const el = await fixture('<lion-input-email id="email"></lion-input-email>');
    expect(el.getAttribute('id')).to.not.equal('email1');
  });


});
