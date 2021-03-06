import React from 'react';
import SaibaMais from '../../SaibaMais/SaibaMais';
import TopoDaPagina from '../../TopoDaPagina/TopoDaPagina';
import './Visitas.css';

import CarrosseldeFotos from '../../CarroseldeFotos/CarrosseldeFotos';

import foto1 from '../../../assets/images/EducacaoPopular/Visitas/foto1.png';
import visita1 from '../../../assets/images/EducacaoPopular/Visitas/Visita-01.png';
import visita2 from '../../../assets/images/EducacaoPopular/Visitas/Visita-02.png';
import visita3 from '../../../assets/images/EducacaoPopular/Visitas/Visita-03.png';
import visita4 from '../../../assets/images/EducacaoPopular/Visitas/Visita-04.png';
import visita5 from '../../../assets/images/EducacaoPopular/Visitas/Visita-05.png';
import visita6 from '../../../assets/images/EducacaoPopular/Visitas/Visita-06.png';
import visita7 from '../../../assets/images/EducacaoPopular/Visitas/visita-07.jpg';
import visita8 from '../../../assets/images/EducacaoPopular/Visitas/visita-08.jpg';

import mutiraoFoto1 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.1_teste.jpg';
import mutiraoFoto2 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.3_teste.jpg';
import mutiraoFoto3 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.4_teste.jpg';
import mutiraoFoto4 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.11_teste.jpg';
import mutiraoFoto5 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.14_teste.jpg';
import mutiraoFoto6 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.15_teste.jpg';
import mutiraoFoto7 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.19_teste.jpg';
import mutiraoFoto8 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.25_teste.jpg';
import mutiraoFoto9 from '../../../assets/images/EducacaoPopular/MutiraoAgroflorestal/m.27_teste.jpg';

import marielleFoto1 from '../../../assets/images/AcampamenteMarielle/foto1.jpg';
import marielleFoto2 from '../../../assets/images/AcampamenteMarielle/foto2.jpg';
import marielleFoto3 from '../../../assets/images/AcampamenteMarielle/foto3.jpg';
import marielleFoto4 from '../../../assets/images/AcampamenteMarielle/foto4.jpg';
import marielleFoto5 from '../../../assets/images/AcampamenteMarielle/foto5.jpg';
import marielleFoto6 from '../../../assets/images/AcampamenteMarielle/foto6.jpg';
import marielleFoto7 from '../../../assets/images/AcampamenteMarielle/foto7.jpg';
import marielleFoto8 from '../../../assets/images/AcampamenteMarielle/foto8.jpg';
import marielleFoto9 from '../../../assets/images/AcampamenteMarielle/foto9.jpg';;


const visitas = () => {
    const conteudo1 = <ul className="card-text">
        <li><a href="https://www.cmp.ifsp.edu.br/index.php/noticias/564-neaes-promove-i-visita-ao-assentamento-milton-santos-vivencias-da-agricultura-familiar-e-agroecologica" target="_blank" rel="noopener noreferrer">Neaes promove I Visita ao Assentamento Milton Santos - vivência e aprendizado</a></li>
    </ul>

    return (
        <div>
            <TopoDaPagina menu="Educação Popular" submenu="Visitas e Vivências"></TopoDaPagina>
            <div className="container-fluid Visitas">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={""}></img>
                        <p className="texto1">As visitas e vivências são etapas prioritárias da metodologia de pesquisa participativa e da própria Educação Popular. As visitas e vivências ocorreram com participação de estudantes e pesquisadores no Assentamento Milton Santos, e posteriormente na Ocupação Marielle Vive, para aulas, avaliações/ validações participativas, mutirões de plantação agroecológica e etc, tanto dos agricultores para as formações realizadas com os grupos de consumo e posterior venda dos alimentos.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="planosCinza">
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">VISITAS DE CAMPO AO ASSENTAMENTO MILTON SANTOS</p>
                            <div className="texto1">
                                <p><strong>I VISITA</strong></p>
                                <p>No dia 15 de maio de 2018 o Núcleo de Estudos em Agroecologia, Educação e Sociedade – Neaes, em parceria com a Coordenadoria de Extensão do IFSP Campinas, realizou a I Visita de Campo ao Assentamento Milton Santos – Vivências da Agricultura Familiar e Produção Agroecológica na Região Metropolitana de Campinas.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <SaibaMais conteudo={conteudo1}></SaibaMais>
                    <div className="row" style={{ paddingBottom: "50px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src={visita3} width="50%" alt={"Visita 2"}></img>
                            <img src={visita4} width="50%" alt={"Visita 2"}></img>
                            <hr style={{ marginTop: "60px" }} color="#707070"></hr>
                            <div className="texto1">
                                <p><strong>II VISITA</strong></p>
                                <p>No dia 23 de março de 2019 os alunos do Instituto Federal de Campinas que fazem parte do grupo de pesquisa NEAES visitaram, em conjunto com os Professores e orientadores André Bordignon e Estela Batista o Assentamento Milton Santos.</p>
                            </div>
                            <img src={visita1} width="50%" alt={"Visita 2"}></img>
                            <img src={visita2} width="50%" alt={"Visita 2"}></img>
                            <hr style={{ marginTop: "60px" }} color="#707070"></hr>

                            <div className="texto1">
                                <p><strong>III VISITA</strong></p>
                                <p>No dia 06 de abril de 2019, a Cooperflora e a Regional Campinas do MST promoveram visita ao Assentamento Milton Santos, e conversa a respeito do trabalho no campo, da agroecologia, do contexto político-social e do uso de agrotóxicos. Durante toda a manhã, pessoas envolvidas com a rede de consumo (Comunidade que Sustenta a Agricultura), pesquisadores(as), amigos(as) e assentados(as) trocaram informações e aprendizados, e foram agraciados com um delicioso café da manhã com produtos do local. Terminando com visita à uma casa e sua produção.</p>
                            </div>
                            <img src={visita5} width="50%" alt={"Visita 3"}></img>
                            <img src={visita6} width="50%" alt={"Visita 3"}></img>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">MUTIRÃO DA SAÚDE</p>
                        <div className="texto1">
                            <p>No dia 15 de setembro de 2018 aconteceu o Mutirão Saúde da Família, Segurança Alimentar, Saúde e Auto-Cuidados. Realizada por Adriane Delício e equipe Faculdade Mandic.</p>
                        </div>
                        <img src={visita7} width="50%" alt={"Multirão de Saúde 1"}></img>
                        <img src={visita8} width="50%" alt={"Multirão de Saúde 2"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="planosCinza">
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="card-body planos">VISITA DE CAMPO AO ACAMPAMENTO “MARIELLE VIVE”</p>
                            <div className="texto1">
                                <p>Aconteceu no dia 06 de julho de 2019 a finalização do curso "Agroecologia, Segurança alimentar e tecnologias para agricultura familiar" e entrega de certificados. Foi feita em conjunto com visita e atividade prática no acampamento Marielle Vive, em Valinhos. Essa visita teve a participação da nutricionista Carla Caratin.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="Carrossel">
                        <CarrosseldeFotos
                            foto1={marielleFoto1}
                            foto2={marielleFoto2}
                            foto3={marielleFoto3}
                            foto4={marielleFoto4}
                            foto5={marielleFoto5}
                            foto6={marielleFoto6}
                            foto7={marielleFoto7}
                            foto8={marielleFoto8}
                            foto9={marielleFoto9}
                            id={"Marielle"}
                        />
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className="card-body planos">MUTIRÃO AGROFLORESTAL NO ASSENTAMENTO MS</p>
                        <div className="texto1">
                            <p>Aconteceu no dia 11 de maio de 2019 o Mutirão Agroflorestal no Assentamento Milton Santos, como parte das III Jornadas Universitárias em Defesa da Reforma Agrária. Organizado pelo grupo de pesquisa, extensão e educação popular MOSOA - Movimentos Sociais, Agroecologia, Autogestão e Autonomia - com a participação de Rafael Virgínio dos Santos (Agrônomo e Mestrando em Agroecologia/UFSCar).</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="Carrossel">
                        <CarrosseldeFotos
                            foto1={mutiraoFoto1}
                            foto2={mutiraoFoto2}
                            foto3={mutiraoFoto3}
                            foto4={mutiraoFoto4}
                            foto5={mutiraoFoto5}
                            foto6={mutiraoFoto6}
                            foto7={mutiraoFoto7}
                            foto8={mutiraoFoto8}
                            foto9={mutiraoFoto9}
                            id={"Multirao"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default visitas;