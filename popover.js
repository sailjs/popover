define(['tip',
        'class'],
function(Tip, clazz) {
  
  function Popover(el, options) {
    options = options || {};
    options.className = options.className || 'popover';
    Popover.super_.call(this, el, options);
  }
  clazz.inherits(Popover, Tip);
  
  return Popover;
});
