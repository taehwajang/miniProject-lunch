import { Input } from '@mui/material'
import React from 'react'


const Menu = ({data}:any) => {
  return (
    <div>
      
     
        {
        data.map((food: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined ,number:string}) =>{
            return <>
<div>{food?.number}</div>
            </>

        })
        
        }
      </div>
  )
}

export default Menu