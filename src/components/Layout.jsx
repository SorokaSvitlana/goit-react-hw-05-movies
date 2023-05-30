import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Suspense } from "react"
import Loader from "./Loader"

const Layout = () => {
	return (
		<div>
			<Header />
			<Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
	)
}

export default Layout