import styled, { createGlobalStyle } from "styled-components";

export default function App() {
  const GlobalStyles = createGlobalStyle`
    *{ margin: 0; padding: 0; box-sizing: border-box; background-color: #d7d7ab; }
  `
  const Container = styled.div`
    width: 100%;
    max-width: 1090px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    margin-top: 30px;
  `

  const Content = styled.div`
    width: 250px;
  `
  const Image = styled.img`
    width: 250px;
    height: 200px;
    border-radius: 25px;
  `

  const Title = styled.h3`
    font-family: Arial;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    background-color: transparent;
  `

  const InfoContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 40px;
    display: flex;
    gap: 15px;
    padding: 10px 0;
  `

  const Info = styled.p`
    font-weight: 400;
    font-family: Arial;
    text-align: center;
    background-color: #FFFFFF;
  `

  const DiffCont = styled.div`
    background-color: #FFFFFF;
    padding: 20px 10px;
    border-radius: 20px;
    margin-top: 15px;
  `

  const Difficulty = styled.button`
    ${(({$diff}) => {
      switch ($diff) {
        case '0':
          return `background-color: green; color: white;`
        case '1':
          return `background-color: orange; color: white;`
        case '3':
          return `background-color: red; color: white;`
        default:
          return `background-color: #d7d7ab; color: black;`
      }
    })}
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
  `

    return (
      <>
        <GlobalStyles />
        <Container>
          <Content>
            <Image src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"/>
            <Title>Burger</Title>
            <InfoContainer>
              <Info>20 min</Info>
              <Info>6 servings</Info>
              <Info>210 caloeries</Info>
            </InfoContainer>
            <DiffCont>
              <Title>Difficulty</Title>
              <InfoContainer>
                <Difficulty $diff='0'>Easy</Difficulty>
                <Difficulty>Medium</Difficulty>
                <Difficulty>Hard</Difficulty>
              </InfoContainer>
            </DiffCont>
          </Content>
          <Content>
            <Image src="https://cloudykitchen.com/wp-content/uploads/2025/12/sliced-pepperoni-pizza.jpg"/>
            <Title>Pizza</Title>
            <InfoContainer>
              <Info>30 min</Info>
              <Info>8 servings</Info>
              <Info>350 caloeries</Info>
            </InfoContainer>
            <DiffCont>
              <Title>Difficulty</Title>
              <InfoContainer>
                <Difficulty>Easy</Difficulty>
                <Difficulty $diff='1'>Medium</Difficulty>
                <Difficulty>Hard</Difficulty>
              </InfoContainer>
            </DiffCont>
          </Content>
          <Content>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqB8BU6DvawY42mqEb0GS-gp99yzzs79EkIy3-ULbpA&s=10"/>
            <Title>Sushi</Title>
            <InfoContainer>
              <Info>25 min</Info>
              <Info>6 servings</Info>
              <Info>180 caloeries</Info>
            </InfoContainer>
            <DiffCont>
              <Title>Difficulty</Title>
              <InfoContainer>
                <Difficulty $diff='0'>Easy</Difficulty>
                <Difficulty>Medium</Difficulty>
                <Difficulty>Hard</Difficulty>
              </InfoContainer>
            </DiffCont>
          </Content>
          <Content>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBFRDPpru8TkiP-X60OTejt9_3KMViFxCcNASUxyuqQ&s=10"/>
            <Title>Miso soup</Title>
            <InfoContainer>
              <Info>35 min</Info>
              <Info>2 servings</Info>
              <Info>250 caloeries</Info>
            </InfoContainer>
            <DiffCont>
              <Title>Difficulty</Title>
              <InfoContainer>
                <Difficulty>Easy</Difficulty>
                <Difficulty>Medium</Difficulty>
                <Difficulty $diff='3'>Hard</Difficulty>
              </InfoContainer>
            </DiffCont>
          </Content>
        </Container>
      </>
      
    )
}