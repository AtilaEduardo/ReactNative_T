import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    centralizarModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    botao: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    botaoAberto: {
      backgroundColor: '#fbe3ff',
    },
    botaoFechado: {
      backgroundColor: '#fffcff',
    },
    texto: {
      color: 'black',
      textAlign: 'center',
    },
    modalTexto: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  export {styles}