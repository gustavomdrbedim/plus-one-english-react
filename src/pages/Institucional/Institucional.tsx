import { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import QuemSomos from './sections/QuemSomos';
import Metodo from './sections/Metodo';
import SobreNos from './sections/SobreNos';
import AreaAluno from './sections/AreaAluno';
import { initializeInstitutional } from './institutionalBehavior';
import '../../styles/institucional.css';
export default function Institucional() {
 useEffect(() => initializeInstitutional(), []);
 return <><Header/><main><QuemSomos/><Metodo/><SobreNos/><AreaAluno/></main>
 <Footer/></>;
}
