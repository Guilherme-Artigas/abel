import { useRouter } from 'next/router';

export default function Terms() {
  const { push } = useRouter();

  return (
    <section className="m-auto w-4/5 p-10 shadow-md h-screen">
      <span onClick={() => push('/')} className="cursor-pointer">Voltar</span>
      <h1 className="mb-10 font-bold text-4xl text-center">Termos de uso</h1>

      <p className="my-5">Bem-vindo ao [Nome do Projeto]. Ao acessar ou usar nossos serviços, você concorda com os seguintes termos:</p>

      <p className="my-5">Ao utilizar nossos serviços, você concorda em cumprir e estar legalmente vinculado a estes Termos de Uso. Caso não concorde, por favor, não use nossos serviços.</p>

      <p className="my-5">Para utilizar nossos serviços, você deve criar uma conta fornecendo informações precisas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de acesso.</p>

      <p className="my-5">Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes Termos de Uso. É proibido o uso de nossos serviços para qualquer atividade ilícita ou prejudicial.</p>

      <p className="my-5">Todo o conteúdo e materiais disponíveis em nossos serviços, incluindo, mas não se limitando a, texto, gráficos, logotipos e software, são de propriedade do [Nome do Projeto] e protegidos por leis de direitos autorais.</p>

      <p  className="my-5">O [Nome do Projeto] não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de uso de nossos serviços.</p>

      <p  className="my-5">Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações serão efetivas imediatamente após a publicação. É sua responsabilidade revisar os Termos de Uso periodicamente.</p>

      <p  className="my-5">Podemos encerrar ou suspender seu acesso aos nossos serviços a qualquer momento, sem aviso prévio, se acreditarmos que você violou estes Termos de Uso.</p>

      <p  className="my-5">Se você tiver alguma dúvida ou preocupação sobre estes Termos de Uso, entre em contato conosco em [email de contato].</p>
    </section>
  );
}
