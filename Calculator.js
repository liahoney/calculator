import { TouchableOpacity } from "react-native"
import { useState } from "react"
import {  Text, View, backgroundColor } from 'react-native';
import styled from 'styled-components/native'

//Button type: 'reset' | 'operator' | 'num'
const Button=({text, onPress, flex, type}) => {
    return (
        <TouchableOpacity 
        style={{
          flex,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderWidth: 0.2,
          borderColor: "black",
        }}>
         <Text style={{ color: "white", fontSize:25 }}>{text}</Text>
        </TouchableOpacity>
    )
}



const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
  }


const ButtonContainer = styled.View`
  flex-direction : row;
  width : 100%;
`;

const ResultContainer = styled.View`
  background-color: ${COLOR.RESULT} ;
  min-height: 50px ;
  justify-content: 'center' ;
  align-items: flex-end ;
  padding: 5px; //top, right, bottom, left
  padding: 5px 10px;
  padding: 5px 10px 5px 10px;
`;


 export default () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator]  = useState(null);  
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null); 
    return (
        <View style={{flex:1, width:250, justifyContent: "center"}}>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
            {/* 결과 */}
             <ResultContainer>
             <Text style={{color: "white", fontSize:35, textAlign: "right"}}>{input}</Text> 
             </ResultContainer>
            <ButtonContainer>
            {/* [AC ` /] */}
            <Button 
             type="reset"
             text="AC"
             onPress={()=> null} 
             flex={3}
             />
            <Button 
             type="operator"
             text="/"
             onPress={()=> null}
             flex={3} 
             />
             </ButtonContainer>
        </View>
        
    )
  }

