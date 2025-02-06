import Logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav class="bg-black flex sm:block flex-col gap-2 items-center pb-6  md:pb-[0px]">
            <header class="flex flex-col sm:flex-row gap-6 sm:pb-auto justify-between items-center px-[40px] md:px-[119px] py-3">
                <img src={Logo} alt="Logo" width="91" height="72" />
                
                <input type="text" placeholder="O que você procura?" class="border-2 border-white rounded-[10px] font-work-sans placeholder:text-white placeholder:font-work-sans text-[16px] p-[11px] opacity-50 w-[382px] hidden md:block" />
            
                <ul class="text-white flex gap-20">
                <li class="text-xl"><a href="#">Programación</a></li>
                <li class="text-xl"><a href="#">Categorías</a></li>
                <li class="text-xl"><a href="#">Seu local</a></li>
                </ul>
            </header>
            <div class="block md:hidden">
                <input type="text" placeholder="O que você procura?" class="border-2 border-white rounded-[10px] font-work-sans placeholder:text-white placeholder:font-work-sans text-[16px] p-[11px] opacity-50 w-[382px]" />
            </div>
        </nav>
    )
}