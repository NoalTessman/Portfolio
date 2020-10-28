import React, { Component } from 'react'
import Header from "../NavBar"
// import will from "./slitscanPhotos/will.jpg"
import bird from "./slitscanPhotos/bird.jpeg"
import dunes from "./slitscanPhotos/dunes.jpeg"
import harbor from "./slitscanPhotos/harbor.jpeg"
import japan from "./slitscanPhotos/japan.jpeg"
import MilkyWay from "./slitscanPhotos/MilkyWay.jpeg"
import Nature from "./slitscanPhotos/Nature.jpeg"
import SlitScan from "./slitscanPhotos/SlitScan.jpeg"
// import sunset from "./slitscanPhotos/sunset1.jpeg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import sourcecode from "./slitscanPhotos/sourcecode.PNG"
import github from "../icons/github1.png"

export default class SlitScanPhotography extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="SlitScanContainer">
                    <div className="SlitScanTitle">
                        Slit Scan Timelapses
                    </div>               
                    <div className="SlitScanDescription">
                        This was a project that works with the PIL and cv2 python library. It's called "Slit Scan Photography".
                        <p>
                            It was based off of a project by the youtuber "William Osman" who wanted to create wrapping paper with his face
                        </p>
                        <p>
                            The idea is really basic, it takes a "slit" from the middle of each frame and attaches it to a new image, if you sit in an office chair and spin slowly while
                            taking a video of your face, it will get every angle of your face in one 2d picture.  
                        </p>
                        <p>
                            I really enjoyed the idea of this, but I wanted to apply it a little bit differently to timelapses instead of raw video. Instead of taking the "slit" from the middle of
                            the frame, I wanted to take them from left to right and create a photo composed of all of the frames throughout the video.
                        </p>
                    </div>
                    <iframe id="SlitScanWill" class="SlitScanWillVid"title="Video1" alt="SlitScanWill" width="560" height="315" src="https://www.youtube.com/embed/nZM9Ko806Bg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                        <Carousel>
                            <div className="SlitScanCard">
                            <img src={bird} alt="Bird"/>
                            <h2>A beach with some birds</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={dunes} alt="Dunes"/>
                            <h2>24 hour time lapse of the desert</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={harbor} alt="harbor"/>
                            <h2>A harbor</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={japan} alt="Japan"/>
                            <h2>A Japanese City</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={MilkyWay} alt="MilkyWay"/>
                            <h2>Day to Night Timelapse</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={Nature} alt="Nature"/>
                            <h2>LA Timelapse</h2>
                            </div>
                            <div className="SlitScanCard">
                            <img src={SlitScan} alt="SlitScan"/>
                            <h2>A field with heavy cloud cover</h2>
                            </div>
                        </Carousel>
                        <div className="SlitScanEndNotes">
                            <p>
                                I was very happy with the results and I learned a lot from this 
                            </p>
                            <p>
                                One of the things I knew would happen is showing how doing this distorts objects. With timelapses generally my favorite thing to capture is clouds, the clouds moved the exact same speed, but because of how the program captured them, there are these strange lines that get longer as they get closer to the camera, which is because objects appear to move faster the closer they are to the subject
                            </p>
                                <img src={harbor} height="300px" alt="Harbor"/>
                            <p>
                                There are these strange lines that appear in each one, There's a large difference in light levels when a cloud allows light vs when it doesn't. 
                            </p>
                            <img src={Nature} height="500px" alt="Nature"/>
                            <p>
                                It makes a lot of sense why they're there, but for an ideal picture I would almost want to photoshop out the bottom which was affected by this while keeping the new clouds
                            </p>
                            <p>
                                Another thing was that something in the process kept most of the colors besides orange for whatever reason as you can see in this image
                            </p>
                            <img src={harbor} height="300px" alt="Harbor"/>
                            <p>
                                I'm no scientist, but I'm pretty sure pools aren't supposed to be orange, a lot of these were taken at sunset which would make the sky more blue, and you can tell this is the case because the sky at the right is more blue which makes sense for when it becomes night.
                            </p>
                            <p>
                                This image shows the problems with this though, as you can see it's still very Orange in the middle of the day for some reason, I don't believe sand is supposed to be blue, but I could be wrong.
                            </p>
                            <img src={dunes} alt="Dunes"/>
                            <p>
                                As for coding I learned a lot and I plan to implement it in the project in the future. As you can tell the image widths for these aren't very uniform and that was because of how I decided to code this, which, in retrospect, could have been done a lot better after I learned how use cv2 and PIL.
                            </p>
                            <span><a href="https://github.com/NoalTessman/learningPython/tree/master/projects/myOwnFaceThing" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/>Source Code</a></span>
                            <p>
                            In the source code, you can see how some of the ways I made this weren't very good or user friendly. 
                            </p>
                            <img src={sourcecode} alt="SourceCode"/>
                            <p>
                                Here's what it does, it's relatively short, but it's doing a decent amount of work
                                <ul id="SlitScanCode">
                                    
                                    <li>vc = cv2.VideoCapture( './MilkyWay.mp4') <p>
                                        grabs the video
                                    </p></li>
                                    <li>frameNum = 2 im_size = (int(vc.get(cv2.CAP_PROP_ FRAME_COUNT)),1080) <p>
                                        sets the variable of the first frame and grabs the width of the video to be the number of frames
                                    </p></li>
                                    <li>composite = Image.new("RGB", im_size) <p>
                                        Creates the picture
                                    </p></li>
                                    <li>while True:
                                        <li>
                                            ret,frame = vc.read(
                                        </li>)
                                        <li>
                                            if frame is None:
                                        </li>
                                        <li>
                                            break
                                        </li>
                                        <p> A loop that breaks once the "slit" is empty</p></li>
                                    <li>
                                    currCap = frame[0:1080,frameNum-2:frameNum] <p>
                                        finds the current "slit"
                                    </p>
                                    </li>
                                    <li>
                                    currCapPIL = Image.fromarray(currCap)
                                    <p>
                                        Creates an image of the slit
                                    </p>
                                    </li>
                                    <li>
                                    composite.paste( currCapPIL,(frameNum,0))
                                    <p>
                                        Throws that newly created "slit" onto the Image
                                    </p>
                                    </li>
                                    <li>frameNum += 2<p>
                                        Adds 2 to the frameNum counter so that it can go to the next "slit"</p></li>
                                    <li>
                                
                                        <li>
                                            composite.save( "MilkyWay.jpeg", "JPEG"){"\n"}
                                        </li>                         
                                        <li>
                                            print('done')
                                        </li>
                                        <li>
                                            vc.release()
                                        </li>                                                 
                                        <li>
                                            cv2.destroyAllWindows
                                        </li>
                                    <p>
                                        Saves this image, tells the console that it's done, and does some PIL/cv2 things so that they aren't open forever
                                    </p>
                                    </li>
                                    </ul>
                                    <p>
                                        The problem with this is that it sets the total widtht to the total amount of frames, which means for me to create relatively normal pictures, I had to find videos that were just as long as the amount of frames which ended up being 1980*24(24 frames/s) long
                                    </p>
                                    <p>
                                        This was stupid and I should have just changed it so that regardless of the length of the video, it would have taken X amount of frames per slit in order to create the full video.
                                    </p>
                                    <p>
                                        This would have also made it so that I could get videos that were both longer and shorter than the 1980X24 frames/s and if I set the variable of how wide the image along with how tall the image was to the actual size of the video, I could create images from different resolutions and make them all end up a uniform size.
                                    </p>
                                    <p>
                                        I would have also liked to create a UI for this, but regardless I plan to do this in the future. Other plans I have are to create the same thing, but it makes a series of these images which would then create a video, here's an example of what this looks like:
                                    </p>
                                    <iframe width="560" title="1" height="315" src="https://www.youtube.com/embed/NSesvu_uqLo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <iframe width="560" title="2" height="315" src="https://www.youtube.com/embed/a7V24QcZUy4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <p>
                                        Right now there are many programs that can already do this, in fact tiktok currently has a trend with it, but it was great to learn about PIL/cv2 with this and I'm really happy with how it turned out. 
                                    </p>
                            </p>
                        </div>
                        
            </div>
        )
    }
}
