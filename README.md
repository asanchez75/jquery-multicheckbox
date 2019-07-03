# jQuery MultiCheckbox

## Installation

Include script *after* the jQuery library:

```html
<link rel="stylesheet" href="jquery.multicheckbox.css" />
<script src="/path/to/jquery.multicheckbox.js"></script>
```

## Usage

```
$('select').multicheckbox({
  label_wrap: '<div class="checkbox"></div>'
});
```

## Options

### Default options

```javascript
DEFAULTS = {
  // Wrap each label in HTML structure. Example for Bootstrap: '<div class="checkbox"></div>'
  label_wrap: '',
  // Container with scrolling and borders
  scroll_wrapper_enabled: false,
  // if scroll_wrapper_enabled is true then selected_element is active element with class multicheckbox-on.
  selected_element: 'label'
};
```



### References

* [https://www.jqueryscript.net/form/jQuery-Plugin-To-Convert-Select-Options-To-Checkboxes-multicheck.html](https://www.jqueryscript.net/form/jQuery-Plugin-To-Convert-Select-Options-To-Checkboxes-multicheck.html)

