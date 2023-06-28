import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, View,FlatList} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])
  
  function addGoalHandler (enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},

    ])
  }

    function deleteGoalHandler(){
      console.log('DELETE')
    }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
     
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>;
           }}
           keyExtractor={(item, index) =>{
              return item.id;
           }}
          />
        
        
         
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16
},

goalsContainer: {
  flex: 5,
},


});
