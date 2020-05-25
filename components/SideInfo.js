import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  useDisclosure
} from '@chakra-ui/core';

const SideInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box position="absolute" top="0" right="0">
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        👋
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">
            <Heading as="h1" size="xl" color="black">
              About Me
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Heading
              as="h2"
              fontSize="2xl"
              paddingBottom="0.25rem"
              color="black"
            >
              Eric Lau, Full Stack Developer
            </Heading>

            <Flex flexDirection="column" paddingLeft="1rem">
              <Link
                href="https://linkedin.com/in/-ericLau"
                color="black"
                isExternal
              >
                LinkedIn
              </Link>

              <Link href="https://github.com/xreic" color="black" isExternal>
                GitHub
              </Link>

              <Link
                href="https://github.com/xreic/grocerylist"
                color="black"
                isExternal
              >
                Repo
              </Link>
            </Flex>

            <br />

            <List>
              <Heading
                as="h2"
                fontSize="xl"
                paddingBottom="0.25rem"
                color="black"
              >
                Tech Stack
              </Heading>

              <ListItem paddingLeft="1rem">
                <Link href="https://nextjs.org" color="black" isExternal>
                  Next.js
                </Link>
              </ListItem>

              <ListItem paddingLeft="1rem">
                <Link
                  href="https://www.apollographql.com"
                  color="black"
                  isExternal
                >
                  Apollo
                </Link>
              </ListItem>

              <ListItem paddingLeft="1rem">
                <Link
                  href="https://www.graphile.org/postgraphile"
                  color="black"
                  isExternal
                >
                  PostGraphile
                </Link>
              </ListItem>

              <ListItem paddingLeft="1rem">
                <Link
                  href="https://aws.amazon.com/rds"
                  color="black"
                  isExternal
                >
                  AWS RDS PostgreSQL
                </Link>
              </ListItem>

              <ListItem paddingLeft="1rem">
                <Link
                  href="https://aws.amazon.com/ec2"
                  color="black"
                  isExternal
                >
                  AWS EC2
                </Link>
              </ListItem>

              <ListItem paddingLeft="1rem">
                <Link
                  href="https://emotion.sh/docs/introduction"
                  color="black"
                  isExternal
                >
                  Emotion
                </Link>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Text>Powered By: AWS RDS + EC2</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideInfo;
