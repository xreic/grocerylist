// Dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';

// Styles
import { Heading } from '@chakra-ui/core';

const NavSkeleton = ({ endpoint, title }) => {
  const { pathname } = useRouter();

  return (
    <React.Fragment>
      {pathname === endpoint || pathname === '/signin' ? (
        <Heading
          as="h1"
          size="2xl"
          as={pathname !== '/signin' && 'u'}
          cursor="default"
        >
          {title}
        </Heading>
      ) : (
        <Link href={endpoint}>
          <a>
            <Heading as="h1" size="2xl">
              {title}
            </Heading>
          </a>
        </Link>
      )}
    </React.Fragment>
  );
};

export default NavSkeleton;
