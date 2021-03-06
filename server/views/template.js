let template = (restaurantId) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Sidebar</title>
    </head>
    <body>
      <div id="sidebar">
      </div>
      <script type="text/javascript" src="http://13.59.28.19/bundle.js"></script>
      <script>
        ReactDOM.render(
          React.createElement(Sidebar, {restaurantId: ${restaurantId}}, null),
          document.getElementById('sidebar')
        );
      </script>
    </body>
  </html>`;
}

module.exports = template;