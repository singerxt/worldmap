var app = document.getElementById('app'),
    structure = [
      {
        content: 'header',
        toggle: true,
        mode: '',
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
          <GoogleMaps title="Google Maps" handle="mainmap" />,
          <Article title="sample tab #2" handle="sample-2" />,
          <GoogleMaps title="Another Google Maps" handle="notthemainmap" />,
          <Article title="sample tab #4" handle="sample-4" />,
          <Article title="sample tab #5" handle="sample-5" />,
          <Article title="sample tab #6" handle="sample-6" />
        ]
      }
    ];

// testing inheritance of components. remove or comment this.
structure[2].components.push(<Accordeon title="testing inheritance of components" handle="more-tabs" components={structure[1].components} />);

React.render(
  <Panels structure={structure} />,
  app
);
