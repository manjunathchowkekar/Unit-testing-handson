import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  //refer basic - details.js files
  it('The amount should be 10000', () => {
    const details = new BasicDetails();
    details.amount = 15000;
    //expect(details.amount).to.be(1000);
    expect(details.amount).to.equal(15000);
  });


  it('The range should be 2 ', () => {
    const details = new BasicDetails();
    expect(details.range).to.equal(2);
  });


  it('The emi shold be 0', () => {
    const details = new BasicDetails();
    expect(details.emiCalc).to.equal(0);
  });


  it('The type is string', () => {
    const details = new BasicDetails();
    details.type = 'hello';
    expect(details.type).to.equal('hello');
    // expect(details.type).not.equal('hello');
  });


  it('passes accessibility test', async () => {
    const el = await fixture(html`<button> label </button>`);
    await expect(el).to.be.accessible();
  });

  it('fails accessibility test', async () => {
    const el = await fixture(html`<lion-input> label </lion-input>`);
    await expect(el).not.to.be.accessible();
  });

  describe('Plugin - semantic-dom-diff', () => {
    it('can semantically compare full dom trees', async () => {
      const el = await fixture(`<div><!-- comment --><h1>${'Hey'}  </h1>  </div>`);
      expect(el).dom.to.equal('<div><h1>Hey</h1></div>');
    });

    it('can semantically compare lightDom trees', async () => {
      const el = await fixture(`<div><!-- comment --><h1>${'Hey'}  </h1>  </div>`);
      expect(el).lightDom.to.equal('<h1>Hey</h1>');
    });

    describe('Plugin - chai-dom', () => {
      it('can check for an exiting css class', async () => {
        const el = await fixture(`<div class="foo bar"></div>`);
        expect(el).to.have.class('foo');
      });
    });

    it('can instantiate an element', async () => {
      const el = await fixture('<my-el foo="bar"></my-el>');
      expect(el.getAttribute('foo')).to.equal('bar');
    });

    it('can instantiate an element with properties', async () => {
      const el = await fixture(html`<my-el .foo=${'bar'}></my-el>`);
      expect(el.foo).to.equal('bar');

    });

  });
});