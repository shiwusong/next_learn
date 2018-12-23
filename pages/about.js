import React from 'react'
import { Button } from 'antd'
import Layout from '../Layout/Layout'
import CSS from './about.styl'
import { connect } from '../core/story'
class About extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className={CSS.font}>this is next</h1>
        <Button
          onClick={() => {
            console.log(this.props)
          }}
          type="primary"
        >
          antd
        </Button>
      </Layout>
    )
  }
}
export default connect(About)
