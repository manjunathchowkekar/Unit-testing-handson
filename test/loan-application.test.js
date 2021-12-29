import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import { LoanApplication } from '../src/LoanApplication.js';

describe('LoanApplication', () => {
  // Write test cases inside this block

  it('The title should be Hey there', () => {
    const loantitle = new LoanApplication();
    loantitle.title = "Loan Application";
    expect(loantitle.title).is.equal('Loan Application');
  });

  it('The title should not be Hey there', () => {
    const loantitle = new LoanApplication();
    loantitle.title = "Loan Application";
    expect(loantitle.title).is.not.equal('Loan Application1');
  });

  it('The counter should be 10', () => {
    const loantitle = new LoanApplication();
    loantitle.counter = 10
    expect(loantitle.counter).is.equal(10);
  });

  it('The title should not be 10', () => {
    const loantitle = new LoanApplication();
    loantitle.counter = 10;
    expect(loantitle.counter).is.not.equal(20);
  });

});
