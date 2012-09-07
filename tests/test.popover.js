define(['popover/popover',
        'chai'],
function(Popover, chai) {
  var expect = chai.expect;

  describe("popover", function() {
    
    it('should export constructor', function() {
      expect(Popover).to.exist;
      expect(Popover).to.be.a('function');
    });
    
  });
  
  return { name: "test.popover" }
});
