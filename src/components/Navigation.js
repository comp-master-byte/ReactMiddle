import React from 'react'
import '../styles/navigation.scss'
import { Images } from './Images'
import { Links } from './Links'
import { Options } from './Options'
import styled from 'styled-components'
import { MyButton } from '../UI/button/MyButton'
import { EnterButton } from '../UI/button/EnterButton'
import { motion } from 'framer-motion'

const Header = styled.header`
    width: 100%;
    height: 100px;
`

const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`

const Select = styled.select`
    border: 1px solid #fff;
    width: 200px;
    background: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    border-radius: 6px;
    padding: 5px 20px;
`

const Option = styled.option`
    background: #000;
    color: #fff;
    border-radius: 6px;
`

const ButtonBlock = styled.div`
    display: inline-block;
`

export const Navigation = () => {
    return (
        <Header>
            <Container>
                <div className="header-logo">
                    <div className="header-logo__image">
                        <img src={Images[0].image} alt="" />
                    </div>
                    <div className="header-logo__title">
                        Portfolio of Turin
                    </div>
                </div>
                <nav className="header-navigation">
                    <Select>
                        {Options.map(option => {
                            return ( 
                                <Option>{option.option}</Option>
                            )
                        })}
                    </Select>
                    {Links.map(item => {
                        return (
                            <motion.li 
                                whileHover={{scale: 1.15}} 
                                transition={{duration: 0.2}}
                                key={item.id} 
                                className="header-navigation__item">
                                <a href="#" className={`${item.className} header-navigation__link`}>{item.name}</a>
                            </motion.li>
                        )
                    })}
                    <ButtonBlock className="header-button">
                        <MyButton style={{marginLeft: '50px'}}>Регистрация</MyButton>
                        <EnterButton style={{marginLeft: '13px'}}>Войти</EnterButton>
                    </ButtonBlock>
                </nav>
            </Container>
        </Header>
    )
}
