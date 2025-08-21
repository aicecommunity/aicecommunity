
import auth_bg from '@/images/auth_bg.png'

export default function AuthLayout({children}: {children:React.ReactNode}){
    return(
        <div
            className="w-full min-h-screen bg-center bg-cover flex flex-col items-center justify-center p-4 text-[#2C2C2C]"
            style={{ backgroundImage: `url(${auth_bg.src})` }}
        >
            {children}
        </div>
    )
}