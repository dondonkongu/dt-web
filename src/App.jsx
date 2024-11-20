import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from './view/pages/layout'

export default function App() {
  return (
    <div>
      <Routes>
       {publicRoutes.map((route, index) => {
        const Page = route.component
        return (
          <Route
            key={index}
            path={route.path}
            element={<DefaultLayout>
              <Page />
              </DefaultLayout>}
          />
        )
       })}
      </Routes>

    </div>
  )
}
