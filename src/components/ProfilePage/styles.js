import styled from 'styled-components'


export const Container = styled.div`
    /* Rectangle 146 */


    position: relative;
    width: 356px;
    height: 315px;
    margin-top: 165px;

    /* Tons de branco/Branco */

    background: #FDFDFD;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

export const Content = styled.div`
    
    img{
        position: absolute;
        width: 75px;
        height: 75px;
        right: 145px;
        top: 40px;

        background: url(.jpg);
        border-radius: 5.25px;
    }

    .pictureLabel{
        /* Profile picture */
        position: absolute;
        width: 77px;
        height: 12px;
        left: 138px;
        top: 20px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        /* identical to box height, or 100% */


        /* Tons de preto/Preto 1 */

        color: #2F2F2F;

    }

    .form-block{
        position: absolute;
        width: 385.88px;
        height: 288px;
        left: 25px;
        top: 135px;

        
    }

    input{
        /* Campo de input */

        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 18px 18px 20.25px;

        position: static;
        width: 270.88px;
        height: 10.25px;
        left: 10px;
        top: 32px;

        
        /* Brancos/Branco 2 */

        background: #F4F4F4;
        border-radius: 9px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 9px 0px;

        border: 0;
    }

    .logoutButton{
        position: absolute;
        width: 272px;
        height: 44px;
        top: -100px;
        left: 600px;

        /* Primárias/Azul b2 */

        background: #02274F;
        border-radius: 6.33333px;

        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
    }


`