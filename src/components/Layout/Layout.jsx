import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { Suspense } from "react"
import Loader from "../Loader"
import { Main } from "./Layout.Styled"


const Layout = () => {
	return (
		<div>
			<Header />
			<Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </div>
	)
}

export default Layout