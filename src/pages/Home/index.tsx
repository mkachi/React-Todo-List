import React, { useContext, useState } from 'react'
import styles from './style.module.css'

import Container from '../../components/molecules/Container'
import Card from '../../components/molecules/Card'
import P from '../../components/atoms/P'
import TodoCard from '../../components/organisms/TodoCard'
import TodoInput from '../../components/organisms/TodoInput'
import Flex from '../../components/molecules/Flex'
import { TodoContext } from '../../store/Todo'

const Home = () => {
  const [inputText, setInputText] = useState('')
  const { items, add, remove, setToggle } = useContext(TodoContext)
  return (
    <Container>
      <Flex element={'section'} className={styles['list']} direction={'column'}>
        {items.map((todo, index) => {
          return <TodoCard key={index} data={todo} />
        })}
      </Flex>
      <footer
        style={{
          marginTop: 'auto',
          marginBottom: '0px'
        }}
      >
        <TodoInput
          text={inputText}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setInputText(event.target.value)
          }}
        />
      </footer>
    </Container>
  )
}

export default Home
