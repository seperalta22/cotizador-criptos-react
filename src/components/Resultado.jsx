import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    gap: 1rem;
    margin-top: 30px;
    margin-bottom: 80px;

`
const Texto = styled.p`
  font-size: 18px;
    span{
        font-weight: bold;
    }
`

const Image = styled.img`
position: fixed;
bottom: 2vh;
right: -10vh;
display: block;
width: 600px;
z-index:-2;
opacity: .1;
`

const Precio = styled.p`
font-size: 30px;
    span{
    font-weight: bold;
}
`






const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
    return (
        <Contenedor>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span> </Precio>
                <Texto>Precio más alto del dia: <span>{HIGHDAY}</span> </Texto>
                <Texto>Precio más bajo del dia: <span>{LOWDAY}</span> </Texto>
                <Texto>Variación últimas 24 hs: <span>{CHANGEPCT24HOUR}</span> </Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span> </Texto>
            </div>
        </Contenedor >
    )
}

export default Resultado
