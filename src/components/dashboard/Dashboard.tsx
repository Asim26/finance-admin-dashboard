import React, { useState, useEffect } from 'react'
import DataTableContainer from '../dataTable/DataTableContainer'
import TopNavigation from '../topNavigation/TopNavigation'
import { useStoreState } from 'easy-peasy'
import { Button } from '@chakra-ui/react'
import { useStoreActions } from 'easy-peasy'

function Dashboard() {
  const products = useStoreState((state: any) => state.products.items)
  const apiResponse: any = useStoreActions(
    (actions: any) => actions.user.apiUsers
  )

  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <TopNavigation />
      <DataTableContainer />
      <Button
        colorScheme='blue'
        onClick={() => {
          apiResponse(data)
        }}
        style={{
          marginLeft: '1.5%',
        }}
      >
        Get Api Response
      </Button>
    </div>
  )
}

export default Dashboard
