
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            {/*commong header */}

            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default ShoppingLayout
