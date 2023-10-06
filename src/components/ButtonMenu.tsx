import styled from 'styled-components'

// import logo from "../assets/images/Logo.png";
// import pattern from "../assets/images/Pattern.png";

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  margin: 0;
  padding: 0;
  color: var(--white-color);
  font-size: 24px;
  /* font-size: 1.5rem;
  margin-bottom: 1.25rem; */
  cursor: pointer;
`;

const ButtonImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  color: var(--white-color);
  padding-right: 12px;
`;

const ButtonMenu = (props: {
    src: string; text: string 
}) => {
  return (
    <>
      <ButtonImg src={props.src}></ButtonImg>
      <Button type="button">{props.text}</Button>
    </>
  )
}

export default ButtonMenu
