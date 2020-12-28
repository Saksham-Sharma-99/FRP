import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import {logo} from '../NavBars/TopNav/assets/index'
import App from '../../App'
import {Carousel,Button} from 'react-bootstrap'
import {GetRequest,LogIn,PostRequest} from '../../Model/RequestHandler'
import {Routes,Constants, CLIENT_ID, SECRET, ORIGIN,CHANNELI_URL,BaseURL} from '../../Model/Constants'
import './Auth.css'
import screenpic from "./assets/screenpic.png";
import iitrpic from "./assets/iitrpic1.jpg";
import projectspage from "./assets/projectspage.png";
import profilepic from "./assets/profilepic.png";
import resultspage from "./assets/resultspage.png";
import Axios from 'axios';
import { ImFontSize } from 'react-icons/im';
import { AiOutlineLineHeight } from 'react-icons/ai';

var isLoggedIn = false

const carouselData = [
    {img:projectspage,
    title:"Title of the first Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:profilepic,
    title:"Title of the  second Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:resultspage,
    title:"Title of the third Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    ]

function simulateNetworkRequest() {
    return new Promise((resolve) => {
        console.log('clicked sign in')
        if(localStorage.getItem(Constants.TOKEN) == null){
        window.location.replace(`https://internet.channeli.in/oauth/authorise?client_id=${CLIENT_ID}&redirect_uri=${BaseURL}/&state=${ORIGIN}`)
        }else{
            GetRequest(Routes.CHECK_USER,(res)=>{
                if(res.data == Constants.DOESNT_EXISTS){
                    window.location.replace(`https://internet.channeli.in/oauth/authorise?client_id=${CLIENT_ID}&redirect_uri=${BaseURL}/&state=${ORIGIN}`)
                }
                else{
                    console.log(res.data)
                    LogIn(res.data)
                    sessionStorage.setItem(Constants.PROJECTS , JSON.stringify(res.data.projects))
                    localStorage.setItem(Constants.TOKEN , res.data.token)
                    setTimeout(resolve, 10000)   
                }
            },{token: localStorage.getItem(Constants.TOKEN),state:ORIGIN})
        }
        });
  } 
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        style={{backgroundColor:"#0f4c75"}}
        onClick={!isLoading ? handleClick : null}
        size='lg'
        block>
        {isLoading ? 'Loading…' : 'Sign in'}
      </Button>
    );
  }



function CarouselElement(props){
    var carouselContent = props.content
    return(
        <Carousel >
            {carouselContent.map((cdata)=>{
                return(
                    <Carousel.Item interval={3000} >
                        <img
                        className="img-fluid"
                        id="d-block"
                        src={cdata.img}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>{cdata.title}</h3>
                            <p className='content'>{cdata.content}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                );
            })}
        </Carousel>
    )
}



function Auth (){
    let url = new URL(window.location.href)
    console.log("hello")
    if (url.searchParams.get('token') == null){
    return (
        <div className='container-fluid' style ={{alignItems:"center", width:"100%",height:"100%", margin:'0px',padding:'0px',overflowX:"hidden",overflowY:"hidden"}}>
           
            <div className ="row">
                <div class="col-xs-5 col-sm-5 col-lg-5" style={{alignItems:'center'}}>
                    <section>
                        <h1 id="heading">Add more value to your Research Career</h1>
                        <div id="para">A smarter and easier way—helping you find your dream foreign internships and projects.</div>
                    </section>
                    </div>

                <div className="col-xs-7 col-sm-7 col-lg-7" id="appimage">
                    <img src={screenpic} class="img-fluid" />
                </div>
            </div>
            
            <div className ="row" style={{marginTop:'3%'}}>
                <div class="col-sm"></div>
                <div class="col-sm">
                    <h3 className="h3 mb-3 font-weight-normal" style={{textAlign:'center' ,marginTop:'40px'}}>
                        To continue, sign in with your Channel-I account 
                    </h3>
                    <div class="text-center">
                        <LoadingButton />
                    </div>
                    <p className="mt-5 mb-3 text-muted" style={{textAlign:'center'}}>&copy; IR Cell</p>
                    
                </div>
                <div class="col-sm"></div>
            </div>


            <div className ="row" style={{marginTop:'3%'}}>
                <div className="col-xs-6 col-sm-6 col-lg-6" id="appimage" style={{alignItems:'center'}}>
                    <img src={iitrpic}  class="img-fluid"/>
                </div>

                <div class="col-xs-6 col-sm-6 col-lg-6" style={{alignItems:'center'}}>
                    <h1 id="heading">International Relations Cell, IITR</h1>
                    <div id="para">With International Relations Office (IR Office), we foster our institute vision and mission by providing information related to student exchange programme and scholarships. </div>
                </div>
            </div>

            <h1 id="heading"  style={{marginTop:'5%', textAlign:'center'}}>See how it works</h1>

            <div id="para2">
                 Made with love by IRC, IITR.
            </div>
            
            <div className ="col-sm-12" style={{marginTop:'1%'}}>
                <CarouselElement content={carouselData}/>
            </div>

            

        </div>
    )
    }else{
        sessionStorage.setItem(Constants.AUTH_TOKEN,url.searchParams.get('token'))
        console.log(url.searchParams.get('token'))
        localStorage.setItem(Constants.TOKEN , url.searchParams.get('refresh_token'))
        
        GetRequest(Routes.USER_DETAILS,(res)=>{
            if (res.status==200){
                GetRequest(Routes.PROJECTS , (resp)=>{
                    if (resp.status == 200){
                        isLoggedIn = true;
                        sessionStorage.setItem(Constants.PROJECTS , JSON.stringify(resp.data))
                        LogIn(res)
                    }
                    else{
                        window.alert("Can't Login. Unknown Error Occured")
                    }
                })
            }
            else{
                window.alert("Can't Login. Unknown Error Occured")
            }
        },{token:sessionStorage.getItem(Constants.AUTH_TOKEN),refresh_token:localStorage.getItem(Constants.TOKEN)})
    
        return(
            <div className="container-fluid" style={{minHeight:"89.5vh"}}>
                <h4>Redirecting . Please wait for a second</h4>
            </div> 
        )
    }
}

export default Auth;
export {LoadingButton,isLoggedIn}