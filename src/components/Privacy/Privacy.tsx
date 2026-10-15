import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { WHATSAPP_DISPLAY } from '../WhatsApp/whatsapp'
import './Privacy.css'

const UPDATED = '15 de outubro de 2026'
const EMAIL = 'carlosdev2022@gmail.com'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de Privacidade · Carlos Siqueira'
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://carloscoding.kinetnode.com.br/privacidade')
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Como o site de Carlos Siqueira trata dados: só medição de audiência agregada, sem identificar visitantes.'
    )
  }, [])

  return (
    <div id="top" className="privacy-page">
      <header className="privacy-bar">
        <div className="container privacy-bar-inner">
          <a href="/" className="privacy-logo" aria-label="Voltar para a página inicial">
            <img src="/logo.svg" alt="CarlosCoding" />
          </a>
          <a href="/" className="privacy-back">← Voltar ao site</a>
        </div>
      </header>

      <main className="container privacy-main">
        <p className="section-label">// privacidade</p>
        <h1 className="privacy-title">Política de Privacidade</h1>
        <p className="privacy-updated">Última atualização: {UPDATED}</p>

        <div className="privacy-summary">
          <h2>Em resumo</h2>
          <p>
            Este site não tem cadastro, login nem formulário. Uso o Google Analytics apenas para
            medir a audiência de forma agregada, como quantas visitas o site recebe e de onde elas
            vêm. Não identifico quem visita, não vendo dados e não uso nada para publicidade.
          </p>
        </div>

        <section>
          <h2>1. Quem é o responsável</h2>
          <p>
            Carlos Siqueira (CarlosCoding), desenvolvedor responsável por este site. Para qualquer
            assunto sobre privacidade, fale pelo e-mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2>2. Quais dados são coletados</h2>
          <div className="privacy-table-wrap">
            <table className="privacy-table">
              <thead>
                <tr>
                  <th scope="col">Origem</th>
                  <th scope="col">Dados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Google Analytics</th>
                  <td>
                    Páginas visitadas, tempo na página, origem da visita (Google, Instagram, link
                    direto etc.), tipo de dispositivo, navegador, sistema operacional, idioma,
                    localização aproximada (país e região) e cliques nos botões de contato
                    (WhatsApp e e-mail). Do clique, registro apenas que ele aconteceu e em qual parte
                    do site, nunca o conteúdo da conversa. Um identificador aleatório no cookie
                    diferencia visitas novas de recorrentes, sem ligação com nome, e-mail ou telefone.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hospedagem (Netlify)</th>
                  <td>
                    Registros técnicos de acesso, como endereço IP, data e hora, página solicitada e
                    navegador. São gerados automaticamente pelo servidor para segurança e
                    funcionamento do site.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fontes (Google Fonts)</th>
                  <td>
                    Para exibir as fontes do site, seu navegador se conecta aos servidores do Google,
                    que recebem o endereço IP e dados técnicos do navegador.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            O Google Analytics 4 não armazena o endereço IP completo. O IP é usado apenas no momento
            da visita para estimar a localização aproximada e depois descartado.
          </p>
        </section>

        <section>
          <h2>3. Para que os dados são usados</h2>
          <ul>
            <li>Saber quantas pessoas visitam o site e quais páginas e projetos chamam mais atenção.</li>
            <li>Entender quais canais trazem visitas, como buscas no Google ou redes sociais.</li>
            <li>Contar quantos contatos o site gera, sem saber quem entrou em contato.</li>
            <li>Manter o site no ar e protegido (registros da hospedagem).</li>
          </ul>
          <p>
            Os dados não são usados para publicidade, remarketing, criação de perfis ou para
            identificar visitantes. Os recursos de Google Signals e de personalização de anúncios
            ficam desativados.
          </p>
        </section>

        <section>
          <h2>4. Base legal</h2>
          <p>
            A medição de audiência agregada se baseia no legítimo interesse (art. 7º, IX, da Lei
            Geral de Proteção de Dados, LGPD), já que serve apenas para melhorar o site e é feita com
            o mínimo de dados, sem identificar ninguém. Você pode se opor a qualquer momento, como
            explicado no item 6.
          </p>
        </section>

        <section>
          <h2>5. Por quanto tempo os dados ficam guardados</h2>
          <ul>
            <li>
              <strong>Google Analytics:</strong> os dados de cada visita são excluídos após 2 meses.
              Depois disso ficam apenas números totais nos relatórios, sem nenhum identificador.
            </li>
            <li>
              <strong>Cookies do Analytics:</strong> expiram em 60 dias.
            </li>
            <li>
              <strong>Hospedagem (Netlify):</strong> pelo período definido pela própria Netlify para
              registros de servidor.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies e como desativar</h2>
          <p>
            O Google Analytics usa os cookies <code>_ga</code> e <code>_ga_FKNWRVPXW3</code>, que
            guardam o identificador aleatório citado acima. O site não usa cookies de publicidade.
          </p>
          <p>Para não ser medido, você pode:</p>
          <ul>
            <li>bloquear ou apagar cookies nas configurações do seu navegador;</li>
            <li>
              instalar o{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                complemento de desativação do Google Analytics
              </a>
              ;
            </li>
            <li>usar um navegador ou extensão que bloqueie rastreadores.</li>
          </ul>
          <p>O site continua funcionando normalmente em todos esses casos.</p>
        </section>

        <section>
          <h2>7. Com quem os dados são compartilhados</h2>
          <p>
            Nenhum dado é vendido ou repassado a terceiros. Os únicos serviços que recebem dados são
            os que fazem o site funcionar:
          </p>
          <ul>
            <li>
              <strong>Google</strong> (Google Analytics e Google Fonts), conforme a{' '}
              <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Política de Privacidade do Google
              </a>
              ;
            </li>
            <li>
              <strong>Netlify</strong> (hospedagem), conforme a{' '}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                Política de Privacidade da Netlify
              </a>
              .
            </li>
          </ul>
          <p>
            Esses serviços podem processar dados em servidores fora do Brasil, como nos Estados
            Unidos, com as garantias previstas em suas políticas.
          </p>
        </section>

        <section>
          <h2>8. Quando você entra em contato</h2>
          <p>
            Ao clicar em WhatsApp ou e-mail, você sai deste site e a conversa acontece no WhatsApp
            ({WHATSAPP_DISPLAY}) ou no seu e-mail. O que você enviar, como nome, número e mensagem,
            é usado apenas para responder e conversar sobre o seu projeto. Não uso esses dados para
            marketing sem a sua autorização, e você pode pedir a exclusão das mensagens a qualquer
            momento.
          </p>
        </section>

        <section>
          <h2>9. Seus direitos</h2>
          <p>
            Pela LGPD, você pode pedir a confirmação de que existem dados seus, acesso, correção,
            exclusão e informações sobre compartilhamento, além de se opor ao tratamento. Como o
            Analytics não identifica visitantes, normalmente não há como associar dados a uma
            pessoa específica, mas qualquer pedido pode ser feito por{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> e será respondido em até 15 dias.
          </p>
        </section>

        <section>
          <h2>10. Mudanças nesta política</h2>
          <p>
            Se a forma de tratar dados mudar, esta página será atualizada e a data no topo mostrará
            a versão mais recente.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
