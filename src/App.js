//클라우딩 어플리케이션 엔지니어링 김승한
import "./App.css";
import { useEffect } from "react";
import EventByBootstrap from "./pages/EventByBootstrap";
import EventNotice from "./pages/EventNotice";
import EventByAntd from "./pages/EventByAntd";
import EventByMui from "./pages/EventByMui";
import VideoEditor from "./pages/VideoEditor/VideoEditor2";

function App() {
  // return <EventByBootstrap />;
  return <VideoEditor />;
  // return <EventByAntd />;
  // return <EventByMui />;
  // return <EventNotice />;
}

export default App;
