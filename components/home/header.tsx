import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


export default function Header () {
  
  return (
    <View style={styles.container}>
       <View style={styles.topHeader}>
          <View style={styles.roundedIcon}>
          <MaterialCommunityIcons name="view-dashboard"  size={28} color="black" />
          </View>
          <View style={styles.roundedIcon}>
          <Ionicons name="notifications-outline" size={32} color="black" />
          </View>
       </View>
       <View style={styles.searchBar}>
       <Ionicons name="search" size={28} color="black" />
       <TextInput 
              placeholder="Search"
              placeholderTextColor={Colors.darkgrey}
              style={styles.searchinput}
              cursorColor={Colors.primary}
          />
          <View style={styles.or}/>
        <Ionicons name="filter" size={24} color="black" />
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 20,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  roundedIcon: {
    backgroundColor: Colors.grey,
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar:{
    backgroundColor: Colors.grey,
    borderRadius: 50,
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchinput: {
    flex: 1,
    fontSize: 16,
  },
  or:{
    width: 2,
    height: '70%',
    backgroundColor: Colors.darkgrey,
  }
})