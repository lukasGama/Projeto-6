import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Card = styled.article`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  position: relative;
  width: 472px;
`

export const Cover = styled.img`
  height: 217px;
  object-fit: cover;
  width: 472px;
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  display: inline-block;
  font-size: 12px;
  font-weight: 900;
  line-height: 14px;
  padding: 6px 4px;
`

export const Content = styled.div`
  border-color: ${cores.vermelho};
  border-style: solid;
  border-width: 0 1px 1px;
  padding: 8px;
`

export const TitleLine = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const Rating = styled.span`
  align-items: center;
  color: ${cores.vermelho};
  display: flex;
  font-size: 18px;
  font-weight: 900;
  gap: 8px;
  line-height: 21px;
`

export const Star = styled.img`
  height: 21px;
  width: 21px;
`

export const Description = styled.p`
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  display: inline-block;
  font-size: 12px;
  font-weight: 900;
  line-height: 14px;
  padding: 6px 4px;
`
