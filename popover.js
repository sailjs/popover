define(['overlay',
        'tip',
        'class'],
function(Overlay, Tip, clazz) {
  
  function Popover(el, options) {
    options = options || {};
    options.className = options.className || 'popover';
    Popover.super_.call(this, el, options);
  }
  clazz.inherits(Popover, Tip);
  
  Popover.prototype.overlay = function(options) {
    options = options || {};
    var self = this
      , template = options.template || 'overlay';
    this._overlay = new Overlay(template, options);
    this._overlay.on('hide', function(){
      self._overlay = null;
      self.hide();
      return true;
    });
    return this;
  };
  
  Popover.prototype.show = function(el) {
    if (this._overlay) this._overlay.show();
    Popover.super_.prototype.show.call(this, el);
  }
  
  Popover.prototype.remove = function() {
    if (this._overlay) this._overlay.remove();
    Popover.super_.prototype.remove.call(this);
  };
  
  return Popover;
});
