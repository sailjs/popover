define(['tip',
        'anchor/class'],
function(Tip, clazz) {
  
  // TODO: Improve compatibility with Twitter Bootstrap styles.
  
  function Popover(el, options) {
    Popover.super_.call(this, el, options);
    options = options || {};
    this.className = options.className || 'popover';
  }
  clazz.inherits(Popover, Tip);
  
  return Popover;
});
