import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'

const Demo: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* title 标签的名称 */}
        <title>Demo yooo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Hello world!!</div>
        <Button colorScheme='blue'>使用方法</Button>
      </main>
    </div>
  )
}

export default Demo