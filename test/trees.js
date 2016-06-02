import {assert} from 'chai';
import {BinaryHeap} from '../data-structures/trees';

describe('trees', () => {
  describe('BinaryHeap', () => {
    it('exists as a function', () => {
      assert.isFunction(BinaryHeap);
    });

    describe('BinaryHeap.prototype.insert', () => {
      it('exists as a function', () => {
        const heap = new BinaryHeap();
        assert.isFunction(heap.insert);
      });
    });
  })
});
