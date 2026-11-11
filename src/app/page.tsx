'use client';
import { useState, useEffect } from 'react';

function useContagem(minutos: number) {
  const [seg, setSeg] = useState(minutos * 60);
  useEffect(() => {
    const t = setInterval(() => setSeg(x => Math.max(0, x - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return { mm: String(Math.floor(seg/60)).padStart(2,'0'), ss: String(seg%60).padStart(2,'0') };
}

export default function PaginaVendas() {
  const checkoutUrl = '#comprar';
  const { mm, ss } = useContagem(15);

  const temas = [
    { num: '01', icon: '🤝', nome: 'Interação entre Alunos com e sem TEA', desc: 'Dinâmicas que criam pontes entre os alunos de forma natural, promovendo amizade e cooperação dentro da sala.' },
    { num: '02', icon: '⏳', nome: 'Espera de Turno de Forma Guiada', desc: 'Atividades passo a passo para ensinar paciência sem frustração — com apoio visual e regras claras para todos.' },
    { num: '03', icon: '😊', nome: 'Reconhecimento de Emoções na Turma', desc: 'Dinâmicas visuais e práticas que toda a turma pratica junta, desenvolvendo empatia e linguagem emocional.' },
    { num: '04', icon: '🎮', nome: 'Incluir a Criança com TEA nas Brincadeiras', desc: 'Como adaptar as brincadeiras da sala para que o aluno com TEA participe com sucesso e se sinta pertencente.' },
    { num: '05', icon: '📋', nome: 'Regras de Convivência de Forma Visual e Prática', desc: 'Ensinar os combinados da turma de forma concreta, visual e duradoura — sem repetir a mesma instrução todo dia.' },
  ];

  return (
    <main>

      {/* ══ HERO ══ */}
      <header style={{background:'#0D4D37',padding:'clamp(2.5rem,6svh,5rem) 1rem 2.5rem',textAlign:'center'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.12)',color:'#A7F3D0',borderRadius:999,padding:'0.4rem 1rem',marginBottom:'1.25rem'}}>
            <span style={{fontSize:'1rem'}}>📚</span>
            <span style={{fontSize:'0.78rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase'}}>Material para Professor · 30 Dinâmicas Prontas</span>
          </div>
          <h1 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(2rem,5.5vw,3.6rem)',lineHeight:1.08,margin:'0 0 1.5rem',color:'#fff'}}>
            30 Dinâmicas Prontas para Incluir o Aluno com TEA na Sua Turma
          </h1>

          {/* Subtítulo como bullets */}
          <div style={{background:'rgba(255,255,255,.08)',borderRadius:16,padding:'1.25rem 1.5rem',textAlign:'left',maxWidth:480,margin:'0 auto 1.5rem'}}>
            <p style={{fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.15em',color:'#A7F3D0',textTransform:'uppercase',marginBottom:'0.75rem'}}>
              Roteiro completo para aplicar ainda esta semana:
            </p>
            {[
              'Interação entre alunos com e sem TEA',
              'Espera de turno de forma guiada',
              'Reconhecimento de emoções na turma',
              'Como incluir a criança com TEA nas brincadeiras',
              'Regras de convivência de forma visual e prática',
            ].map(b => (
              <p key={b} style={{color:'#fff',fontSize:'0.9rem',lineHeight:1.6,margin:'0 0 0.3rem',display:'flex',gap:8,alignItems:'flex-start'}}>
                <span style={{color:'#34D399',marginTop:2,flexShrink:0}}>✔</span> {b}
              </p>
            ))}
          </div>

          <p style={{color:'#A7F3D0',fontSize:'0.88rem',opacity:.8}}>Para: <strong style={{color:'#fff'}}>Professores da Educação Básica</strong></p>
        </div>
      </header>

      {/* ══ 5 TEMAS ══ */}
      <section style={{padding:'3.5rem 1rem',background:'#F0FAF5'}}>
        <div style={{maxWidth:720,margin:'0 auto'}}>
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.15em',color:'#1B7E5A',textTransform:'uppercase',textAlign:'center',marginBottom:'0.5rem'}}>
            O que você recebe
          </p>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.5rem,4vw,2.3rem)',textAlign:'center',marginBottom:'0.5rem',color:'#0D4D37'}}>
            5 temas · 6 dinâmicas cada
          </h2>
          <p style={{textAlign:'center',color:'#555',fontSize:'0.9rem',marginBottom:'2rem'}}>= 30 dinâmicas com roteiro completo, prontas para aplicar</p>
          <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
            {temas.map(({num,icon,nome,desc}) => (
              <div key={num} className="tema-card">
                <p className="tema-num">Tema {num}</p>
                <p style={{fontSize:'1.8rem',margin:'0.4rem 0 0.5rem'}}>{icon}</p>
                <h3 style={{fontSize:'1rem',fontWeight:700,lineHeight:1.3,margin:'0 0 0.5rem',color:'#0D4D37'}}>{nome}</h3>
                <p style={{color:'#555',fontSize:'0.85rem',margin:0,lineHeight:1.5}}>{desc}</p>
                <p style={{marginTop:'0.75rem',fontSize:'0.78rem',color:'#1B7E5A',fontWeight:600}}>6 variações de dinâmica</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMO USAR ══ */}
      <section className="bg-cream2" style={{padding:'3rem 1rem'}}>
        <div style={{maxWidth:600,margin:'0 auto',textAlign:'center'}}>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',marginBottom:'2rem',color:'#0D4D37'}}>
            Como funciona na prática
          </h2>
          <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))'}}>
            {[
              {n:'1',icon:'📥',t:'Baixe o material',d:'Acesso imediato ao PDF com as 30 dinâmicas completas'},
              {n:'2',icon:'🎯',t:'Escolha o tema',d:'Selecione a dinâmica certa para o que sua turma precisa naquele dia'},
              {n:'3',icon:'✅',t:'Aplique com a turma',d:'Roteiro passo a passo: o que falar, o que fazer, como adaptar'},
            ].map(({n,icon,t,d}) => (
              <div key={n} style={{background:'#fff',borderRadius:12,padding:'1.25rem',boxShadow:'0 2px 10px rgba(0,0,0,.06)',textAlign:'left'}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:'0.5rem'}}>
                  <span style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'1.5rem',color:'#1B7E5A'}}>{n}</span>
                  <span style={{fontSize:'1.4rem'}}>{icon}</span>
                </div>
                <p style={{fontWeight:700,margin:'0 0 0.25rem',fontSize:'0.95rem',color:'#0D4D37'}}>{t}</p>
                <p style={{color:'#666',fontSize:'0.82rem',margin:0,lineHeight:1.4}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARA QUEM É ══ */}
      <section style={{padding:'3rem 1rem',background:'#F0FAF5'}}>
        <div style={{maxWidth:580,margin:'0 auto'}}>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',textAlign:'center',marginBottom:'1.5rem',color:'#0D4D37'}}>
            Este material é para você que...
          </h2>
          <div style={{display:'grid',gap:'0.75rem'}}>
            {[
              'Tem um aluno com TEA na turma e não sabe como fazer a integração acontecer',
              'Já tentou de tudo mas os outros alunos não sabem como incluir',
              'Quer atividades prontas para usar amanhã, sem precisar criar do zero',
              'Busca dinâmicas que funcionem para toda a turma, não só para o aluno com TEA',
              'Precisa de roteiros claros que qualquer professor consiga aplicar',
            ].map(t => (
              <div key={t} style={{display:'flex',gap:12,alignItems:'flex-start',background:'#fff',borderRadius:10,padding:'0.9rem 1rem',boxShadow:'0 1px 6px rgba(0,0,0,.05)'}}>
                <span style={{color:'#1B7E5A',fontWeight:700,fontSize:'1.1rem',flexShrink:0}}>✔</span>
                <p style={{margin:0,fontSize:'0.9rem',color:'#333',lineHeight:1.5}}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GARANTIA ══ */}
      <section style={{padding:'3rem 1rem',background:'#E6F4EE',textAlign:'center'}}>
        <div style={{maxWidth:480,margin:'0 auto'}}>
          <span style={{fontSize:'3rem'}}>🛡️</span>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',margin:'0.75rem 0 0.5rem',color:'#0D4D37'}}>
            Garantia de 7 dias
          </h2>
          <p style={{color:'#555',fontSize:'0.95rem',maxWidth:380,margin:'0 auto'}}>
            Se em <strong>7 dias</strong> você não estiver satisfeito, devolvemos
            <strong> 100% do seu investimento</strong>. Sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* ══ OFERTA / CHECKOUT ══ */}
      <section id="comprar" style={{padding:'3.5rem 1rem',background:'#0D4D37',color:'#fff',textAlign:'center'}}>
        <div style={{maxWidth:520,margin:'0 auto'}}>

          {/* Timer */}
          <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',opacity:.7,textTransform:'uppercase',marginBottom:'0.5rem'}}>
            ⏱ Oferta expira em:
          </p>
          <div style={{display:'flex',justifyContent:'center',gap:8,marginBottom:'0.5rem'}}>
            {[{v:mm,l:'min'},{v:ss,l:'seg'}].map(({v,l}) => (
              <div key={l} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'2.8rem',background:'rgba(255,255,255,.1)',borderRadius:10,padding:'0.3rem 0.8rem',lineHeight:1.1}}>{v}</span>
                <span style={{fontSize:'0.65rem',opacity:.6,marginTop:3}}>{l}</span>
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.85rem',opacity:.75,marginBottom:'2rem'}}>O preço <strong>vai subir</strong> quando o cronômetro zerar</p>

          {/* O que inclui */}
          <div style={{background:'rgba(255,255,255,.06)',borderRadius:16,padding:'1.25rem 1.5rem',marginBottom:'2rem',textAlign:'left'}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',color:'#A7F3D0',textTransform:'uppercase',marginBottom:'0.75rem'}}>O que está incluído</p>
            {[
              '📂 30 dinâmicas prontas em PDF — acesso imediato',
              '🤝 6 dinâmicas de Interação entre alunos',
              '⏳ 6 dinâmicas de Espera de Turno',
              '😊 6 dinâmicas de Reconhecimento de Emoções',
              '🎮 6 dinâmicas de Inclusão nas Brincadeiras',
              '📋 6 dinâmicas de Regras de Convivência',
              '📝 Roteiro completo + materiais + dicas de adaptação em cada dinâmica',
            ].map(t => (
              <p key={t} style={{fontSize:'0.88rem',lineHeight:1.6,margin:'0 0 0.3rem',opacity:.9}}>{t}</p>
            ))}
          </div>

          {/* Barra */}
          <div style={{marginBottom:'2rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.7rem',opacity:.7,marginBottom:4}}>
              <span>Vagas disponíveis</span><span>68% preenchidas</span>
            </div>
            <div style={{background:'rgba(255,255,255,.2)',borderRadius:999,height:10}}>
              <div style={{background:'#34D399',width:'68%',height:10,borderRadius:999}} />
            </div>
            <p style={{fontSize:'0.65rem',opacity:.5,marginTop:4}}>Restam poucas vagas no preço de lançamento</p>
          </div>

          <p style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'1rem',letterSpacing:'0.08em',color:'#A7F3D0',marginBottom:'1.5rem'}}>
            🔥 APROVEITA A OFERTA DE LANÇAMENTO!
          </p>

          {/* Preço */}
          <p style={{fontSize:'0.9rem',opacity:.6,textDecoration:'line-through',marginBottom:2}}>De R$ 47</p>
          <p style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(3rem,10vw,5rem)',lineHeight:1,margin:'0 0 0.25rem'}}>
            R$ 19,90
          </p>
          <p style={{fontSize:'0.8rem',opacity:.65,marginBottom:'2rem'}}>pagamento único · acesso imediato</p>

          {/* Botão */}
          <a href={checkoutUrl} className="btn-cta">
            🔓 QUERO AS 30 DINÂMICAS AGORA
          </a>
          <p style={{fontSize:'0.75rem',opacity:.45,marginTop:'1rem'}}>🔒 Pagamento seguro · Garantia de 7 dias</p>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-cream2" style={{padding:'3rem 1rem'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',textAlign:'center',marginBottom:'1.5rem',color:'#0D4D37'}}>
            Dúvidas frequentes
          </h2>
          {[
            {p:'Como recebo o acesso?', r:'Após a confirmação do pagamento, você recebe o link por e-mail imediatamente.'},
            {p:'Funciona para qualquer faixa etária?', r:'Sim. As dinâmicas são adaptáveis do Ensino Infantil ao Fundamental II.'},
            {p:'Precisa de materiais especiais?', r:'Não. Cada dinâmica lista os materiais necessários — são simples e acessíveis.'},
            {p:'Por quanto tempo tenho acesso?', r:'Acesso vitalício — baixe e use sempre que precisar.'},
            {p:'Como funciona a garantia?', r:'Basta enviar um e-mail dentro de 7 dias e devolvemos 100%, sem perguntas.'},
          ].map(({p,r}) => (
            <div key={p} style={{borderBottom:'1px solid #C6E8D8',padding:'1rem 0'}}>
              <p style={{fontWeight:700,marginBottom:'0.3rem',color:'#0D4D37'}}>{p}</p>
              <p style={{color:'#555',fontSize:'0.9rem',margin:0}}>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{padding:'3rem 1rem',background:'#0D4D37',textAlign:'center'}}>
        <div style={{maxWidth:400,margin:'0 auto'}}>
          <p style={{color:'#A7F3D0',fontSize:'0.9rem',marginBottom:'1.5rem'}}>Não perca o preço de lançamento</p>
          <a href={checkoutUrl} className="btn-cta">
            🔓 QUERO AS 30 DINÂMICAS AGORA
          </a>
          <p style={{color:'#fff',opacity:.4,fontSize:'0.75rem',marginTop:'1rem'}}>🛡️ Garantia 7 dias · Pagamento seguro</p>
        </div>
      </section>

      {/* ══ RODAPÉ ══ */}
      <footer style={{padding:'2rem 1rem',textAlign:'center',background:'#E6F4EE',color:'#4A7A62',fontSize:'0.78rem'}}>
        <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginBottom:'0.5rem'}}>
          <a href="/privacidade" style={{color:'#4A7A62'}}>Política de Privacidade</a>
          <a href="/termos" style={{color:'#4A7A62'}}>Termos de Uso</a>
        </div>
        <p style={{margin:0}}>© {new Date().getFullYear()} 30 Dinâmicas TEA para Professor. Todos os direitos reservados.</p>
        <p style={{margin:'0.25rem 0 0',opacity:.6}}>Os resultados variam conforme a dedicação de cada pessoa.</p>
      </footer>

    </main>
  );
}
