import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import Receipt from '../assets/receipt.svg'
import Macarons from '../assets/macarons.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Header from '../components/Header'
import { meals, desserts, drinks } from '../utils/data'
import { Card } from '../components/Card'

import img1 from '../assets/Dishes/Mask group-1.png'

export function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center bg-dark-400">
      {/* <header className="w-screen h-28 bg-dark-700 flex justify-between px-7">
        <button>
          <img src={Menu} alt="" />
        </button>
        <img src={Logo} alt="" />
        <button>
          <img src={Receipt} alt="" />
        </button>
      </header> */}

      <Header />
      <section
        style={{ boxShadow: '1rem 2rem 0px 0px hsla(199, 100%, 3%, 1) inset' }}
        className="flex items-center justify-between w-10/12 mx-4 mt-12 bg-gradient-to-b from-gradientgreen-100 to-gradientgreen-200 text-light-300 rounded-lg"
      >
        <img src={Macarons} alt="" />
        <div className="flex flex-col gap-2 mt-8 justify-center pr-5">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </section>

      <section className="text-light-400 w-10/12">
        <strong> Pratos principais</strong>

        {/* <Carousel
          showArrows={true}
          centerMode
          centerSlidePercentage={50}
          showStatus={false}
        >
          {meals.map((meal) => (
            <Card data={meal} key={meal.id} />
          ))}
        </Carousel>

        <Carousel
          showArrows={true}
          centerMode
          centerSlidePercentage={50}
          showStatus={false}
        >
          {desserts.map((dessert) => (
            <Card data={dessert} key={dessert.id} />
          ))}
        </Carousel> */}
    
        <Carousel showArrows={true} showStatus={false} >
          {drinks.map((drink) => (
            <Card data={drink} key={drink.id} />
          ))}
        </Carousel>
      </section>
    </main>
  )
}
