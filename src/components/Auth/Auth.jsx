import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import {logo} from '../NavBars/TopNav/assets/index'
import App from '../../App'
import {Carousel,Button} from 'react-bootstrap'
import {GetRequest,LogIn,PostRequest} from '../../Model/RequestHandler'
import {Routes,Constants, CLIENT_ID, SECRET, ORIGIN,CHANNELI_URL,BaseURL} from '../../Model/Constants'
import './Auth.css'
import Axios from 'axios';
import { ImFontSize } from 'react-icons/im';
import { AiOutlineLineHeight } from 'react-icons/ai';

var isLoggedIn = false

const carouselData = [
    {img:"https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff",
    title:"Title of the first Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff",
    title:"Title of the  second Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff",
    title:"Title of the third Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff",
    title:"Title of the fourth Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
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
        <Carousel>
            {carouselContent.map((cdata)=>{
                return(
                    <Carousel.Item interval={3000}>
                        <img
                        className="img-fluid"
                        id="d-block"
                        src={cdata.img}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{cdata.title}</h3>
                            <p className='content'>{cdata.content}</p>
                        </Carousel.Caption>
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
                        <div id="para">Now more efficient, smarter and easier way—helping you find a perfect foreign intern.</div>
                    </section>
                    </div>

                <div className="col-xs-7 col-sm-7 col-lg-7" id="appimage" style={{alignItems:'center'}}>
                    <img src="https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff" class="img-fluid" />
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
                    <img class="img-fluid" src="https://lh3.googleusercontent.com/qTrOe-KFYcyPX8b_TDQxFv4cHh-dSD1fHMe-M_yX0VHux6YR_QerL9GA2fOgrF9_EnP3S9Sgns94TdwKxzRlPhoUJDb1lxJCVHMmCg=w858-l90-sg-rj-c0xffffff" />
                </div>

                <div class="col-xs-6 col-sm-6 col-lg-6" style={{alignItems:'center'}}>
                    <h1 id="heading">Here we can describe<br></br> some features of our app</h1>
                    <div id="para">Now more efficient, smarter and easier way—helping you find a perfect foreign intern.</div>
                </div>
            </div>

            <h1 id="heading"  style={{marginTop:'5%', textAlign:'center'}}>See how it works</h1>

            <div id="para2">
                Here comes a tag line of frp and some <br></br> snapshots from the portal.
            </div>
            
            <div className ="col-sm-12" style={{marginTop:'5%'}}>
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
    
        return(<h4>Redirecting . Please wait for a second</h4>)
    }
}

export default Auth;
export {LoadingButton,isLoggedIn}