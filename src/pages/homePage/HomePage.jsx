import { Banner, AboutUs, OurCreations, Connect, GetInTouch } from "../../widgets"
import "./homePage.scss" 

export const HomePage = () => {
  return (
    <div id="#home" className="main">
      <Banner />
      <AboutUs />
      <OurCreations />
      <Connect />
      <GetInTouch />
    </div>
  )
}
