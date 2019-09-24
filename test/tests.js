var assert = require('assert');
var { read_file, dedupe } = require('../worker/workers.js');

describe('read_file', () => {
    it('Read file-test1.txt and return "ok"', () => {
        assert.strictEqual('ok', read_file('test/file-test1.txt')[0]);
    });
});

describe('dedupe', () => {
    describe('Test file-test2.txt : No doublon', () => {
        it('return 0 in multiple attribut', () => {
            assert.equal(0, dedupe('test/file-test2.txt').multiple);
        }),
        it('return 10 in multiple unique', () => {
            assert.equal(10, dedupe('test/file-test2.txt').unique);
        })
    }),
    describe('Test file-test3.txt : Doublon', () => {
        it('return 3 in multiple attribut', () => {
            assert.equal(3, dedupe('test/file-test3.txt').multiple);
        }),
        it('return 7 in multiple unique', () => {
            assert.equal(7, dedupe('test/file-test3.txt').unique);
        })
    })
})