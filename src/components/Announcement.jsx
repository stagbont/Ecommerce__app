import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over &#8373; 300
    </Container>
  )
}

export default Announcement