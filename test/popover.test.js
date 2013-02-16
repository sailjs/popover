define(['popover'],
function(Popover) {

  describe("popover", function() {
    
    it('should export constructor', function() {
      expect(Popover).to.exist;
      expect(Popover).to.be.a('function');
    });
    
  });
  
  return { name: "test.popover" }
});
