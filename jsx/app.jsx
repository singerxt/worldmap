var app = document.getElementById('app'),
    structure = [
      {
        content: 'header',
        toggle: true,
        mode: null,
        components: [<PageTitle />, <Search />, <Navigation />]
      },
      {
        content: 'aside',
        toggle: true,
        mode: 'accordeon',
        components: [<Aside />, <Aside />]
      },
      {
        content: 'article',
        toggle: false,
        mode: 'tabs',
        components: [<Article />, <Article />]
      }
    ];

React.render(
  <Panels structure={structure} />,
  app
);
