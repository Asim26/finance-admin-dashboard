import React, { useEffect } from 'react'
// import { loginAccess } from './cache'
import { useHistory } from 'react-router-dom'

const Protected = (props: any) => {
  const Component = props.Component
  const history = useHistory()

  let loggedIn: any = localStorage.getItem('isAuth')
  useEffect(() => {
    if (loggedIn === 'false') {
      history.push('/login')
    }
  }, [])

  return (
    <div>
      <Component />
    </div>
  )
}
export default Protected
