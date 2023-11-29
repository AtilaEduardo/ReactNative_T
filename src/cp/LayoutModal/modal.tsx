import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { styles } from './modal.styled'
import { CpLabel } from '../Label';

const CpModal = () => {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={styles.centralizarModal}>
            <Pressable
                style={[styles.botao, styles.botaoAberto]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.texto}>Abrir Modal</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModal}>
                    <View>
                        <Text style={styles.modalTexto}>Modal</Text>
                        <Pressable
                            style={[styles.botao, styles.botaoFechado]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <CpLabel />
                            <Text style={styles.texto}>Fechar Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CpModal;