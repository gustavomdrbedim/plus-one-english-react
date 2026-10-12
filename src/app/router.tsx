import { createBrowserRouter, Navigate } from 'react-router-dom';
import Institucional from '../pages/Institucional/Institucional';
import EnglishProfile from '../pages/EnglishProfile/EnglishProfile';
import FAQ from '../pages/FAQ/FAQ';
import StudentArea from '../pages/StudentArea/StudentArea';
export const router=createBrowserRouter([
 {path:'/',element:<Institucional/>},
 {path:'/english-profile',element:<EnglishProfile/>},
 {path:'/faq',element:<FAQ/>},
 {path:'/app',element:<Navigate to="/english-profile" replace/>},
 {path:'/app/faq',element:<Navigate to="/faq" replace/>},
 {path:'/area-do-aluno',element:<StudentArea/>},
 {path:'*',element:<Navigate to="/" replace/>},
],{basename:import.meta.env.BASE_URL});
