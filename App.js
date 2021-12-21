import React, { useState, useEffect, useRef } from 'react'
import { 
  StyleSheet, 
  View, 
  Alert 
} from 'react-native'

import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import TopBar from './src/components/TopBar'
import BottomBar from './src/components/ButtomBar'
import Swipes from './src/components/Swipes'

function App() {
  
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  async function fetchUsers() {
    try {
      fetch('https://randomuser.me/api/?gender=female&results=50')
      .then(response => response.json())
      .then(data => {
        //console.log(data.results)
        setUsers(data.results)
      })
    } catch (error) {
      console.log(error)
      Alert.alert('Error', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike() {
    alert('Curtiu')
    nextUser()
  }

  function handlePass() {
    console.log('passou')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F53D6F'/>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map((u, i) => (
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                />
              )
          ))}
      </View>
      <BottomBar 
        handleLikePress={handleLikePress} 
        handlePassPress={handlePassPress} 
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#F53D6F'
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#F53D6F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})