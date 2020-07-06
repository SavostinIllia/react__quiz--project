import React from 'react';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz';

function App() {
  console.log('DEv Branch works')
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
