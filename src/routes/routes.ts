import { lazy } from "react"
import main from "../components/layouts/main.layout"

const pages = {
    // main pages
    index: main(lazy(() => import("../pages"))),
    cart: main(lazy(() => import("../pages/cart"))),
    checkout: main(lazy(() => import("../pages/checkout"))),
}

const routes: { name: string, path: string, element: any }[] = [
    { name: "index", path: "/", element: pages.index },
    { name: "cart", path: "/teams", element: pages.cart },
    { name: "checkout", path: "/checkout-us", element: pages.checkout },
]

export default routes
export const url = (name: string, opt: { [key: string]: any } = {}) => {
    let route = routes.find(item => item.name == name)?.path ?? name

    Object.entries(opt).forEach(([key, val]) => route = route.replace(`:${key}`, val))
    return route
}