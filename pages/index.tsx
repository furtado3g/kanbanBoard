import { useEffect, useState } from "react";
import Lane from "../components/Lane";
import Activity from "../components/Activity";
import ModalInfo from "../components/ModalInfo";
import ButtonInterval from "../components/ButtonInterval";

interface DisciplineType {
  id_disciplina: string;
  nm_disciplina: string;
  ds_emento: string;
}

export default function Index() {
  const [disciplines, setDisciplines] = useState({
    Segunda: [
      {
        id_disciplina: "CBIO210014",
        tp_modalidade: "P",
        tp_uc: "F",
        nm_disciplina:
          "DNA: TRANSMISS\u00C3O E FUNDAMENTOS DA EXPRESS\u00C3O G\u00CANICA ",
        ds_ementa:
          "Nesta Unidade Curricular, ser\u00E3o estudadas as caracter\u00EDsticas do material gen\u00E9tico e da estrutura do DNA. Al\u00E9m disso, ser\u00E3o abordados os mecanismos de replica\u00E7\u00E3o do DNA em procariotos e eucariotos e os fundamentos da express\u00E3o g\u00EAnica (transcri\u00E7\u00E3o e tradu\u00E7\u00E3o).",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "",
        nm_disciplina:
          "Favor clicar no + para adicionar disciplina para este horário",
      },
    ],
    Terça: [
      {
        id_disciplina: "CBIO210013",
        nm_disciplina: "UNIDADES SENSORIAIS E PELE: ABORDAGEM PR\u00C1TICA",
        ds_ementa:
          "Nesta Unidade Curricular, ser\u00E3o abordados os conceitos de histologia das unidades sensoriais e da pele do ser humano. O aluno poder\u00E1 fazer o reconhecimento do tecido epitelial por meio da vis\u00E3o microsc\u00F3pica e estudar\u00E1 a diferencia\u00E7\u00E3o de pele grossa e pele fina. Al\u00E9m disso, ser\u00E1 abordada a diferencia\u00E7\u00E3o das camadas da pele, bem como seus elementos, como c\u00E9lulas presentes no tecido, vasos sangu\u00EDneos e o tecido estrutural.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "CBIO210015",
        tp_modalidade: "P",
        tp_uc: "C",
        nm_disciplina:
          "AVALIA\u00C7\u00C3O MORFOL\u00D3GICA, COMPOSI\u00C7\u00C3O E INTERA\u00C7\u00D5ES FRENTE \u00C0 ARQUITETURA TECIDUAL: ABORDAGEM PR\u00C1TICA",
        ds_ementa:
          "Nesta Unidade Curricular, o aluno poder\u00E1 reconhecer e diferenciar a arquitetura tecidual de diversos sistemas por meio da microscopia eletr\u00F4nica. Ser\u00E1 poss\u00EDvel identificar as c\u00E9lulas e o tecido estrutural do trato gastrointestinal, do sistema renal, hep\u00E1tico, card\u00EDaco, nervoso e muscular. Al\u00E9m disso, ser\u00E1 feita a correla\u00E7\u00E3o da estrutura observada por meio do microsc\u00F3pio e sua fun\u00E7\u00E3o no organismo.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
      },
    ],
    Quarta: [
      {
        id_disciplina: "CBIO210016",
        nm_disciplina:
          "CITOGEN\u00C9TICA APLICADA E ACONSELHAMENTO GEN\u00C9TICO: ABORDAGEM PR\u00C1TICA -INATIVO",
        ds_ementa:
          "Nesta Unidade Curricular, ser\u00E3o estudados os danos no DNA, seus mecanismos de reparo, as muta\u00E7\u00F5es g\u00EAnicas e as doen\u00E7as gen\u00E9ticas. Al\u00E9m disso, ser\u00E3o abordados o padr\u00E3o de transmiss\u00E3o das caracter\u00EDsticas gen\u00E9ticas (heran\u00E7a monog\u00EAnica), citogen\u00E9tica humana, altera\u00E7\u00F5es cromoss\u00F4micas e aconselhamento gen\u00E9tico.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "CBIO210017",
        nm_disciplina: "MICROORGANISMOS NA SA\u00DADE E NA DOEN\u00C7A HUMANA",
        ds_ementa:
          "Diariamente, somos atacados por bact\u00E9rias presentes no ar, \u00E1gua, alimentos e nos animais. Muitos desses microrganismos n\u00E3o apresentam risco \u00E0 sa\u00FAde humana, por\u00E9m algumas esp\u00E9cies apresentam potencial para desencadear doen\u00E7as. O profissional da sa\u00FAde, n\u00E3o somente como agente no combate \u00E0s doen\u00E7as, mas tamb\u00E9m como difusor do bem-estar, precisa compreender a microbiologia. Esta Unidade Curricular ir\u00E1 abordar a estrutura das bact\u00E9rias, seu modo de nutri\u00E7\u00E3o, como s\u00E3o transmitidas, como causam doen\u00E7as e mecanismos de elimina\u00E7\u00E3o visando a preven\u00E7\u00E3o de doen\u00E7as. Al\u00E9m disso, \u00E9 necess\u00E1rio entender como os antibacterianos atuam, pois \u00E9 necess\u00E1rio orientar a popula\u00E7\u00E3o sobre a import\u00E2ncia de seguir os protocolos de tratamento e evitar o surgimento de superbact\u00E9rias.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
    ],
    Quinta: [
      {
        id_disciplina: "CBIO210001",
        nm_disciplina:
          "HEREDITARIEDADE, REPRODU\u00C7\u00C3O E DESENVOLVIMENTO HUMANO",
        ds_ementa:
          "Nesta Unidade Curricular, ser\u00E3o abordados os conceitos de hereditariedade, forma\u00E7\u00E3o das c\u00E9lulas gam\u00E9ticas, concep\u00E7\u00E3o e desenvolvimento embrion\u00E1rio. Al\u00E9m disso, ser\u00E3o discutidos os sistemas reprodutivos, enfatizando a gametog\u00EAnese e os princ\u00EDpios da hereditariedade, a import\u00E2ncia dos anexos embrion\u00E1rios, folhetos germinativos e outros componentes correlatos. Os fatores que influenciam direta ou indiretamente a hereditariedade desde \u00E0 concep\u00E7\u00E3o at\u00E9 a forma\u00E7\u00E3o de um novo organismo ser\u00E3o abordados e discutidos.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "E",
        tp_uc: "F",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "CBIO210002",
        nm_disciplina:
          "HEREDITARIEDADE, REPRODU\u00C7\u00C3O E DESENVOLVIMENTO HUMANO: ABORDAGEM PR\u00C1TICA",
        ds_ementa:
          "Nesta Unidade Curricular, ser\u00E3o abordados os conceitos de hereditariedade, forma\u00E7\u00E3o das c\u00E9lulas gam\u00E9ticas, concep\u00E7\u00E3o e desenvolvimento embrion\u00E1rio. Al\u00E9m disso, ser\u00E3o discutidos os sistemas reprodutivos, enfatizando a gametog\u00EAnese e os princ\u00EDpios da hereditariedade, a import\u00E2ncia dos anexos embrion\u00E1rios, folhetos germinativos e outros componentes correlatos. Os fatores que influenciam a hereditariedade desde \u00E0 concep\u00E7\u00E3o at\u00E9 a forma\u00E7\u00E3o de um novo organismo ser\u00E3o estudados por meio da identifica\u00E7\u00E3o dos folhetos embrion\u00E1rios em l\u00E2minas, com o aux\u00EDlio do microsc\u00F3pio, e pela identifica\u00E7\u00E3o de estruturas embrion\u00E1rias e anexos embrion\u00E1rios em prot\u00F3tipos que mimetizam o desenvolvimento embrion\u00E1rio humano.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "E",
        tp_uc: "C",
      },
    ],
    Sexta: [
      {
        id_disciplina: "CBIO210003",
        nm_disciplina:
          "C\u00C9LULA: DA ULTRAESTRUTURA DETALHADA AT\u00C9 A ORGANIZA\u00C7\u00C3O TECIDUAL",
        ds_ementa:
          "Esta Unidade Curricular abordar\u00E1 a estrutura e fun\u00E7\u00E3o das c\u00E9lulas, desde a baixa organiza\u00E7\u00E3o de uma bact\u00E9ria \u00E0 alta complexidade de uma c\u00E9lula humana. Para tanto, ser\u00E1 poss\u00EDvel compreender os n\u00EDveis de organiza\u00E7\u00E3o dos tecidos que formam o corpo humano e identificar os constituintes celulares com \u00EAnfase em sua estrutura (envolt\u00F3rios, organ\u00F3ides e n\u00FAcleo) e fun\u00E7\u00E3o. Al\u00E9m disso, ser\u00E1 poss\u00EDvel reconhecer diferentes tipos celulares e suas estruturas, bem como suas fun\u00E7\u00F5es cruciais para a manuten\u00E7\u00E3o da homeostase corp\u00F3rea e organiza\u00E7\u00E3o dos tecidos.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "CBIO210004",
        nm_disciplina:
          "C\u00C9LULA: DA ULTRAESTRUTURA DETALHADA AT\u00C9 A ORGANIZA\u00C7\u00C3O TECIDUAL. ABORDAGEM PR\u00C1TICA.",
        ds_ementa:
          "Por meio de aulas pr\u00E1ticas, ser\u00E3o abordadas a estrutura e fun\u00E7\u00E3o das c\u00E9lulas, desde a baixa organiza\u00E7\u00E3o de uma bact\u00E9ria \u00E0 alta complexidade de uma c\u00E9lula humana. Para tanto, ser\u00E1 poss\u00EDvel compreender os n\u00EDveis de organiza\u00E7\u00E3o dos tecidos que formam o corpo humano e identificar os constituintes celulares com \u00EAnfase em sua estrutura (envolt\u00F3rios, organ\u00F3ides e n\u00FAcleo) e fun\u00E7\u00E3o. Al\u00E9m disso, ser\u00E1 poss\u00EDvel reconhecer diferentes tipos celulares e suas estruturas, bem como suas fun\u00E7\u00F5es cruciais para a manuten\u00E7\u00E3o da homeostase corp\u00F3rea e organiza\u00E7\u00E3o dos tecidos.",
        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
    ],
    Sabado: [
      {
        id_disciplina: "CBIO210005",
        nm_disciplina:
          "BIOELETROG\u00CANESE APLICADA \u00C0S FUN\u00C7\u00D5ES...",
        ds_ementa:
          "Esta Unidade Curricular abordar\u00E1 os conte\u00FAdos da Biof\u00EDsica, uma ci\u00EAncia interdisciplinar que aplica as teorias e os m\u00E9todos da f\u00EDsica que regem os sistemas biol\u00F3gicos. Ser\u00E1 poss\u00EDvel compreender a biof\u00EDsica de membranas excit\u00E1veis e da contra\u00E7\u00E3o muscular. O estudo de c\u00E9lulas com potencial eletrog\u00EAnico \u00E9 vital para a compreens\u00E3o do controle dos processos fisiol\u00F3gicos como pensamento, emo\u00E7\u00E3o e contra\u00E7\u00E3o muscular. O sistema nervoso \u00E9 composto por este tipo celular, cuja fun\u00E7\u00E3o \u00E9 coordenar os sistemas do organismo atrav\u00E9s do armazenamento de informa\u00E7\u00F5es, da capta\u00E7\u00E3o de sensa\u00E7\u00F5es e da efetua\u00E7\u00E3o de rea\u00E7\u00F5es atrav\u00E9s de mecanismos hormonais e motores.",

        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
      {
        id_disciplina: "intervalo",
        ds_message: "Intervalo",
      },
      {
        id_disciplina: "CBIO210006",
        nm_disciplina:
          "BIOELETROG\u00CANESE APLICADA \u00C0S FUN\u00C7\u00D5ES FISIOL\u00D3GICAS E CONTROLE NEUROEND\u00D3CRINO: ABORDAGEM PR\u00C1TICA. ",
        ds_ementa:
          "Esta Unidade Curricular abordar\u00E1, por meio de aulas pr\u00E1ticas, os conte\u00FAdos da Biof\u00EDsica, uma ci\u00EAncia interdisciplinar que aplica as teorias e os m\u00E9todos da f\u00EDsica que regem os sistemas biol\u00F3gicos. Ser\u00E1 poss\u00EDvel compreender a biof\u00EDsica de membranas excit\u00E1veis e da contra\u00E7\u00E3o muscular. O estudo das c\u00E9lulas com potencial eletrog\u00EAnico \u00E9 vital para a compreens\u00E3o do controle dos processos fisiol\u00F3gicos como pensamento, emo\u00E7\u00E3o e contra\u00E7\u00E3o muscular. O sistema nervoso \u00E9 composto por este tipo celular, cuja fun\u00E7\u00E3o \u00E9 coordenar os sistemas do organismo atrav\u00E9s do armazenamento de informa\u00E7\u00F5es, da capta\u00E7\u00E3o de sensa\u00E7\u00F5es e da efetua\u00E7\u00E3o de rea\u00E7\u00F5es atrav\u00E9s de mecanismos hormonais e motores.",

        nm_professor: "Lucas Furtado",
        nr_sala: "705",
        tp_modalidade: "P",
        tp_uc: "C",
      },
    ],
  });
  const [isModalOpen, setModalOpen] = useState(false);

  function handleWithModalClose(isOpen: boolean) {
    setModalOpen(false);
  }
  function handleWithModalOpen(isOpen: boolean) {
    setModalOpen(true);
  }

  function handleWithActivityRemoval({ ...props }) {
    const { discipline } = props;
    let filteredDisciplines: any = {};
    Object.keys(disciplines).forEach((k) => {
      filteredDisciplines[k] = disciplines[k].filter(
        (item) => item.id_disciplina !== discipline
      );
    });
    setDisciplines(filteredDisciplines);
  }
  return (
    <>
      <div className="min-w-full min-h-screen board">
        {Object.keys(disciplines).map((key) => {
          return (
            <Lane title={key} key={key}>
              {disciplines[key].map((i, k) => {
                if (i.id_disciplina == "intervalo") {
                  return <ButtonInterval />;
                }
                return (
                  <Activity
                    title={`${i.id_disciplina} `}
                    handleWithModalOpen={handleWithModalOpen}
                    handleWithActivityRemoval={handleWithActivityRemoval}
                    discipline={i.id_disciplina}
                    modality={i.tp_modalidade}
                    ucType={i.tp_uc}
                    key={i.id_disciplina}
                  >
                    <p>{i.nm_disciplina.substr(0, 29) + "..."}</p>
                    <p>{i.nm_professor}</p>
                    <p>Sala {i.nr_sala}</p>
                  </Activity>
                );
              })}
            </Lane>
          );
        })}
      </div>
      <ModalInfo
        open={isModalOpen}
        handleWithModalClose={handleWithModalClose}
      />
    </>
  );
}
