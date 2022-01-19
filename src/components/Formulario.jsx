import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { monedas } from "../data/Monedas"
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error"




const InputSubmit = styled.input`
    background-color: #F6CA0C;
    border: none;
    width: 100%;
    padding: 10px;
    color: #0d2235;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .5s ease;
    margin-top: 30px;

    &:hover{
        background-color:#D4C30B;
        cursor: pointer;
    }
`



const Formulario = ({ setMonedas }) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu Criptomoneda", criptos)



    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=17&tsym=USD"
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto;
            })

            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda, criptomoneda].includes("")) {
            setError(true);

            return;
        }
        setError(false);
        setMonedas({ moneda, criptomoneda })
    }

    return (
        <>

            {error && <Error>Todos los campos son obligatorios.</Error>}

            <form
                onSubmit={handleSubmit}
            >
                < SelectMonedas />
                < SelectCriptomoneda />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario
