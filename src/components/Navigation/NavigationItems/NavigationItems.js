import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import arrow from '../../../assets/images/menu/arrow.svg';
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Início</NavigationItem>

        <li className='Menu1'>
            <p className="TituloMenu">Políticas Nacionais <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/politicasnacionais">INTRODUÇÃO</NavigationItem>
                <NavigationItem link="/pnapo">PNAPO</NavigationItem>
                <NavigationItem link="/planapo">PLANAPO</NavigationItem>
                <NavigationItem link="/plansan">PLANSAN</NavigationItem>
                <NavigationItem link="/paa">PAA</NavigationItem>
                <NavigationItem link="/pnae">PNAE</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Assentamento Milton Santos <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/assentamentomiltonsantos">INTRODUÇÃO</NavigationItem>
                <NavigationItem link='/mshistoriaelutas' active>HISTÓRIA E LUTAS</NavigationItem>
                <NavigationItem link='/mscooperflora' active>COOPERATIVA COOPERFLORA</NavigationItem>
                <NavigationItem link='/msgruposdeconsumo' active>GRUPOS DE CONSUMO</NavigationItem>
                <NavigationItem link='/msfeiras' active>FEIRAS</NavigationItem>

            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Tecnologias Sociais <img src={arrow} alt={"Flecha"}/></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/tecnologiassociais">INTRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsappagrocomunicacao' active>APP AGROCOMUNICAÇÃO</NavigationItem>
                <NavigationItem link='/tsdatalutaproducao' active>DATALUTA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsirrigadorautomatizado' active>IRRIGADOR AUTOMATIZADO</NavigationItem>
                <NavigationItem link='/tsminhocarioautomatizado' active>MINHOCÁRIO AUTOMATIZADO</NavigationItem>
                <NavigationItem link='/tsmapeamentodaproducao' active>MAPEAMENTO DA PRODUÇÃO</NavigationItem>
                <NavigationItem link='/tsfichasagroecologicas' active>FICHAS AGROECOLÓGICAS</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Educação Popular <img src={arrow} alt={"Flecha"} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link="/educacaopopular">INTRODUÇÃO</NavigationItem>
                <NavigationItem link='/epcursosfic' active>CURSOS FIC</NavigationItem>
                <NavigationItem link='/epformacoes' active>FORMAÇÕES</NavigationItem>
                <NavigationItem link='/epdiagnosticoruralparticipativo' active>DIAGNÓSTICO RURAL PARTICIPATIVO</NavigationItem>
                <NavigationItem link='/epavaliacaoevalidacao' active>AVALIAÇÃO E VALIDAÇÃO</NavigationItem>
                <NavigationItem link='/epvisitasevivencias' active>VISITAS E VIVÊNCIAS</NavigationItem>
            </ul>
        </li>

        <li className='Menu1'>
            <p className="TituloMenu">Quem Somos <img src={arrow} alt={"Flecha"} /></p>
            <ul className='SubMenu1'>
                <NavigationItem link='/quemsomos'>INTRODUÇÃO</NavigationItem>
                <NavigationItem link='/qsequipes'>EQUIPES</NavigationItem>
                <NavigationItem link='/qsindicadoresacademicos'>INDICADORES ACADÊMICOS</NavigationItem>
                <NavigationItem link='/qsparcerias'>PARCERIAS</NavigationItem>
            </ul>
        </li>
        {/* <NavigationItem className='Menu1' link='/politicasnacionais'>Políticas Nacionais <img src={arrow} /></NavigationItem>
        <NavigationItem link='/assentamentoms'>Assentamento Milton Santos</NavigationItem>
        <NavigationItem link='/tecnologiassociais'>Tecnologias Sociais</NavigationItem>
        <NavigationItem link='/educacaopopular'>Educação Popular</NavigationItem>
        <NavigationItem link='/quemsomos'>Quem Somos</NavigationItem> */}
        {!props.isAuthenticated ?
            <NavigationItem link='/cadastro'>Cadastro</NavigationItem> : null
        }
        {!props.isAuthenticated
            ? <NavigationItem link='/login'>Login</NavigationItem>
        : <NavigationItem link='/logout'>{props.isAuthenticated}Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;