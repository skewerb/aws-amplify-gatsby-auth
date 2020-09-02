import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<!-- Or if you want a more recent alpha version -->
<!-- <script src="https://cdn.jsdelivr.net/npm/hls.js@alpha"></script> -->
<video id="video"></video>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  //
  // First check for native browser HLS support
  //
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  //
  // If no native HLS support, check if hls.js is supported
  //
  } else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }
</script>
  </Layout>
)

export default IndexPage
