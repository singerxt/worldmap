Panel component
===============

Usage:

```
var app = document.getElementById('app'),
    structure = [
      {
        content: 'header',
        info: 'this is the header, here goes main options, links and user info',
        toggle: true
      },
      {
        content: 'aside',
        info: 'this is the sidebar, here goes filter and toggle options, lists and other map interation features',
        toggle: true
      },
      {
        content: 'article',
        info: 'here goes the google map',
        toggle: false
      }
    ];

React.render(
  <Panels structure={structure}/>,
  app
);
```
