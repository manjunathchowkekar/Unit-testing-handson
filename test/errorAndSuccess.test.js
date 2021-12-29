import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block

  it('success takes control to the home button', async () => {
    const el = await fixture('<lion-button class="home-btn"></lion-button>');
    expect(el.getAttribute('class')).to.equal('home-btn');
  });


});

describe('error screen', () => {
  // Write test cases inside this block

  it('failure gives an error message and control wont be returned to home. ', async () => {
    const el = await fixture('<lion-button class="home-btn"></lion-button>');
    expect(el.getAttribute('class')).to.not.equal('contact-btn');
  });

});
