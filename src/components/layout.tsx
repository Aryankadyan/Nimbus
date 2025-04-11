import type { PropsWithChildren } from "react"

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
        header
        <main className="min-h-screen container mx-auto px-4 py-8">
            {children}
        </main>
        <footer className="border-t backdrop-blur py-11">
            <div className="container mx-auto px-4 text-center text-teal-400">
                <p>Made with 💌 by Aryan Kadyan</p>
            </div>
        </footer>
    </div>
  )
}

export default Layout
