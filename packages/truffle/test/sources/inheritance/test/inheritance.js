const Root = artifacts.require('Root');

contract('Root', function(){
  it('runs', function(){
    return Root.new();
  });
});
