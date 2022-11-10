import { useContext, useState, useEffect, createContext } from "react";

const FilmContext = createContext()


const FilmsContext = ({children}) => {
    return (
        <FilmContext.Provider value={values}>{children}</FilmContext.Provider>
      )
}

export default FilmsContext