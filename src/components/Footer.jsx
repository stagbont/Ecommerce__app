import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;
 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>LAMA.</Logo> 
           <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima sequi modi autem praesentium ullam sint veritatis dolore non exercitationem necessitatibus esse facere rem, voluptate accusantium voluptates expedita obcaecati doloremque voluptas. Ab neque odit non!
           </Desc>
           <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <Pinterest/>
                </SocialIcon>
           </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer