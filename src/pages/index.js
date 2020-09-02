import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the Future of Digital Events</h1>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <video id="video"></video>
    <script>
    if(Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource('https://4f8770ea05fa.us-east-1.playback.live-video.net/api/video/v1/us-east-1.390409532441.channel.S02Iw01flH87.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    }
    </script>
  </Layout>
)

export default IndexPage
