import React from 'react'
import styled from 'styled-components'
import { Images } from './Images'


export const TokenItem = ({token}) => {
    return (
        <div className="content-item">
            <div className="content-item__inner">
                <div className="content-item__inner__logo">
                    <img src={token.image} alt="" />
                    <strong>{token.title}</strong>
                </div>
                <div className="content-item__inner__text">{token.subtitle}</div>
            </div>
        </div>
    )
}
