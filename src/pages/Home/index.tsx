import Header from '../../components/Header'
import RestaurantCard, {
  type Restaurant
} from '../../components/RestaurantCard'
import { Main, RestaurantGrid } from './styles'

import massa from '../../assets/images/massa_trattoria.png'
import sushi from '../../assets/images/sushi_hioki.png'
import bacalhau from '../../assets/images/bacalhau_noruegues.png'
import caldo from '../../assets/images/caldo_chileno.png'
import mexicano from '../../assets/images/chilli_mexicano.png'
import arabe from '../../assets/images/prato_arabe.png'

const sushiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const pastaDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const bacalhauDescription = 'Os melhores pratos de bacalhau da noruega'
const caldoDescription = 'O melhor prato para o inverno, pratos chilenos'
const chiliDescription =
  'Comida apimentada também temos, os melhores chilis-mexicanos'

const arabeDescription = 'O oriente medio vem em peso para o catálogo da eFood'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushi,
    tags: ['Destaque da semana', 'Japonesa'],
    rating: 4.9,
    description: sushiDescription
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription
  },
  {
    id: 3,
    title: 'Bacalhau norueguês',
    image: bacalhau,
    tags: ['Norueguêsa'],
    rating: 4.6,
    description: bacalhauDescription
  },
  {
    id: 4,
    title: 'Caldo chileno',
    image: caldo,
    tags: ['Chilena'],
    rating: 4.6,
    description: caldoDescription
  },
  {
    id: 5,
    title: 'Chilli-Mexicano',
    image: mexicano,
    tags: ['mexicana'],
    rating: 4.6,
    description: chiliDescription
  },
  {
    id: 6,
    title: 'Kibe arábe',
    image: arabe,
    tags: ['arabe'],
    rating: 4.6,
    description: arabeDescription
  }
]

const Home = () => (
  <>
    <Header />
    <Main>
      <RestaurantGrid className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantGrid>
    </Main>
  </>
)

export default Home
