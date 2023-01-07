import React, { createFactory } from 'react'
import { RowContainer, BaseRowContainer, Image, ColumnContainer, LightText, BoldText } from './BriefCard.styles';

type HeaderProps = {
    title?: string,
    subtitle?: string,
    currency?: number,
}

const BriefCard = ({ title, subtitle, currency }: HeaderProps) => {
    return (
        <RowContainer>
            <BaseRowContainer>
                <ColumnContainer>
                    <LightText>{title}</LightText>
                    <BoldText>{subtitle}</BoldText>
                </ColumnContainer>
            </BaseRowContainer>
            <ColumnContainer>
                <LightText>{''}</LightText>
                <BoldText>{currency}</BoldText>
            </ColumnContainer>
        </RowContainer>
    )
}

export default BriefCard