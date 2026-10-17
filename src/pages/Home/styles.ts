import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Main = styled.main`
  background-color: ${cores.creme};
`

export const RestaurantGrid = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(2, 472px);
  padding: 80px 0 120px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }
`
