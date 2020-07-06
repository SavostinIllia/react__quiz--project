import React from 'react';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz';

function App() {
  console.log('Works')
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
