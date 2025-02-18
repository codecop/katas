// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {
  getFunction() {
    return () => {
      //// return new LexicallyBound();
      return this;
    }
  }
  getArgumentsFunction() {
    //// return function() {return arguments}
    return () => {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();
    //// const anotherObj = {};
    const anotherObj = bound;
    const expected = anotherObj;
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    const bound = new LexicallyBound();
    const fn = bound.getArgumentsFunction();
    assert.equal(fn(1, 2).length, 0);
  });
});
