// Dependencies
import { useContext, useRef, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Cookies from 'js-cookie';

// Styles
import {
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  useToast
} from '@chakra-ui/core';
import { AiOutlineForm, AiOutlineDoubleLeft } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { StyledButton, StyledInput, StyledInputPW } from '../shared/styles';

// Helpers
import {
  REGISTER_USER_MUTATION,
  SIGNIN_USER_MUTATION
} from '../lib/apollo/mutations';
import { doctorError } from '../lib/doctorError';

// Contexts
import { UserContext } from '../lib/React/UserContext';

const SignInForm = () => {
  // Form Refs
  const emailRef = useRef('');
  const nameRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmationRef = useRef('');

  // Hooks
  const toast = useToast();
  const { setUser } = useContext(UserContext);
  const [isCalling, setIsCalling] = useState(false);
  const [isError, setIsError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Apollo
  const [register] = useMutation(REGISTER_USER_MUTATION);
  const [signin] = useMutation(SIGNIN_USER_MUTATION);

  // Handlers
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRegister = () => {
    setIsError('');
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = async (e) => {
    setIsError('');
    setIsCalling(true);
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      if (isRegistering) {
        const displayname = nameRef.current.value;
        const confirmpassword = passwordConfirmationRef?.current.value;

        await register({
          variables: {
            input: { email, displayname, password, confirmpassword }
          }
        });
      }

      const tokenRes = await signin({
        variables: { input: { email, password } }
      });

      // No cookies are set on an invalid login
      Cookies.set(
        'grocerylist_auth_token',
        tokenRes.data.authenticate.jwtToken
      );

      setIsCalling(false);
      setIsRegistering(false);
      setUser(!!Cookies.get('grocerylist_auth_token'));
    } catch (error) {
      setIsCalling(false);
      toast({
        description: doctorError(error.message),
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    }
  };

  return (
    <Stack spacing="0.5rem" paddingBottom="2rem">
      <Flex
        justify="center"
        flexDirection="column"
        margin="auto"
        minWidth="300px"
        maxWidth="400px"
      >
        <form method="post" onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            isDisabled={isCalling}
            isRequired
          />

          {isRegistering && (
            <StyledInput
              type="text"
              placeholder="Enter display name"
              ref={nameRef}
              isDisabled={isCalling}
              isRequired
            />
          )}

          <InputGroup size="md">
            <StyledInputPW
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              ref={passwordRef}
              isDisabled={isCalling}
              isRequired
              error={isError}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={togglePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          {isRegistering && (
            <InputGroup size="md">
              <StyledInputPW
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                ref={passwordConfirmationRef}
                isDisabled={isCalling}
                isRequired
                error={isError}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={togglePassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          )}

          <SimpleGrid columns="2" gridGap="5px">
            <StyledButton
              variantColor="blue"
              icon={isRegistering ? AiOutlineDoubleLeft : AiOutlineForm}
              isLoading={isCalling}
              isDisabled={isCalling}
              aira-busy={isCalling}
              aria-label="Register for an account"
              onClick={toggleRegister}
            />
            <StyledButton
              type="submit"
              variantColor="blue"
              icon={FiLogIn}
              isLoading={isCalling}
              isDisabled={isCalling}
              aira-busy={isCalling}
              aria-label="Log into your account"
            />
          </SimpleGrid>
        </form>
      </Flex>
    </Stack>
  );
};

export default SignInForm;
