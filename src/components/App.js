import video from "../data/video.js";
import VideoComponent from "./VideoComponent.js";
import VideoInfo from './VideoInfo'
// import Comments from './Comments'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
      <VideoComponent video={video} />
      <VideoInfo video={video} />
      {/* <Comments video={video} /> */}
    </div>
  );
}

export default App;
