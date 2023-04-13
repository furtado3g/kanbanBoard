export default function ModalInfo({ ...props }) {
  if (props.open) {
    return (
      <>
        <div className={`modal-cubo-backdrop`}>
          <div className="modal-cubo modal-cubo-green" id="modal-cubo-cubo">
            <div className="modal-cubo-header">
              <div className="modal-cubo-discipline">FLEX210003</div>
              <div className="modal-cubo-logo">
                <img src="http://portal.filadelfia.br:7778/CuboUnifil/assets/img/cube.white.png" alt="cubo" />
              </div>
              <div className="modal-cubo-header-description">
                ANTROPOLOGIA FILOSÓFICA E SOCIOLOGIA@
              </div>
              <div className="modal-cubo-header-content">
                <div className="modal-cubo-header-content-item">
                  <b>40h</b>
                  <br />
                  <small>Controle de horários</small>
                </div>
                <div className="modal-cubo-header-content-item">
                  <b>EAD</b>
                  <br />
                  <small>Modalidade</small>
                </div>
              </div>
              <div className="modal-cubo-close-button">
                <i
                  className="fa-solid fa-xmark cursor-pointer"
                  onClick={(e) => props.handleWithModalClose(false)}
                ></i>
                <div className="modal-cubo-header-expand">
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="modal-cubo-header-expand-content">
              <div></div>
              <div className="flex">
                <div className="modal-cubo-header-expand-item">
                  <b>40h</b>
                  <br />
                  <small>Controle de horários</small>
                </div>
                <div className="modal-cubo-header-expand-item">
                  <b>EAD</b>
                  <br />
                  <small>Modalidade</small>
                </div>
              </div>
            </div>
            <div className="modal-cubo-body">
              <div className="modal-cubo-body-content-list">
                <div className="modal-cubo-body-content-list-item">
                  <h4>Área de conhecimento</h4>
                  Ciências Sociais E Informação
                </div>
                <div className="modal-cubo-body-content-list-item">
                  <h4>Área de funcional</h4>
                  Fundamentação Humanística E Social
                </div>
                <div className="modal-cubo-body-content-list-item">
                  <h4>Área de conhecimento</h4>
                  Ciências Sociais E Informação
                </div>
                <div className="modal-cubo-body-content-list-item">
                  <h4>Competências</h4>
                  Atenção Aos Detalhes
                  <br />
                  Empatia
                  <br />
                  Habilidade Organizacional
                  <br />
                  Relacionamento Interpessoal
                  <br />
                  Senso Crítico
                  <br />
                  Ética
                  <br />
                  Resolução De Problemas
                  <br />
                  Liderança
                </div>
              </div>
              <div className="modal-cubo-body-content">
                <h4>Objetivos de Aprendizagem</h4>
                Nesta Unidade Curricular, serão abordados o conhecimento e suas
                formas de manifestações, linguagem e significado, o problema do
                homem, subjetividade, corporeidade, historicidade e trabalho.
                Além disso, será apresentada uma introdução ao estudo da
                sociedade, das relações étnico raciais, da história e da cultura
                afro-brasileira e indígena. A desigualdade, as mudanças sociais
                e a relação da sociedade com o sistema de saúde também serão
                discutidos.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
