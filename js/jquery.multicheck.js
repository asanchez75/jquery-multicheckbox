
/*
 * jQuery Multicheck Plugin v0.1
 * https://github.com/jurrick/jquery-multicheck
 *
 * Copyright 2014 Yury Snegirev
 * Released under the MIT license
 */

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function($) {
    'use strict';
    var MultiCheck;
    MultiCheck = (function() {
      var DEFAULTS;

      DEFAULTS = {
        label_wrap: '',
        scroll_wrapper_enabled: false,
        selected_element: 'label'
      };

      function MultiCheck(element, options) {
        this.getOptions = __bind(this.getOptions, this);
        this.$select = $(element);
        this.options = this.getOptions(options);
        this.init();
      }

      MultiCheck.prototype.init = function() {
        var $container, checkboxes;
        this.$select.hide();
        checkboxes = '';
        this.$select.children('option').each(function() {
          var $option, checkbox, label_class;
          $option = $(this);
          label_class = '';
          if ($option.data('label-class') != null) {
            label_class = " class=\"" + ($option.data('label-class')) + "\"";
          }
          checkbox = "<label" + label_class + ">\n  <input type=\"checkbox\" value=\"" + ($option.val()) + "\" /> " + ($option.text()) + "\n</label>";
          return checkboxes += checkbox;
        });
        $container = $("<div class=\"multicheck-container" + (this.options['scroll_wrapper_enabled'] ? ' multicheck-wrap-container' : void 0) + "\">\n  " + checkboxes + "\n</div>");
        $container = $container.insertAfter(this.$select);
        if (!!this.options['label_wrap']) {
          $container.children('label').wrap(this.options['label_wrap']);
        }
        return $container.on('change', 'input:checkbox', (function(_this) {
          return function(e) {
            var $ch, $option;
            $ch = $(e.target);
            $option = _this.$select.children("[value=\"" + ($ch.val()) + "\"]");
            $option.prop({
              selected: $ch.is(':checked')
            });
            if (_this.options['scroll_wrapper_enabled'] === true) {
              if ($ch.is(':checked')) {
                return $ch.closest(_this.options['selected_element']).addClass('multicheck-on');
              } else {
                return $ch.closest(_this.options['selected_element']).removeClass('multicheck-on');
              }
            }
          };
        })(this));
      };

      MultiCheck.prototype.getOptions = function(options) {
        return $.extend({}, DEFAULTS, options);
      };

      return MultiCheck;

    })();
    return jQuery.fn.multicheck = function(options) {
      if (options == null) {
        options = null;
      }
      return this.each(function() {
        return new MultiCheck(this, options);
      });
    };
  })(jQuery);

}).call(this);
