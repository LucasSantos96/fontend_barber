



const EditClient = () => {

  return (
    <section className='flex flex-col items-center min-h-screen mt-8 mx-8'>
        <h1 className="font-medium text-3xl md:text-4xl ">Editar cliente</h1>

    <form className="flex flex-col gap-1 w-full">
      <label htmlFor="name">Nome do cliente:</label>
      <input type="text" name="name"  placeholder="Nome completo do cliente" className="border border-gray-500 rounded p-1 placeholder:text-sm" />

      <label htmlFor="number">Número do cliente:</label>
      <input type="number" name="number"  placeholder="ex:229999..." className="border rounded p-1 placeholder:text-sm border-gray-500" />

      <label htmlFor="plans">Selecione o plano:</label>
        <select name="plans" id="plans" className="p-1 rounded bg-gray-200">
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
        </select>
  
      <input type="submit" value="Editar" className="border rounded bg-green-400 font-medium text-white py-1 hover:bg-green-600 hover:scale-105 duration-300 cursor-pointer mt-4 shadow-2xl"/>


    </form>

    </section>
  )
}

export default EditClient