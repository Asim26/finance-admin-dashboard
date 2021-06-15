import { useState } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { email, password } from '../../utilities/constants'
import { useHistory } from 'react-router-dom'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const Login = () => {
  const history = useHistory()
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  const loginUser = (e: any) => {
    e.preventDefault(e)
    if (loginEmail === email && loginPassword === password) {
      localStorage.setItem('isAuth', 'true')
      console.log('success')
      history.push('/')
    } else {
      console.log('failed')
    }
  }
  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        flexDir='column'
        mb='2'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar bg='teal.500' />
        <Heading color='teal.400'>Login</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={loginUser}>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaUserAlt color='gray.300' />}
                  />
                  <Input
                    type='email'
                    placeholder='email address'
                    onChange={(e: any) => {
                      setLoginEmail(e.target.value)
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.300' />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={(e: any) => {
                      setLoginPassword(e.target.value)
                    }}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign='right'>
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                colorScheme='teal'
                width='full'
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{' '}
        <Link color='teal.500' href='#'>
          Sign Up
        </Link>
      </Box>
    </Flex>
  )
}

export default Login
