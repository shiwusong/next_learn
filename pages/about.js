import React from 'react'
import { Button } from 'antd'
import Layout from '../Layout/Layout';
import CSS from './about.styl'
export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className={CSS.font}>this is next</h1>
        <Button type="primary">antd</Button>
      </Layout>
    )
  }
}