import { Link } from "react-router-dom"

const Reports = () => {
  return (
    <>
      <div>Reportes</div>
      <div className="mt-4">
        <Link to="/informes/ucsti">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Informe UCSTI</button>
        </Link>
        {/* Agrega más botones según sea necesario */}
      </div>
    </>
  )
}

export default Reports
