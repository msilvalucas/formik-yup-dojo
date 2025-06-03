import { Route, Routes } from "react-router"

import { Home } from "../pages/Home"
import { ValidationMultipleFields } from "../pages/ValidationMultiplesFields"

export const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/01-validacao-de-multiplos-campos" element={<ValidationMultipleFields />}></Route>
    </Routes>
  )
}