const Constants = {
    IS_LOGGED_IN : "isLoggedIn",
    YES : "yes",
    NO : "NO",
    USER_PROFILE : "userProfile",
    AUTH_TOKEN : "authToken",
    CHANNELI_DATA: "channeliData",
    PROJECTS : "projects"
}

const BaseURL = "https://frp-backend.herokuapp.com"
const LoginURL = "https://internet.channeli.in/oauth/authorise?client_id=KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI&redirect_uri="
const CLIENT_ID = "KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI"
const SECRET = "KiSTNolWFrQEehYloliUyLRdauKG2XczUL0ST4HapeZXA68XnaOMZ7nWLg6SAwtbJxG7UWlnXdyVO9Do0rcaqFKFxT86ZVmJ5jDRtstmi5Wzidrlk9fh5oZa6CyGegUm"
const CHANNELI_URL = "https://internet.channeli.in"
const ORIGIN = (window.location.hostname.includes['localhost','127.0.0.1']) ? 'http:localhost:3000/#/':"https://foreignresearchportal.herokuapp.com/#/"


const Routes = {
    USER_DETAILS : "/userDetails",
    PROJECTS : "/projects",
    OPEN_AUTH_TOKEN : "/open_auth/token/",
    GET_USER_DATA: "/open_auth/get_user_data/"
}

const JSON_Constants = {
    USER_PROFILE : "userProfile",
}

export  {Constants,BaseURL,Routes,JSON_Constants,CLIENT_ID,SECRET,ORIGIN,CHANNELI_URL};