import Home from "../view/pages/home"
import Nam from "../view/pages/nam"


const publicRoutes =[
    {path:'/',component:Home},
    {path:'/thoi-trang-nam',component:Nam},

]
const privateRoutes =[
    {
        
    }
]

export {publicRoutes, privateRoutes}