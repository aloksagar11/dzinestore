import React, { useState } from 'react'
import styled from 'styled-components'

const MyImages = ({imgs}) => { 
  // console.log(imgs)
  const [imgIndex,setImgIndex] = useState(0);
  return (

    <Wrapper>
      <div className="grid grid-four-column">
        {
          imgs.map((ele,index)=>{
            return(
              <img src={ele.url}
              alt={ele.filename}
              className="product-image"
              key={index}
              onClick={()=>{setImgIndex(index)}}/>
            )
          })
        }
      </div>
        <div className="main">
          <img src={imgs[imgIndex].url} alt={imgs[imgIndex].filename }/>
        </div>

    </Wrapper>
  )
}

export default MyImages;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  
  .grid{
    display: flex;
    flex-direction: column ;               
    justify-items:center;
    align-items: center;
    width: 100%;
    gap: 1rem;  
    overflow: hidden;
    img{
      max-width: 100%;
      max-width: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({theme})=>theme.colors.shadow};
      transition: all 0.1s linear;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
  .grid-four-column{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4 ,1fr);
  }
  .main{
    display: grid;
    place-items:center;
    order:1;

    img{
      max-width: 100%;
      height: auto;
      box-shadow: ${({theme})=>theme.colors.shadow};
    }
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  
    display: flex;
    flex-direction: column ;               
    order:1;  
    
  
  .grid-four-column{
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4 ,1fr);
  }
    
  }
  

`