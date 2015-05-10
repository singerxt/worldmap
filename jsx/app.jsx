var app = document.getElementById('app'),
    structure = [
      {
        content: 'header',
        toggle: true,
        mode: null,
        components: [
          <PageTitle />,
          <Search />,
          <Navigation />
        ]
      },
      {
        content: 'aside',
        toggle: true,
        mode: 'accordeon',
        components: [
          <Aside title="sample accordeon 1" handle="sample-1"/>,
          <Aside title="sample accordeon 2" handle="sample-2"/>,
          <Aside title="sample accordeon 3" handle="sample-3"/>
        ]
      },
      {
        content: 'article',
        toggle: false,
        mode: 'tabs',
        components: [
          <Article title="sample tab #1" handle="sample-1" />,
          <Article title="sample tab #2" handle="sample-2" />,
          <Article title="sample tab #3" handle="sample-3" />,
          <Article title="sample tab #4" handle="sample-4" />,
          <Article title="sample tab #5" handle="sample-5" />,
          <Article title="sample tab #6" handle="sample-6" />
        ]
      }
    ];

React.render(
  <Panels structure={structure} />,
  app
);
