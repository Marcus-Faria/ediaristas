import React from 'react';
import {PageTitleContainer, PageTitleStyled} from './PageTitle.style';


interface PageTitleProps{
    title: string;
    /*Propriedade opcional*/
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
                {props.subtitle}
            </PageTitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;