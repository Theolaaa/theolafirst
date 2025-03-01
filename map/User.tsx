import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


interface UserArray { 
id:number;
name:string;
age: number;
followers?: number;
nik?:string;

}

const Users: UserArray[] =  [
    { 
        id:1,
        name: 'samuel',
        age:20,
        followers: 100,
        nik: "Batman"

},
{
    id:2,
    name: 'john',
    age:20,
    followers: 100,
    nik: "yooooo"

},
{
    id:3,
    name:'theola',
    age:18,
    followers:100,
    nik:"supergirl"
},



]

const User: React.FC=()=> {
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User</Text>

      <FlatList
      data={Users}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={({item})=>(
        <View style={styles.itemContainer}>
            <Text style={styles.text}>Name:{item.name}</Text>
            <Text style={styles.text}>Name:{item.age}</Text>
            <Text> Followers: {item.followers}</Text>
            <Text> nik: {item.nik}</Text>

        </View>
      )}
      />

    </View>
  )
}

export default User

const styles = StyleSheet.create({
    container:{
      borderRadius:20,
    },
    title:{
        fontSize:15

    },
    itemContainer:{
       
    },
    text:{
        fontSize:12

    },
})