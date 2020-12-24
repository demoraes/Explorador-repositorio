import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios no Github</Title>

    <Form>
      <input placeholder="Digite aqui" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/20407168?s=460&u=818190c63bbd10d67f40e6c2ece393d8cda17e03&v=4"
          alt="Gabriel Moraes"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
      </a>
    </Repositories>
  </>
);

export default Dashboard;
