import Header from "../_components/header"
import Footer from "../_components/footer"
import School from "./sections/education"

export default function Education() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Header />
            <br />
            <h1 className="text-4xl font-bold font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
                My Education
            </h1>
            
            <br/>
            <br/>
            <div className="text-2xl font-[family-name:var(--font-geist-mono)] bg-gradient-to-r from-green-600 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
                
                    <School/>
                
            </div>
            <Footer />
        </div>
    )
}