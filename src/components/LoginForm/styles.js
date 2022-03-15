import styled from 'styled-components'

export const Container = styled.div`
    /* Frame 1296 */
    position: absolute;
    width: 438px;
    height: 534px;
    left: 501px;
    top: 161px;

    /* Brancos/Branco */

    background: #FFFFFF;
    box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    label{
        /* Título input */
        position: static;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 73.33%;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height, or 125% */

        letter-spacing: 0.03em;

        /* Pretos/Preto 2 */

        color: #262626;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 9px 0px;
    }

    input{
        /* Campo de input */

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 18px 18px 20.25px;

        position: static;
        width: 338.88px;
        height: 10.25px;
        left: 0px;
        top: 32px;

        /* Brancos/Branco 3 */

        background: #F1F1F1;
        border-radius: 9px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 9px 0px;

        border: 0;
    }


    .submit{
        font-size: 1rem;
        color: white;
        background: #02274F;

        /* Frame 633 */
        position: absolute;
        width: 385.88px;
        height: 54px;
        left: 2px;
        top: 239.88px;

        /* Primárias/Azul b2 */
        background: #02274F;
        border-radius: 9px;
    }

    .logo{
        /* LOGOTIPO 1 */
        position: absolute;
        width: 309.6px;
        height: 94.81px;
        left: 60px;
        top: 40px;

    }

    .form-block{
        position: absolute;
        width: 385.88px;
        height: 288px;
        left: 25.88px;
        top: 205.88px;
    }

    .error{
        font-size: 1rem;
        font-weight: bold;
        color: red;
        position: absolute;
        width: 385.88px;
        height: 288px;
        left: 25.88px;
        top: 175.88px;
    }
`