import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Images } from '../components/Images'
import { MyButton } from '../UI/button/MyButton'

const Section = styled.section`
    width: 100%;
    height: 90vh;
`

const Content = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
`

const Container = styled.div`
    margin-top: 185px;
    flex-basis: 40%;
    margin-left: 180px;
`

function scrollTo(element) {
    window.scroll ({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
}
    
export const Landing = () => {

    useEffect(() => {
        const tokenPage = document.querySelector('.token')
        const clickedButton = document.querySelector('.section-btn')
    
        clickedButton.addEventListener('click', function() {
            scrollTo(tokenPage)
        })
    },[])
    
    return (
        <Section>
            <Content>
                <Container>
                    <div className="section-title">Присоединяйся к революции в мире гемблинга</div>
                    <div className="section-paragraph">100% честность игры и распределения средств</div>
                    <MyButton 
                        style={{boxShadow: '0px 0px 64px rgba(138, 249, 173, 0.5)', 
                                background: 'linear-gradient(105.56deg, #E2F685 18.43%, #8AF9AD 89.58%)',
                                padding: '15px 30px', borderRadius: '15px'
                    }}>
                        Открыть аккаунт
                    </MyButton>
                </Container>
                <div className="section-image">
                    <img src={Images[1].image} alt="" />
                </div>
                <button className="section-btn"></button>
            </Content>
        </Section>
    )
}
