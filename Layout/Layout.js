import React from 'react'
import Head from 'next/head'
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css'/>
        </Head>
        {this.props.children}
      </div>
    )
  }
}