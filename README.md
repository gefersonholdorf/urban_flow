### UrbanFlow

O UrbanFlow é uma plataforma voltada para a gestão de transporte público, com foco no planejamento de rotas e monitoramento da capacidade de passageiros dos veículos. O sistema permite que os gestores organizem as rotas de ônibus, ajustem horários e distribuam os veículos de forma eficiente com base na quantidade de passageiros. Sem o acompanhamento em tempo real, o sistema foca em estimativas de demanda e análises históricas para ajustar as operações de forma a melhorar a experiência dos passageiros e aumentar a eficiência do serviço.

### Problema a Ser Resolvido:
O sistema busca resolver a alocação ineficiente de veículos no transporte público e a superlotação, permitindo que os gestores planejem as rotas e a distribuição dos ônibus de acordo com a demanda histórica e estimada. Além disso, a falta de informações claras sobre as rotas e horários para os passageiros é abordada.

### Regras de Negócio:
- [ ] Gestão de Rotas: Cada rota de transporte deve ter informações sobre pontos de parada, horários de operação e veículos atribuídos.
- [ ] Capacidade de Veículos: O sistema deve monitorar a quantidade de passageiros nos ônibus, possibilitando ajustes nas rotas e horários com base em padrões de lotação.
- [ ] Ajuste de Frota: Durante horários de pico, o sistema pode sugerir ajustes na quantidade de veículos em uma rota, com base em dados históricos de lotação.
- [ ] Planejamento de Horários: O sistema deve permitir o planejamento de horários para garantir que a capacidade dos veículos seja suficiente para a demanda, sem superlotação.
- [ ] Alertas de Demanda Alta: O sistema deve alertar os gestores sobre uma possível alta demanda para determinadas rotas em horários específicos, para que ajustes possam ser feitos com antecedência.

### Requisitos Funcionais:
- [ ] Gestão de Frota e Rotas: O sistema deve permitir o cadastro e a atualização das rotas, pontos de parada e veículos atribuídos a cada rota.
- [ ] Controle de Lotação: O sistema deve permitir que os gestores registrem e monitorem a quantidade de passageiros por veículo, utilizando dados históricos e previsões de demanda.
- [ ] Planejamento de Horários: Os gestores devem poder criar e ajustar os horários de operação dos ônibus, considerando a demanda prevista e a capacidade dos veículos.
- [ ] Consultas de Rota: Os passageiros devem poder consultar as rotas, horários e a capacidade média dos veículos para planejar suas viagens.
- [ ] Relatórios de Performance: O sistema deve gerar relatórios sobre a performance das rotas e veículos, como a média de lotação ao longo do tempo e eficiência na distribuição de veículos. 

### Requisitos Não Funcionais:
- [ ] Desempenho: O sistema deve ser eficiente ao processar e calcular a distribuição de veículos e a capacidade dos ônibus, mesmo com uma grande quantidade de dados históricos.
- [ ] Escalabilidade: O sistema deve ser escalável para adicionar novas rotas, veículos e cidades conforme necessário, sem afetar a performance.
- [ ] Segurança: O sistema deve garantir que apenas usuários autorizados possam modificar as rotas e alocar os veículos.
- [ ] Disponibilidade: O sistema deve garantir alta disponibilidade para que os gestores possam acessar informações importantes sobre as rotas e a alocação de veículos a qualquer momento.
- [ ] Usabilidade: O sistema deve ser intuitivo para gestores e passageiros, facilitando a consulta de informações e o planejamento de rotas.