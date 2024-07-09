import React from "react"
import routes from "./routes"
import $loader from "../components/loader"
import { Route, Routes, BrowserRouter } from "react-router-dom"

export default () => {
    // return <$loader />
    return <React.Suspense fallback={<$loader />}>
        <BrowserRouter>
            <Routes>
                {routes.map(props => <Route {...props} key={props.path} element={<props.element />} />)}
            </Routes>
        </BrowserRouter>
    </React.Suspense>
}