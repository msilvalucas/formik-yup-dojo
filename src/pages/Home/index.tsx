import { Link } from "react-router"

export const Home = () => {
  return (
    <>
      <h1>🥋 Formik + Yup Dojo</h1>
      <p>Repositório pessoal de práticas com Formik e Yup, organizado em formato de Dojo.</p>

      <div>
        <h2>Links Katas</h2>
        <ul>
          <li><Link to="/01-validacao-de-multiplos-campos">01 - Validação de campos</Link></li>
        </ul>
      </div>
    </>
  )
}