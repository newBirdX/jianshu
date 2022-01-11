import React, { Component } from 'react'
import {RecomendItem,RecomendWrapper} from '../style'
export default class Recomend extends Component {
    render() {
        return (
            <RecomendWrapper >
                <RecomendItem className='it1'></RecomendItem>
                <RecomendItem className='it2'></RecomendItem>
                <RecomendItem className='it3'></RecomendItem>
                <RecomendItem className='it4'></RecomendItem>
            </RecomendWrapper>
        )
    }
}
