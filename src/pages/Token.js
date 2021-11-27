import React, {useState} from 'react'
import styled from 'styled-components'
import  {TokenItem}  from '../components/TokenItem'
import { Images } from '../components/Images'

const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    color: #fff;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MainText = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin-top: 50px;
`

const tokens = [
    {id: 1, image: Images[2].image , title: 'Tron', subtitle: 'Экслюзивные игры на блокчейне Tron'},
    {id: 2, image: Images[3].image , title: 'lottery', subtitle: 'Лотереи с крупным призовым фондом'},
    {id: 3, image: Images[4].image , title: 'stake', subtitle: 'Стейкинг и доход от стейкинга партнёров'},
    {id: 4, image: Images[5].image , title: 'gain', subtitle: 'Игровая платформа с 5 источниками дохода'},
]


export const Token = () => {
    return (
        <Section className="token">
            <Container>
                <Content className="content">
                    {tokens.map(token => {
                        return  <TokenItem token={{
                                id: token.id, image: token.image, title: token.title, subtitle: token.subtitle
                            }}/>
                    })}
                </Content>
                
                <MainText className="mainText">
                    <div className="mainText__image">
                        <img src={Images[7].image} alt="" />
                        <img src={Images[6].image} alt="" />
                    </div>
                    <div className="mainText-text">
                        <div className="mainText-text__title">Nimble Token</div>
                        <div className="mainText-text__subtitle">   Nimble Token – это utility-токен игровой платформы  KiboTron, построенной на смарт-контрактах Tron. Применение технологии блокчейн обеспечивает 100% честность игры и распределения средств, мгновенные выплаты бонусов и призовых, и абсолютную анонимность. <br /> <br /> Nimble, в переводе с английского – шустрый токен. Это энергия платформы, двигатель,    создающий постоянную динамику, прито средств, активность игроков, и поддержание интереса к платформе. <br /> <br /> Многообразие вариантов применения Nimble Token, его токеномика, механизмы распределения и майнинга обеспечивают устойчивы рост стоимости токена в перспективе. 
                        </div>
                    </div>
                </MainText>

            </Container>
        </Section>
    )
}
