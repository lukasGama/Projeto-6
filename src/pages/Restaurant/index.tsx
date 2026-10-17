import Header from '../../components/Header'

import pizza from '../../assets/images/pizza_italiana.png'
import yakisoba from '../../assets/images/yakisoba_chines.png'
import sushi from '../../assets/images/sushi_hioki.png'
import bacalhau from '../../assets/images/bacalhau_noruegues.png'
import caldo from '../../assets/images/caldo_chileno.png'
import chilli from '../../assets/images/chilli_mexicano.png'

const yakisobaDescription = 'Massa, legumes e carnes de primeira!'
const pizzaDescription = 'Clássicas pizzas italianas!'
const sushiDescription =
  'Sushi, temakis, hot filadélfia, Uramaki e muito mais...'
const bacalhauDescription = 'Bacalhau em sua maior essência!'
const caldoDescription = 'A melhor escolha pra quem quer se esquentar!!!'
const chilliDescription = 'Esse é pra quem gosta de Pimenta.'

import {
  AddButton,
  Kitchen,
  Hero,
  HeroContent,
  Menu,
  ProductCard,
  ProductDescription,
  ProductGrid,
  ProductImage,
  ProductTitle,
  RestaurantName
} from './styles'

type Product = {
  id: number
  title: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'yakisoba Chinês',
    image: yakisoba,
    description: yakisobaDescription
  },
  {
    id: 2,
    title: 'Pizzas Italianas',
    image: pizza,
    description: pizzaDescription
  },
  {
    id: 3,
    title: 'Suishi Hioki',
    image: sushi,
    description: sushiDescription
  },
  {
    id: 4,
    title: 'Bacalhau Norueguês',
    image: bacalhau,
    description: bacalhauDescription
  },
  {
    id: 5,
    title: 'Caldo chileno',
    image: caldo,
    description: caldoDescription
  },
  {
    id: 5,
    title: 'Chilli Mexicano',
    image: chilli,
    description: chilliDescription
  }
]

const Restaurant = () => (
  <>
    <Header variant="restaurant" />
    <Hero>
      <HeroContent className="container">
        <Kitchen>Italiana</Kitchen>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </HeroContent>
    </Hero>
    <Menu>
      <ProductGrid className="container">
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <AddButton type="button">Adicionar ao carrinho</AddButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Menu>
  </>
)

export default Restaurant
