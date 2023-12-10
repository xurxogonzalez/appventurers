import data from '../mocks/todos.json'

import { useState } from 'react'

import { FlatList, StyleSheet, View } from 'react-native'
import { CustomText } from './CustomText'


function Item ({title, completed}) {
  return (
    <View style={{ padding: 5, gap: 5, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
      <CustomText
        fontSize="big"
        color="primary"
        fontWeight="bold"
      >{title}</CustomText>
      <CustomText style={{ color: 'red' }}>{JSON.stringify(completed)}</CustomText>
    </View>
  )
}

export function Todos () {


  const [ todos, setTodos ] = useState(data)

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (<View style={ styles.separator } />)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
});