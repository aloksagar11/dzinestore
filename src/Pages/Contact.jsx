import React, { useContext } from "react";
import styled from "styled-components";

import { Button } from "../Styles/Button";

const Contact = () => {
  document.title ="Contact";
  return <Wrapper>
    <div className="container text-center">
      <p className="feel">
        Feel free to contact us
      </p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4977028103294!2d78.40914321422852!3d29.150002467224297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bbb0dfddb8433%3A0xb4b35d3e2f315370!2sDzine%20Solution%20Noorpur%20-%20Computer%20Center!5e0!3m2!1sen!2sin!4v1669880107732!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />


    <div className="container ">
      <form action="" className="contact m-auto py-4 my-4">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Your Message Here" cols="30" rows="10"></textarea>
        <Button >Submit</Button>
      </form>
    </div>


  </Wrapper>
};

export default Contact;


const Wrapper = styled.section`
  margin: 5rem auto;
  .feel{
    font-size: 2.2rem;
    margin: 4rem auto;
  }
  .contact{
    max-width:50rem;
    display: flex;
    gap: 2rem 0;
    flex-direction: column;
    justify-content: center;
  }

  
`