import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Aside() {
  const { push } = useRouter();

  return(
    <aside className="border-r-2 border-stone-500 w-1/4 flex justify-center rounded-r-md shadow-2xl bg-gray-100">
      <nav className="flex flex-col items-center justify-around w-full">
        <Image
          src=""
          alt="Logo"
          className="h-20 w-20 border border-black p-2"
        />
        <ul className="w-full">
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 01</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 02</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 03</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 04</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 05</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 06</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 07</li>
          <li className="my-6 cursor-pointer border border-black w-full p-3 rounded-sm">Item 08</li>
        </ul>
        <button type="button" onClick={ () => push('/') }>Sair</button>
      </nav>
    </aside>
  );
}
