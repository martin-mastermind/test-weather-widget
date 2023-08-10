(() => {
  function createStyleLink(node, url) {
    const link = document.createElement('link');
    link.href = url;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    node.appendChild(link);
  }

  function createScriptLink(node, url) {
    const script = document.createElement('script');
    script.src = url;
    node.appendChild(script);
  }

  createStyleLink(document.head, 'https://self-test-weather.vercel.app/weather-widget.css');
  createScriptLink(document.body, 'https://self-test-weather.vercel.app/weather-widget.umd.js');

  const t = setInterval(() => {
    const shadowRoot = document.querySelector('weather-widget').shadowRoot;

    if (shadowRoot) {
      createStyleLink(shadowRoot, 'https://self-test-weather.vercel.app/weather-widget.css');
      clearInterval(t);
    }
  });
})();