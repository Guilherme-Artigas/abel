import { useState } from 'react';

export default function Cadastro() {
  const [register, setRegister] = useState({
    fullNameInstitution: '',
    shortNameInstitution: '',
    typeDocument: '',
    document: '',
    typeCnpj: '',
    representativeName: '',
    representativeDocument: '',
    representativeBirthDate: '',
    foundationDate: '',
    history: '',
    modality: '',
    shield: '',
    // ----------------------------------------------------------------------
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    // ----------------------------------------------------------------------
    responsibleEmail: '',
    responsibleName: '',
    responsibleBirthDate: '',
    responsiblePhone: '',
    password: '',
    confirmPass: '',
  });

  return (
    <div className="border border-black h-screen flex flex-col justify-between m-auto max-w-7xl">
      <header className="border border-black h-20 flex justify-center items-center  ">Cabeçalho</header>

      <section className="border border-black h-full m-1">
        <h1 className="border border-black text-center">Criar uma conta</h1>

        <div className="border-2 border-red-500 flex flex-col justify-between h-[96.85%]">

          <div className="border border-black w-full h-1/3 p-1">
            <h1 className="mb-2 font-bold text-lg">Dados da instituição:</h1>
            <div className="border border-black flex gap-1">

              <div className="w-2/5">
                <span>Nome completo da instituição:</span>
                <br />
                <label className="">
                  <input
                    type="text"
                    placeholder="EX: JOINVILLE FUTEBOL CLUBE"
                    className="bg-gray-100 border border-gray-500 w-full p-1 rounded-lg"
                    value={register.fullNameInstitution}
                    onChange={({ target }) => setRegister({ ...register, [target.name]: target.value })}
                    name="fullNameInstitution"
                  />
                </label>
              </div>

              <div className="w-1/5">
                <span>Nome curto da instituição:</span>
                <br />
                <label className="">
                  <input
                    type="text"
                    placeholder="EX: JOINVILLE"
                    className="bg-gray-100 border border-gray-500 w-full p-1 rounded-lg"
                    value={register.shortNameInstitution}
                    onChange={({ target }) => setRegister({ ...register, [target.name]: target.value })}
                    name="shortNameInstitution"
                  />
                </label>
              </div>

              <div className="w-1/5 text-center">
                <span className="">Tipo de documento:</span>
                <br />
                <label className="">
                  <input
                    type="radio"
                    className=""
                    value="CPF"
                    onChange={({ target }) => setRegister({ ...register, [target.name]: target.value })}
                    name="typeDocument"
                  />
                  <span> CPF</span>
                  <input
                    type="radio"
                    className="ml-8"
                    value="CNPJ"
                    onChange={({ target }) => setRegister({ ...register, [target.name]: target.value })}
                    name="typeDocument"
                  />
                  <span> CNPJ</span>
                </label>
              </div>

              <div className="w-1/5">
                <span>Número do CPF ou CNPJ:</span>
                <br />
                <label className="">
                  <input
                    type="text"
                    placeholder="Nº CPF ou CNPJ"
                    className="bg-gray-100 border border-gray-500 w-full p-1 rounded-lg"
                    value={register.document}
                    onChange={({ target }) => setRegister({ ...register, [target.name]: target.value })}
                    name="document"
                  />
                </label>
              </div>

            </div>

            <div className={`border border-black ${register.typeDocument === 'CNPJ' ? 'flex' : 'hidden'}`}>
              Linha 2
            </div>

            <div className="border border-black">
              Linha 3
            </div>
          </div>

          <div className="border border-black w-full h-1/3">a</div>

          <div className="border border-black w-full h-1/3">a</div>
        </div>
      </section>

      <footer className="border border-black h-20 flex justify-center items-center">Rodapé</footer>
    </div>
  );
}
