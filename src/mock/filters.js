export const studentOptionsMock = [
  {
    value: 1, label: 'Cor Raça', type: 'select',
    options: [
      { value: 0, label: "Aluno não quis declarar cor/raça" },
      { value: 1, label: "Branca" },
      { value: 2, label: "Preta" },
      { value: 3, label: "Parda" },
      { value: 4, label: "Amarela" },
      { value: 5, label: "Indígena" },
      { value: 9, label: "Não dispõe da informação (Não resposta)" },
    ]
  },
  {
    value: 2, label: 'Sexo', type: 'select',
    options: [
      { value: 1, label: "Feminino" },
      { value: 2, label: "Masculino" },
    ]
  },
  {value: 3, label: 'Idade', type: 'input'},
  {
    value: 4, label: 'Tipo de Situação', type: 'select',
    options: [
      { value: 2, label:	"Cursando"},
      { value: 3, label:	"Matrícula trancada"},
      { value: 4, label:	"Desvinculado do curso"},
      { value: 5, label:	"Transferido para outro curso da mesma IES"},
      { value: 6, label:	"Formado"},
      { value: 7, label:	"Falecido"},
    ]
  },
  {
    value: 5, label: 'Possui Deficiência', type: 'select',
    options: [
      { value: 0, label: "Não" },
      { value: 1, label: "Sim" },
      { value: 2, label: "Não Dispõe de Informação" },
    ]
  },
  { value: 6, label: 'Ingresso Por Vestibular', type: 'check'},
  { value: 7, label: 'Ingresso Por ENEM', type: 'check'},
  { value: 8, label: 'Ingresso Por Avaliação Seriada', type: 'check'},
  { value: 9, label: 'Ingresso Por Seleção Simplificada', type: 'check'},
  { value: 10, label: 'Ingresso Por Outro Tipo de Seleção', type: 'check'},
  { value: 11, label: 'Ingresso Por Vaga Remanescente', type: 'check'},
  { value: 12, label: 'Ingresso Por Vaga Programa Especial', type: 'check'},
  { value: 13, label: 'Ingresso Por Transf Exofficio', type: 'check'},
  { value: 14, label: 'Ingresso Por Decisão Judicial', type: 'check'},
  { value: 15, label: 'Ingresso Por Convênio PECG', type: 'check'},
  { value: 16, label: 'Ingresso Por Egresso', type: 'check'},
  { value: 17, label: 'Ingresso Por Outra Forma', type: 'check'},
  { value: 18, label: 'Ingresso Por Reserva Vagas', type: 'check'},
  { value: 19, label: 'Ingresso Por Reserva Etnico', type: 'check'},
  { value: 20, label: 'Ingresso Por Reserva Deficiência', type: 'check'},
  { value: 21, label: 'Ingresso Por Reserva Ens Público', type: 'check'},
  { value: 22, label: 'Ingresso Por Reserva Renda Familiar', type: 'check'},
  { value: 23, label: 'Ingresso Por Reserva Outra', type: 'check'},
  { value: 24, label: 'Utiliza Financiamento Estudantil', type: 'check'},
  { value: 25, label: 'Recebe Apoio Social', type: 'check'},
  { value: 26, label: 'Participa de Atividade Extracurricular', type: 'check'},
  {
    value: 27, label: 'Tipo Escola Conclusão Ens. Médio', type: 'select',
    options: [
      { value: 1, label: "Pública" },
      { value: 2, label: "Privada" },
      { value: 9, label: "Não Dispõe de Informação" },
    ]
  },
  {
    value: 28, label: 'Semestre de Conclusão', type: 'select',
    options: [
      { value: 1, label: "Primeiro Semestre" },
      { value: 2, label: "Segundo Semestre" },
    ]
  },
  {
    value: 29, label: 'Mobilidade Acadêmica', type: 'select',
    options: [
      { value: 1, label: "Nacional" },
      { value: 2, label: "Internacional" },
    ]
  },
  {
    value: 30, label: 'Nacionalidade', type: 'select',
    options: [
      { value: 1, label: "Brasileira"},
      { value: 2, label: "Brasileira - nascido no exterior ou naturalizado"},
      { value: 3, label: "Estrangeira"},
    ]
  },
];

export const collegeOptionsMock = [
  {
    value: 2, label: 'Grau Acadêmico', type: 'select',
    options: [
      { value: 1,	label: "Bacharelado" },
      { value: 2,	label: "Licenciatura" },
      { value: 3,	label: "Tecnológico" },
      { value: 4,	label: "Bacharelado e Licenciatura" },
    ]
  },
  {
    value: 3, label: 'Turno', type: 'select',
    options: [
      { value: 1, label: "Matutino" },
      { value: 2, label: "Vespertino" },
      { value: 3, label: "Noturno" },
      { value: 4, label: "Integral" },
    ]
  },
  {
    value: 4, label: 'Nível Acadêmico', type: 'select',
    options: [
      { value: 1, label: "Graduação" },
      { value: 2, label:"Seqüencial de Formação Específica" },
    ]
  },
  {
    value: 5, label: 'Modalidade de Ensino', type: 'select',
    options: [
      { value: 1, label: "Presencial" },
      { value: 2, label:"Curso a Distância" },
    ]
  },
];