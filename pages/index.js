import { React } from 'react';

function wcube() {
  return (
    <body>
      <section>
        <h1 style={{fontFamily: UbuntuLight}}>HN WCube</h1>
      </section>
    </body>
  )
}

export default wcube;

export default props => {
  let [fontsLoaded] = useFonts({
    UbuntuLight: require('../fonts/Ubuntu-Light.ttf'),
  });
}