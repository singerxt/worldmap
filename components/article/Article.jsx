var Article = React.createClass({
  render: function() {
    /* Temporary stuff */
    var status = ['',
'React Components',
'================',
'',
'Nothing is really funcional yet, its just a prototype of a layout interface using react components.',
'',
'Styles and animations are pure css.',
'',
'- Panels',
'  - Header *',
'    - PageTitle',
'    - Search',
'    - Navigation',
'  - Aside (tabs *)',
'    - ToogleOptions *',
'    - Filters *',
'  - Article (tabs *)',
'    - GoogleMaps *',
'    - CommonPage *',
'  - ButtonToggle',
'',
'* Missing integration. There is a lot errors in everything, be advised.',
'',
'Working in progress informations: https://github.com/bernardodiasc/worldmap/issues/4',
'',
'In the https://github.com/bernardodiasc/worldmap/blob/gh-pages/jsx/app.jsx file have an object with the structure configuration. Looks like this:',
'',
'structure = [',
'  {',
'    content: \'header\',',
'    toggle: true,',
'    components: [<PageTitle />, <Search />, <Navigation />]',
'  },',
'  {',
'    content: \'aside\',',
'    toggle: true,',
'    components: [<Aside />]',
'  },',
'  {',
'    content: \'article\',',
'    toggle: false,',
'    components: [<Article />]',
'  }',
'];',
'',
''].join('\n');

    return (
      <article>
        <div id="mapcanvas" className="mapcanvas">
        <pre>
          {status}
        </pre>
        </div>
      </article>
    );
  }
});
