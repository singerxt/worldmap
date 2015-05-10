var app = document.getElementById('app'),
    structure = [
      {
        content: 'header',
        info: 'this is the header, here goes main options, links and user info',
        toggle: true,
        components: [<PageTitle />, <Search />, <Navigation />]
      },
      {
        content: 'aside',
        info: 'this is the sidebar, here goes filter and toggle options, lists and other map interation features',
        toggle: true,
        components: [<Aside />]
      },
      {
        content: 'article',
        info: 'here goes the google map',
        toggle: false,
        components: [<Article />]
      }
    ];

React.render(
  <Panels structure={structure} />,
  app
);
