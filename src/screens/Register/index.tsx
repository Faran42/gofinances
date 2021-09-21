import React, { useState } from 'react';

import { Input } from '../../components/Forms/Input/';
import { Button } from '../../components/Forms/Button/';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/';

import {
  Header,
  Title,
  Container,
  Form,
  Fields,
  TransactionTypes
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handletransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handletransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handletransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
}