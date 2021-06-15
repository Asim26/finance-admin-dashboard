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
import { useStoreActions } from 'easy-peasy'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const SignUp = () => {
  // state Variables
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [onError, setOnError] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  const registerUser: any = useStoreActions(
    (actions: any) => actions.signup.signupUser
  )
  const signUp = (e: any) => {
    e.preventDefault(e)
    if (firstName && lastName && email && password) {
      registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    } else {
      alert('error')
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
        <Heading color='teal.400'>Sign up</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={signUp}>
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
                    type='text'
                    placeholder='First Name'
                    onChange={(e: any) => {
                      setFirstName(e.target.value)
                    }}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaUserAlt color='gray.300' />}
                  />
                  <Input
                    type='text'
                    placeholder='Last Name'
                    onChange={(e: any) => {
                      setLastName(e.target.value)
                    }}
                  />
                </InputGroup>
              </FormControl>

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
                      setEmail(e.target.value)
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
                      setPassword(e.target.value)
                    }}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                colorScheme='teal'
                width='full'
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already Have an account?{' '}
        <Link color='teal.500' href='#'>
          Login
        </Link>
      </Box>
    </Flex>
  )
}

export default SignUp
