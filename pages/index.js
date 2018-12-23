import React from 'react'
import Layout from '../Layout/Layout'
import { Button } from 'antd'
import { connect } from '../core/story'

const Home = props => (
  <Layout>
    <h1>Index</h1>
    <Button
      onClick={() => {
        console.log(props)
      }}
      type="primary"
    >
      antd
    </Button>
  </Layout>
)

export default connect(Home)
