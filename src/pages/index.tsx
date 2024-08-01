import { Inter } from "next/font/google";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();

  return (
    <section className="flex">
      <div className="h-screen w-1/2 flex flex-col p-5">
        <header className="flex-grow flex flex-col items-center justify-evenly p-2">
          {/* <Image
            className="w-10 h-10 border border-black block" src="" alt="Logo"
          /> */}
          <div className="w-10 h-10 border border-black block">
            Logo
          </div>
          <div>
            <h2>Seja bem vindo(a)!</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam placeat consequuntur nobis delectus tenetur a modi error. Dignissimos nesciunt itaque quos perferendis illum voluptas ducimus, perspiciatis nihil veritatis sit.</p>
          </div>
        </header>
        <form className="flex flex-grow flex-col items-center justify-start">
          <label className="w-4/5 p-1">
            <input
              type="text"
              className="border-gray-400 w-full p-4 border-b-2 bg-gray-100 rounded-t-md"
              placeholder="E-mail"
            />
          </label>
          <label className="w-4/5 p-1">
            <input
              type="password"
              className="border-gray-400 w-full p-4 border-b-2 bg-gray-100 rounded-t-md"
              placeholder="Senha"
            />
          </label>
          <p>Esqueceu a senha? <span className="font-bold text-orange-600">Clique aqui!</span></p>
          <button className="w-4/5 mt-16 bg-blue-600 text-white font-bold rounded-md p-4">Entar</button>
        </form>
        <footer className="flex flex-none justify-between">
          <span
            className="cursor-pointer"
            onClick={ () => push('/termo') }
          >
            Termos de uso
          </span>
          <span
            className="cursor-pointer"
            onClick={ () => push('/politica') }
          >
            Política de Privacidade
          </span>
          <span>
            Contato
          </span>
        </footer>
      </div>
      <div className="border border-black h-screen w-1/2 flex justify-center items-center">Imagem</div>
    </section>
  );
}
