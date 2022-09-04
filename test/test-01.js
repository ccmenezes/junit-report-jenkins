const chai = require('chai');
const assert = chai.assert;

describe('Files', () => {
    describe('Export', () => {
        it('Should export pdf', () => {
            assert.isTrue(true);
        });

        it('Should export html', () => {
            assert.isTrue(true);
        });

        it('Should export yml', () => {
            assert.isTrue(true);
        });

        it('Should export text', () => {
            if(Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        });
    });
    describe('Import', () => {
        it('Should import pdf', () => {
            assert.isTrue(true);
        });

        it('Should import html', () => {
            assert.isTrue(true);
        });

        it('Should import yml', () => {
            assert.isTrue(true);
        });

        it('Should import text', () => {
            if(Math.random() < 0.5) {
                throw new Error('An exception occurred');
            } else {
                assert.isTrue(true);
            }
        });
    });
});