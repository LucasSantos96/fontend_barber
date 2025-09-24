import React from 'react'
import ListPlan from './ListPlan'
 import Link from 'next/link'

 import { FiPlus } from 'react-icons/fi'
const Plans = () => {
  return (
      <div className="flex flex-col">
          <h3 className="font-semibold my-2">Planos</h3>
              <button className="bg-blue-400 rounded flex items-center text-white gap-1 py-2 px-2 h-fit cursor-pointer hover:scale-105 duration-300 hover:bg-blue-600 shadow-2xl mb-4 w-full justify-center">
                <FiPlus /> Add Plano
              </button>
          <ListPlan />
          <div className="flex items-center w-3/6">
            <Link href={"/addplan"}>
            </Link>
          </div>

        </div>

  )
}

export default Plans