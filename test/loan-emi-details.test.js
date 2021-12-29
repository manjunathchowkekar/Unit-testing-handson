import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { LoanEMIDetails } from '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  it('The data should be string type', () => {
    const loanemi = new LoanEMIDetails();
    loanemi._data = 'Hello';
    expect(loanemi._data).is.equal('Hello');
  });

  it('The data should not be string type', () => {
    const loanemi = new LoanEMIDetails();
    loanemi._data = 'Hello';
    expect(loanemi._data).is.not.equal('Hello1');
  });

  it('checking continue button with valid class name', async () => {
    const el = await fixture('<lion-button class="continue-btn btn"></lion-button>');
    expect(el.getAttribute('class')).to.equal('continue-btn btn');
  });
  it('checking continue button with invalid class name', async () => {
    const el = await fixture('<lion-button class="continue-btn btn"></lion-button>');
    expect(el.getAttribute('class')).to.not.equal('continue-btn btn1');
  });

});
