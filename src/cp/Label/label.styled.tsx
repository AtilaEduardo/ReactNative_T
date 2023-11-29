import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 5,
      borderWidth: 5,
      borderRadius: 25,
      borderBlockColor: 'pink',
      padding: 10,
    },

    button: {
      height: 20,
      margin: 50,
      borderWidth: 5,
      borderRadius: 25,
      borderBlockColor: 'pink',
      padding: 10,
    },

    enviar: {
      height: 1,
      margin: -20,
      left: 28,
      padding: 10,
    },

  });


  const formatarTelefone = (input: string) => {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    const str = input.replace(/[^0-9]/g, "").slice(0, 11);
  
    const result = str.replace(regex, "($1)$2-$3");
  
    return result;
  }

  const formatarCep = (input: string) => {
    const regex = /^([0-9]{5})([0-9]{3})$/;
    const str = input.replace(/[^0-9]/g, "").slice(0, 8);
  
    const result = str.replace(regex, "$1-$2");
  
    return result;
  }

  export {styles, formatarTelefone, formatarCep}