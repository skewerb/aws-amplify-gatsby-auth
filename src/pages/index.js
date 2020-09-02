import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the Future of Digital Events</h1>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <video width="320" height="240" controls> <source src="https://4f8770ea05fa.us-east-1.playback.live-video.net/api/video/v1/us-east-1.390409532441.channel.S02Iw01flH87.m3u8" type="application/x-mpegURL"></video>
  </Layout>
)

export default IndexPage
