import { TouchableOpacity } from "react-native"


//Button type: 'reset' | 'operator' | 'num'
const Button=({text, onPress, flex, type}) => {
    return (
        <TouchableOpacity style={{}}>

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

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT} ;
  min-height: 50px ;
`;


  export default () => {
    const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator]  = useState(null);  
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null); 
    return (
        <View style={{flex:1, width:20, justifyContent: "center"}}>
            {/* 결과 */}
             <InputContainer>
             <Text style={{color: "white", fontSize:35}}>{input}</Text>
             </InputContainer>
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