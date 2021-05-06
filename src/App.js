import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import IndexRouter from './router/index'
import Layout from './common/components/layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <IndexRouter />
      </Layout>
    </BrowserRouter>
  )
}

export default App
