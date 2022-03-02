import React from 'react';
import { 
  Text, 
  View, 
} from 'react-native';
import { styles } from '../styles/theme';
import { StyledButton } from '../components/StyledButton';

export const CalculatorScreen = () => {

  const [current, setCurrent] = React.useState('0');
  const [result, setResult] = React.useState<number | string>(0);

  React.useEffect(() => {
    setResult(result);
    setCurrent(result.toString());
  }, [result]);
  
  const clear = () => {
    setCurrent('0');
    setResult(0);
  };

  const buildExpression = ( expression: string ) => {
    if ( expression === '.' && current.endsWith('.') ) return;

    if ( current === '0' || current === '-0' ) {
      (expression === '.') 
        ? setCurrent(current + expression) 
        : setCurrent(expression);
      (current.startsWith('-')) && setCurrent(`-${expression}`);
    } else {
      setCurrent(current + expression);
    }
  };

  const negativePositve = () => {
    (current.includes('-'))
    ? setCurrent(current.replace('-', ''))
    : setCurrent('-' + current);
  };

  const removeLastNumber = () => {
    ((current.startsWith('-') && current.length === 2) || current.length === 1) 
    ? setCurrent('0')
    : setCurrent(current.slice(0, -1));  
  };

  const calculate = () => {
    try {
      setResult(eval(current));
      setCurrent(result.toString());
    } catch (err) {
      (err instanceof SyntaxError) && setResult('Syntax error');
    }
  };

  return (
    <View style={styles.calcContainer}>
      <View>
        <Text
          style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={ 1 }
        >
          { current }
        </Text>
      </View>

      {/* Row 1 */}
      <View style={ styles.row }>
        <StyledButton 
          text="C" 
          backgroundColor="rgba(255, 255, 255, 0.5)"
          onPress={ clear }
        />
        <StyledButton 
          text="+/-" 
          backgroundColor="rgba(255, 255, 255, 0.5)"
          onPress={ negativePositve }
        />
        <StyledButton 
          text="del" 
          backgroundColor="rgba(255, 255, 255, 0.5)"
          onPress={ removeLastNumber }
        />
        <StyledButton 
          text="÷" 
          backgroundColor="orange"
          color="white"
          onPress={() => buildExpression('/')}
        />
      </View>

      {/* Row 2 */}
      <View style={ styles.row }>
        <StyledButton 
          text="7" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('7')}
        />
        <StyledButton 
          text="8" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('8')}
        />
        <StyledButton 
          text="9" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('9')}
        />
        <StyledButton 
          text="X" 
          backgroundColor="orange"
          color="white"
          onPress={() => buildExpression('*')}
        />
      </View>

      {/* Row 3 */}
      <View style={ styles.row }>
        <StyledButton 
          text="4" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('4')}
        />
        <StyledButton 
          text="5" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('5')}
        />
        <StyledButton 
          text="6" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('6')}
        />
        <StyledButton 
          text="-" 
          backgroundColor="orange"
          color="white"
          onPress={() => buildExpression('-')}
        />
      </View>

      {/* Row 4 */}
      <View style={ styles.row }>
        <StyledButton 
          text="1" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('1')}
        />
        <StyledButton 
          text="2" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('2')}
        />
        <StyledButton 
          text="3" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('3')}
        />
        <StyledButton 
          text="+" 
          backgroundColor="orange"
          color="white"
          onPress={() => buildExpression('+')}
        />
      </View>

      {/* Row 5 */}
      <View style={ styles.row }>
        <StyledButton 
          text="0" 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          buttonStyle={{
            width: 168,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          textStyle={{
            marginLeft: 30,
          }}
          onPress={() => buildExpression('0')}
        />
        <StyledButton 
          text="." 
          backgroundColor="rgba(35, 35, 35, 1)"
          color="white"
          onPress={() => buildExpression('.')}
        />
        <StyledButton 
          text="=" 
          backgroundColor="orange"
          color="white"
          onPress={calculate}
        />
      </View>
    </View>
  )
}
