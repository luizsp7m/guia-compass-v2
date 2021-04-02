import React from 'react';

import { Container, Left, Right, Image } from './styles';

function Description() {
  return (
    <Container>
      <Left>
        <p>
        O roupeiro B572 é fabricado 100% em MDP, e conta com excelente repartição, além de amplo espaço para você organizar suas roupas e objetos pessoais. Moderno e funcional, possui 2 portas de correr, pés em polipropileno, cabideiros metálicos e corrediças metálicas. Uma das portas possui frisos cromados, trazendo um diferencial no acabamento. Puxadores metálicos, que agregam beleza e sofisticação ao produto.
        </p>
      </Left>

      <Right>
        <Image />
      </Right>
    </Container>
  );
}

export default Description;