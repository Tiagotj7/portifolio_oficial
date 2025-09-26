"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className='App'>
      {/* HEADER */}
<header className="App-header">
  {/* Lado esquerdo */}
  <div className='name-nav'>
    <Image src="/assets/dev logo.png" width={45} height={45} alt="dev" className='devlogo-app' />
    <h2>Tiagotj7</h2>
  </div>

  {/* Lado direito */}
  <div className='icons-nav'>
    <h3>Social</h3> {/* Mantém o texto Social acima dos ícones */}
    <div className='icons-list'>
      <a href="https://github.com/Tiagotj7/" target="_blank">
        <Image src="/assets/git dev.png" width={28} height={28} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/tiagocarvalhog2020/" target="_blank">
        <Image src="/assets/link dev.png" width={28} height={28} alt="Linkedin" />
      </a>
      <a href="https://www.instagram.com/tiagotj7.dev/" target="_blank">
        <Image src="/assets/insta logo dev.png" width={28} height={28} alt="Instagram" />
      </a>
    </div>
  </div>
</header>




      {/* MAIN 1 */}
      <main className='main-content'>
        <div className='geral1'>
          <div className='information'>
            <h1>Prazer,</h1>
            <h1>Tiago</h1>
            <h1>Carvalho!</h1>
            <a href="https://www.linkedin.com/in/tiagocarvalhog2020/" target="_blank">
              <button className='button-more'>
                <h3>Saiba Mais!</h3>
              </button>
            </a>
          </div>
          <div className='logodev-container'>
            <Image src="/assets/perfil11.png" width={250} height={250} alt="perfil" className='perfillogo-container' />
          </div>
        </div>
      </main>

      {/* MAIN 2 */}
      <div className='main2-content'>
        <div className='geral2'>
          <div className='next'>
            <Image src="/assets/next logo.png" width={120} height={120} alt="next" className='nextlogo-container' />
          </div>
          <div className='note-container'>
            <Image src="/assets/dev img.png" width={280} height={280} alt="notelog" className='notelogo-container' />
          </div>
        </div>
        <div className='comment'>
          <h1>Sobre Mim:</h1>
          <p>
            Sou desenvolvedor front-end e de software, com experiência em cibersegurança e apaixonado por criar soluções inovadoras.
            Trabalho com HTML, CSS, JavaScript, Python, C, PHP, React, TypeScript e WordPress, desenvolvendo projetos que unem desempenho, segurança e usabilidade.
            Meu foco está em entregar aplicações eficientes e adaptáveis às necessidades do usuário.
            No meu portfólio e GitHub, você encontrará projetos que demonstram minha habilidade em desenvolvimento web, automação e otimização de processos.
            Estou sempre em busca de desafios para evoluir e contribuir com a tecnologia. 💻🔒🌐
          </p>
        </div>
      </div>

      {/* MAIN 3 */}
      <main className='main3-content'>
        <div className='certificates-container'>
          <div className='cert-list-container'>
            <h1 className='cert-title'>CERTIFICADOS</h1>
            <ul className='cert-list'>
              <li>Cursando - Técnico em Desenvolvimento de Sistemas - SENAI</li>
              <li>Internet do Comportamento (IoB) em Serviços</li>
              <li>Públicos Digitais</li>
              <li>Site utilizando Html, Css e Js</li>
              <li>Curso Segurança em Tecnologia da Informação</li>
              <li>Introdução ao Hacking e Pentest 2.0</li>
              <li>Introdução ao Excel</li>
              <li>Visual Studio Code</li>
              <li>Desenvolvimento Moderno de Software</li>
              <li>Informática básica</li>
              <li>DIO.me</li>
              <li>Bootcamp</li>
            </ul>
            <a href="https://drive.google.com/file/d/13tjN7JVKBRxSTfySOSU3wBl5sT_az3gU/view?usp=drive_link" target="_blank">
              <button className='curriculo-button'>CURRÍCULO</button>
            </a>
          </div>
          <div className='brain-image-container'>
            <Image src="/assets/cer3.png" width={300} height={300} alt="Brain" className='brain-image' />
          </div>
        </div>
      </main>

      {/* MAIN 4 */}
      <main className='main4-content'>
        <div className='contact-container'>
          <div className='sub-contact1'>
            <h3>Email</h3>
            <p>tiagotj7dev@gmail.com</p>
          </div>
          <div className='contactlogo-container'>
            <h1 className='contact-text'>Contato</h1>
            <Image src="/assets/contato dev.png" width={120} height={120} alt="contactlogo" className='contactlogo' />
          </div>
          <div className='sub-contact2'>
            <h3>Phone</h3>
            <p>(75)9 </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025. Todos os direitos reservados.</p>
        <p>Desenvolvido por Tiagotj7.dev.</p>
      </footer>
    </div>
  );
}
