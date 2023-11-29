import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles, formatarTelefone, formatarCep } from './label.styled'


const CpLabel = () => {
    const [nome, onChangeNome] = React.useState('');
    const [endereco, onChangeEndereco] = React.useState('');
    const [telefone, onChangeTelefone] = React.useState('');
    const [cep, onChangeCep] = React.useState('');


    const botaoEnviar = () => {
        console.log('Nome:', nome);
        console.log('Endereço:', endereco);
        console.log('Telefone:', telefone);
        console.log('CEP:', cep);

        onChangeNome('');
        onChangeEndereco('');
        onChangeTelefone('');
        onChangeCep('');
    };


    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNome}
                value={nome}
                maxLength={50}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEndereco}
                value={endereco}
                maxLength={30}
                placeholder="Endereço"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeTelefone(formatarTelefone(text))}
                value={telefone}
                placeholder="Telefone (XX) XXXXXXXXX"
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeCep(formatarCep(text))}
                value={cep}
                maxLength={8}
                placeholder="Cep XXXXX-XXX"
                keyboardType="default"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={botaoEnviar}>
                <Text style={styles.enviar}>Enviar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export { CpLabel };