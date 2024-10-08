'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import styles from '@/css/Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <Box className={styles.header}>
      <Flex justify="center" align="center" asChild>
        <header>
          <Flex justify="center" align="center" gap="30px" asChild>
            <ul>
              {/* <li>
                <Link href="/" className={pathname == '/' ? `${styles.active}` : ''}>
                  <Text as="p">메인</Text>
                </Link>
              </li> */}
              <li>
                <Link href="/login" className={pathname.startsWith('/login') ? `${styles.active}` : ''}>
                  <Text as="p">ログイン</Text>
                </Link>
              </li>
              <li>
                <Link href="/article" className={pathname.startsWith('/article') ? `${styles.active}` : ''}>
                  <Text as="p">けいじばん</Text>
                </Link>
              </li>
              <li>
                <Link href="/payment" className={pathname.startsWith('/payment') ? `${styles.active}` : ''}>
                  <Text as="p">けっさい</Text>
                </Link>
              </li>
            </ul>
          </Flex>
        </header>
      </Flex>
    </Box>
  );
}
