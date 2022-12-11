import React from 'react'
import styled from 'styled-components';
import { useProductContext } from '../ContextAPI/ContextData'

const FeaturedSection = () => {
    const {isLoading,featuredProducts} = useProductContext();

    if(isLoading){
        return<>
        <div className="container text-center">

        <h3>.......loading</h3>
        </div>
        </>
    }
  return (
    <Wrapper className='section'>
        <div className="container">
            check now
            <h2>Featured Products</h2>
        </div>
        

    </Wrapper>
   
  )
}

export default FeaturedSection

const Wrapper = styled.section`
    padding: 9rem 0;
    margin-bottom: 4rem;
    background-color: ${({ theme }) => theme.colors.bg};
    .container{
        max-width: 120rem;
    }

`