import styled from 'styled-components'

export const Container = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`

export const ChatForm = styled.div`
    background: rgba(190, 210, 247, 0.5);
    height: 450px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    justify-content: flex-end;
`

export const Sent = styled.p`
  background: #3d56a0;
    border-radius: 10px;
    font-size: 12px;
    color: white;
    overflow-wrap: anywhere;
    padding: 5px;
`
export const Incoming = styled.p`
  background: #585b64;
    border-radius: 10px;
    font-size: 12px;
    color: white;
    overflow-wrap: anywhere;
    padding: 5px;
`
export const ChatBlock = styled.div`
    padding-top: 20px;
`

export const Left = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5px;
`

export const Right = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5px;
`

export const UserImg = styled.img`
width: 24px;
height: 24px;
`
export const UserNum = styled.p`
  font-size: 24px;
  color: #3d3e42;
`
export const UserPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    background-color: #a4a9ad;
    border-radius: 10px 10px 0 0;
`
export const SendMessage = styled.button`
    border: none;
    outline: none;
    background: none;
`
export const SendImg = styled.img`
    width: 24px;
    height: 24px;
`
export const Input = styled.input`
    width: 360px;
    height: 24px;
    color: #3b3a3a;
    border-radius: 10px 10px 10px 10px;
    border: none;
    padding: 5px;
`

export const InputBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #a4a9ad;
    border-radius: 0 0 10px 10px;
    border: none;
    padding: 5px;
    :focus{
      outline: 0!important;
    }
`
export const NumberBlock = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const InputNum = styled.input`
    font-size: 14px;
    width: 180px;
    height: 24px;
    color: gray;
`

export const ButtonNum = styled.button`
    padding: 5px;
`
