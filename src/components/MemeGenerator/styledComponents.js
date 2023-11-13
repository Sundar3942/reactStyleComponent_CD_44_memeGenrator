// Style your components here
import styled from 'styled-components'

export const MainPage = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LeftSection = styled.div`
  width: 50%;
`
export const RightSection = styled.div`
  width: 50%;
  padding: 40px;
`
export const Heading = styled.h1`
  font-size: 35px;
  color: #35469c;
`
export const Form = styled.form`
  width: 100%;
`
export const Label = styled.label`
  font-size: 14px;
  color: #7e858e;
`
export const TextInput = styled.input`
  width: 100%;
  max-width: 400px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
`
export const Select = styled.select`
  width: 100%;
  max-width: 400px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomButton = styled.button`
  width: 150px;
  border: none;
  background-color: #0b69ff;
  color: white;
  padding: 12px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
`
export const Meme = styled.div`
  width: 500px;
  height: 300px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.fontSize}px;
`
export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #d7dfe9;
`
