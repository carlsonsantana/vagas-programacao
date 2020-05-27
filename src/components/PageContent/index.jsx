import React from 'react';

import JobList from '../JobList';

export default function PageContent() {
  const jobs = [
    {
      title: '[REMOTO] Especialista em React',
      description: (
        `É importante questionar o quanto o início da atividade geral de
        formação de atitudes facilita a criação das condições financeiras e
        administrativas exigidas. Caros amigos, a complexidade dos estudos
        efetuados cumpre um papel essencial na formulação dos procedimentos
        normalmente adotados. Assim mesmo, a contínua expansão de nossa
        atividade exige a precisão e a definição do levantamento das variáveis
        envolvidas. Por outro lado, a competitividade nas transações comerciais
        auxilia a preparação e a composição do sistema de formação de quadros
        que corresponde às necessidades. Do mesmo modo, o novo modelo estrutural
        aqui preconizado estende o alcance e a importância do retorno esperado a
        longo prazo.`
      ),
      url: 'https://github.com/carlsonsantana',
      publishedAt: (new Date(Date.now() - 172800000)).toISOString()
    },
    {
      title: '[REMOTO] DevOps na Empresa tal',
      description: (
        `Nunca é demais lembrar o peso e o significado destes problemas, uma vez
        que a consolidação das estruturas desafia a capacidade de equalização
        dos índices pretendidos. No mundo atual, a constante divulgação das
        informações faz parte de um processo de gerenciamento dos
        relacionamentos verticais entre as hierarquias. As experiências
        acumuladas demonstram que a determinação clara de objetivos talvez venha
        a ressaltar a relatividade da gestão inovadora da qual fazemos parte.
        Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se
        o comprometimento entre as equipes causa impacto indireto na reavaliação
        de todos os recursos funcionais envolvidos.`
      ),
      url: 'https://github.com/carlsonsantana/criptoarbitragem',
      publishedAt: (new Date(Date.now() - 1123200000)).toISOString()
    }
  ];

  return (
    <div>
      <main>
        <JobList jobs={jobs} />
      </main>
    </div>
  );
}
