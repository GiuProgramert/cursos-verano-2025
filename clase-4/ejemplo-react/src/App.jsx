import Button from "./components/button";
import ColoredBox from "./components/ColoredBox";
import Input from "./components/input";
import Navbar from "./components/Navbar";
import { getFullYear } from "./utils/getFullYear";

export default function App() {
  return (
    <main >
      <Navbar />
      <section className="flex justify-center items-center h-screen flex-col gap-2">
        <h1>Primera página React</h1>

        <Button>Prueba Normal</Button>
        <Button variant="outlined">Prueba Outlined</Button>

        <Button disabled>Prueba Normal Disabled</Button>
        <Button variant="outlined" disabled>Prueba Outlined Disabled</Button>

        <Input />

        <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-8 sm:grid-rows-4 gap-x-[24px] gap-y-[16px] text-xl text-white uppercase">
          <ColoredBox color="#FFC756">Shows</ColoredBox>
          <ColoredBox color="#FFC756">Arte</ColoredBox>
          <ColoredBox color="#F66139">Teatro</ColoredBox>
          <ColoredBox color="#F66139">Fotografia</ColoredBox>
          <ColoredBox color="#7F8FFE">Festivales</ColoredBox>
          <ColoredBox color="#7F8FFE">Tecnología</ColoredBox>
          <ColoredBox color="#56B78C">Cine</ColoredBox>
          <ColoredBox color="#56B78C">Diseño</ColoredBox>
        </div>

        <h3 className="text-[#1F3251] text-[11px] leading-normal">Hecho por Cursos de Verano {getFullYear()}</h3>
      </section>
    </main>
  )
}