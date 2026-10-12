import { ApprovedMarkup } from '../../../components/ui/ApprovedMarkup';
// Bloco aprovado: edite apenas este conteúdo ao trabalhar nesta seção.
const markup = "<section class=\"portal-section section\" id=\"portal\">\n<span class=\"eyebrow\">\n     Área do aluno\n    </span>\n<h2>\n     Seu espaço de estudos está chegando\n    </h2>\n<p>\n     Estamos preparando um portal para você acessar seus materiais e acompanhar sua rotina personalizada. O acesso com senha ainda não está disponível\n    </p>\n<a class=\"pill portal-cta\" href=\"/english-profile\">Descobrir meu perfil</a>\n</section>";
export default function AreaAluno() { return <ApprovedMarkup html={markup} />; }
