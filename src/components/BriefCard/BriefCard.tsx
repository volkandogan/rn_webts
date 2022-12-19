import React from 'react'
import { RowContainer, BaseRowContainer, Image, ColumnContainer, LightText, BoldText } from './BriefCard.styles';

const BriefCard = ({ }) => {
    return (
        <RowContainer>
            <BaseRowContainer>
                <ColumnContainer>
                    <LightText>hrader</LightText>
                    <BoldText>İşlem Adedi: 3</BoldText>
                </ColumnContainer>
            </BaseRowContainer>
            <ColumnContainer>
                <LightText>{''}</LightText>
                <BoldText>100</BoldText>
            </ColumnContainer>
        </RowContainer>
    )
}

export default BriefCard