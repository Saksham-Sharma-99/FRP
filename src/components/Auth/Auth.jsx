import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import {logo} from '../NavBars/TopNav/assets/index'
import App from '../../App'
import {Carousel,Button} from 'react-bootstrap'
import Axios from 'axios'
import './Auth.css'

var isLoggedIn = false

const carouselData = [
    {img:"https://images.fineartamerica.com/images-medium-large-5/iit-roorkee-atinder-paul-singh.jpg",
    title:"Title of the first Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://postmarkfromfoster.files.wordpress.com/2014/10/september-2014-postmark-14.jpg",
    title:"Title of the  second Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://c.ndtvimg.com/2019-02/kh0snovg_mahatma-gandhi-central-library-iit-roorkee_625x300_04_February_19.jpg",
    title:"Title of the third Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/EGBR5vDUYAA-JVP-647x363.jpeg?dzkBrr25av3UV2M_SwYFPvUohOZSgFoh",
    title:"Title of the fourth Slide",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
    ]

function simulateNetworkRequest() {
    return new Promise((resolve) => {
        console.log('clicked sign in')
        sessionStorage.setItem('isLoggedIn','yes')
        Axios.get("https://internet.channeli.in/oauth/authorise?client_id=KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI&redirect_uri=http://localhost:3000/&state=/").then((res=>{
            console.log(res)
        }))
        isLoggedIn = true;
        document.getElementById('root').classList.remove('#auth')
        setTimeout(resolve, 2000)});
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
                        className="d-block w-100"
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
    return (
        <div className='container-fluid' style ={{alignItems:"center"}}>
            <div className ="row">

                <div className='col-lg-9'>
                <CarouselElement content={carouselData}/>
                </div>


                <div className="col-lg-3" style={{alignItems:'center'}}>

                    <h3 className="h3 mb-3 font-weight-normal" style={{textAlign:'center' ,marginTop:'40px'}}>
                        To continue, sign in with your Channel-I account 
                    </h3>
                    
                    <LoadingButton />
                    <p className="mt-5 mb-3 text-muted" style={{textAlign:'center'}}>&copy; IR Cell</p>
                    <p>ps: this auth screen's layout will be changed</p>
                </div>

            </div>
        </div>
    )
}

export default Auth;
export {LoadingButton,isLoggedIn}