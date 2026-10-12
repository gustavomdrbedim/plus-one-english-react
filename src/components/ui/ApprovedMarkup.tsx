import { useMemo } from 'react';
/** HTML aprovado: isolado para preservar o design durante a migração. */
export function ApprovedMarkup({ html }: { html: string }) {
  const prepared = useMemo(() => html.replace(/(src|href)="\/images\//g, `$1="${import.meta.env.BASE_URL}images/`).replace(/href="\/(english-profile|faq|area-do-aluno)"/g, (_match, route: string) => `href="${import.meta.env.BASE_URL}${route}"`), [html]);
  return <div className="po-fragment" style={{display:'contents'}} dangerouslySetInnerHTML={{__html:prepared}} />;
}
