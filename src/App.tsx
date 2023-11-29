import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Container } from './App.style';
import React from 'react';
import CpModal from './cp/LayoutModal/modal';

function App() {
  return (
    <Container>
      <CpModal/>
      <StatusBar style="auto" />
    </Container>
  );
}

export default registerRootComponent(App);

