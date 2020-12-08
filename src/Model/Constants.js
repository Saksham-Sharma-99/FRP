const Constants = {
    IS_LOGGED_IN : "isLoggedIn",
    YES : "yes",
    NO : "NO",
    USER_PROFILE : "userProfile",
    PROJECTS : "projects"
}

const BaseURL = "http://localhost:5000"
const LoginURL = "https://internet.channeli.in/oauth/authorise?client_id=KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI&redirect_uri="
const CLIENT_ID = "KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI"
const SECRET = "KiSTNolWFrQEehYloliUyLRdauKG2XczUL0ST4HapeZXA68XnaOMZ7nWLg6SAwtbJxG7UWlnXdyVO9Do0rcaqFKFxT86ZVmJ5jDRtstmi5Wzidrlk9fh5oZa6CyGegUm"
const CHANNELI_URL = "https://internet.channeli.in"
const ORIGIN = "https://saksham-sharma-99.github.io/FRP/"


const Routes = {
    USER_DETAILS : "/userDetails",
    PROJECTS : "/projects",
    OPEN_AUTH_TOKEN : "/open_auth/token/"
}

const JSON_Constants = {
    USER_PROFILE : "userProfile",
}

export  {Constants,BaseURL,Routes,JSON_Constants,CLIENT_ID,SECRET,ORIGIN,CHANNELI_URL};