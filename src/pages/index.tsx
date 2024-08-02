import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState({ email: '', password: '' });
  const { push } = useRouter();

  function handleLogin() {
    if (!user.email || !user.password) {
      toast.warn('Por favor, preencha os campos de email e senha!');
      return;
    };

    if (user.email === 'user.test@email.com' && user.password === '12345678') {
      toast.success('Login realizado com sucesso!')
      setTimeout(() => push('/ambiente'), 5000);
      return;
    } else {
      toast.error('Credencias inválidas.')
      return;
    }
  }

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
            <h2 className="font-medium text-2xl">Seja bem vindo(a)!</h2>
            <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam placeat consequuntur nobis delectus tenetur a modi error. Dignissimos nesciunt itaque quos perferendis illum voluptas ducimus, perspiciatis nihil veritatis sit.</p>
          </div>
        </header>
        <form className="flex flex-grow flex-col items-center justify-start">
          <label className="w-4/5 p-1">
            <input
              type="email"
              className="border-gray-400 w-full p-4 border-b-2 bg-gray-100 rounded-t-md"
              placeholder="E-mail"
              value={user.email}
              onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
              name="email"
            />
          </label>
          <label className="w-4/5 p-1">
            <input
              type="password"
              className="border-gray-400 w-full p-4 border-b-2 bg-gray-100 rounded-t-md"
              placeholder="Senha"
              value={user.password}
              onChange={({ target }) => setUser({ ...user, [target.name]: target.value })}
              name="password"
            />
          </label>
          <p>Esqueceu a senha? <span className="font-bold text-orange-600 cursor-pointer">Clique aqui!</span></p>
          <button
            type="button"
            className="w-4/5 mt-16 bg-blue-600 text-white font-bold rounded-md p-4"
            onClick={handleLogin}
          >
            Entar
          </button>
          <p className="text-center mt-8">
            Ainda não tem cadastro?<br/>
            <span
              className="font-bold text-orange-600 cursor-pointer"
              onClick={() => push('/cadastro')}
            >
              Clique aqui
            </span>
          </p>
        </form>
        <footer className="flex flex-none justify-between">
          <span
            className="cursor-pointer"
            onClick={ () => push('/termos') }
          >
            Termos de uso
          </span>
          <span
            className="cursor-pointer"
            onClick={ () => push('/politicas') }
          >
            Política de Privacidade
          </span>
          <span
            className="cursor-pointer"
            onClick={ () => push('/contato') }
          >
            Contato
          </span>
        </footer>
      </div>
      <div className="border border-black h-screen w-1/2 flex justify-center items-center">Imagem</div>
      <ToastContainer />
    </section>
  );
}
