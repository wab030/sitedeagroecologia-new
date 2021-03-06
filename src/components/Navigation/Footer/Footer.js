import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import phoneIcon from '../../../assets/images/icons/phoneicon.svg';
import emailIcon from '../../../assets/images/icons/emailicon.svg';


const footer = () => {
    return (
        <footer className="Footer">
            <div className="AcessoRapido Bloco">
                <p className='Titulo'>Acesso Rápido</p>
                <NavLink to='/' exact>Início</NavLink><br />
                <NavLink to="/politicasnacionais" exact>Políticas Nacionais</NavLink><br />
                <NavLink to="/assentamentomiltonsantos" exact>Assentamento Milton Santos</NavLink><br />
                <NavLink to="/tecnologiassociais" exact>Tecnologias Sociais</NavLink><br />
                <NavLink to="/educacaopopular" exact>Educação Popular</NavLink><br />
                <NavLink to='/quemsomos' exact>Quem Somos</NavLink>
            </div>
            <div className='PaginasdeInteresse Bloco'>
                <p className='Titulo'>Páginas de Interesse</p>
                <li><a href="http://agroecologia.gov.br/" target="_blank" rel="noopener noreferrer">Agroecologia Governo Federal</a></li>
                <li><a href="http://www.osala-agroecologia.org/" target="_blank" rel="noopener noreferrer">Observatório de Soberania Alimentar e Agroecologia</a></li>
                <li><a href="http://aba-agroecologia.org.br/" target="_blank" rel="noopener noreferrer">Associação Brasileira de Agroecologia</a></li>
                <li><a href="https://www.embrapa.br/" target="_blank" rel="noopener noreferrer">Embrapa</a></li>
                <li><a href="http://www.cati.sp.gov.br/" target="_blank" rel="noopener noreferrer">Coordenaria de Desenvolvimento Rural Sustentável</a></li>
                <li><a href="http://www.incra.gov.br/" target="_blank" rel="noopener noreferrer">INCRA</a></li>

            </div>
            <div className='Contato Bloco'>
                <p className='Titulo'>Entre em Contato</p>
                <div>
                    <p> R. Heitor Lacerda Guedes, 1000,
                        <br />Cidade Satélite Íris,
                        <br />Campinas - SP
                        <br />CEP: 13059-581
                    </p>
                    <div className='Fone'>
                        <div className='Icone'>
                            <img src={phoneIcon} alt='Phone Icon'></img>
                        </div>
                        (19) 3746-6128
                    </div>
                    <div className='Email'>
                        <div className='Icone'>
                            <img src={emailIcon} alt='Email Icon'></img>
                        </div>
                        erika.batista@ifsp.edu.br
                    </div>
                    <div className='Facebook'>
                        <p>Acompanhe as novidades</p>
                        <a href="https://www.facebook.com/neaes.ifsp.campinas/" target="_blank" rel="noopener noreferrer">
                            <div className='IconeFacebook Icone'>
                                <span>f</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default footer;