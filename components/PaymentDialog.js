import React, {useState} from "react";
const PaymentDialog =() => {
  const [state, setState] = useState({ stage: 0})
  const closeModal = () => {
    document.querySelector('dialog').close()
  }
  const setStage = (stage) => {
    setState({stage: stage})
  }
  const nextStage = () => {
    setStage(state.stage+1)
  }
  const previousStage = () => {
    setStage(state.stage-1)
  }
  return (
    <>
      {state.stage === 0 && (
        <>
          <h2>Informe seus dados</h2>
          <form className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" name="name"
                type="text" placeholder="Seu nome completo"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="email" type="text" placeholder="seu@email.com"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Telefone:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                id="phone" type="text" placeholder="(99) 999999-9999"/>
            </div>
          </form>
          <div className="flex justify-center gap-4">
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-500 hover:shadow-black-md transition-all outline-none" onClick={closeModal}>Cancelar</button>
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none" onClick={nextStage}>Avançar</button>
          </div>
        </>
      ) }
      {state.stage === 1 && (
        <>
          <h2>Selecione um meio de pagamento</h2>
          <div className="checkout-methods">
              <button onClick={() => setStage(3)} className="btn">
                Boleto
              </button>
              <button onClick={() => setStage(3)} className="btn">
                Pix
              </button>
              <button onClick={() => setStage(2)} className="btn">
                Cartão de crédito
              </button>
          </div>
          <div className="flex justify-center gap-4">
            <button className="py-3 mt-4 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-500 hover:shadow-black-md transition-all outline-none" onClick={previousStage}>Voltar</button>
          </div>
        </>
      ) }
      {state.stage === 2 && (
        <>
          <h2>Dados do cartão</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card_number">
                Número do cartão:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="card_number"
                id="card_number" type="text" placeholder="9999 9999 9999 9999"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card_name">
                Nome escrito no cartão:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="card_name"
                id="card_name" type="text" placeholder="Seu nome como no cartão"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card_expires">
                Data de expiração:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="card_expires"
                id="card_expires" type="text" placeholder="01/20"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card_cvv">
                CVV:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="card_cvv"
                id="card_cvv" type="text" placeholder="123"/>
            </div>
          </form>
          <div className="flex justify-center gap-4">
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-500 hover:shadow-black-md transition-all outline-none" onClick={closeModal}>Cancelar</button>
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none" onClick={nextStage}>Avançar</button>
          </div>
          <div>
            <button onClick={previousStage}>Voltar</button>
            <button onClick={nextStage}>Avançar</button>
          </div>
        </>
      ) }
      {state.stage === 3 && (
        <>
          <h2>Dados para nota fiscal</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">
                CEP:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="cep"
                id="cep" type="text" placeholder="9999 9999 9999 9999"/>
            </div>
            <div className="form-group">
              <label htmlFor="country">País</label>
              <input type="text" id="country" name="country"/>
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input type="text" id="state" name="state"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" name="address"/>
            </div>
            <div className="form-group">
              <label htmlFor="address_number">Número</label>
              <input type="text" id="address_number" name="address_number"/>
            </div>
            <div className="form-group">
              <label htmlFor="address_complement">Complemento</label>
              <input type="text" id="address_complement" name="address_complement"/>
            </div>
          </form>
          <div>
            <button onClick={previousStage}>Voltar</button>
          </div>
        </>
      ) }
      {state.stage === 4 && (
        <>
          <h2>Revisar dados da compra</h2>
          <div>
            Confira seus dados para concluir a compra:
          </div>
          <ul>
            <li>
              Nome: daksjdla
            </li>
            <li>
              Email: daksjdla
            </li>
            <li>
              Telefone: daksjdla
            </li>
          </ul>
          <ul>
            <li>
              <strong>Endereço:</strong> Rua Tenente Castelo, 19/casa; Porto Alegre, RS/Brasil
            </li>
          </ul>
          <div>
            Compra no <strong>Cartão de crédito</strong> no valor de <strong>U$9</strong>.

            No cartão: xxx xxx xxx 1234 em 1 vez
          </div>
          <div>
            <button onClick={previousStage}>Voltar</button>
            <button onClick={closeModal}>Finalizar compra</button>
          </div>
        </>
      ) }
    </>
  )
}

export default PaymentDialog