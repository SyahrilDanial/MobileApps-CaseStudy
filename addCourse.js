import React, { Component } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';
import { Picker, StyleSheet } from 'react-native';

// Ahmad Syahril Danial bin Che Zainal 1812603
// 1. Drop course function
// 2. Display course function

// Muhammad 'Afif Hazim bin Mat Najib 1811167
// 1. Everything in add course file except drop and display
// 2. Help syahril with drop course (finding specific value property from the object in array using loop)

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      courseCode: '',
      time: '',
      day: '',
      courseDrop: '',
      courseTime: ['8.30am - 9.50am', '10.00am - 11.20am', '11.30am - 12.50pm',
        '2.00pm - 3.20pm', '3.30pm - 4.50pm'],
      courseDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      course: [],
      session: 0,

    };
  }

  //Muhammad 'Afif Hazim bin Mat Najib
  addCourse = () => {
    var addCourse = {
      courseCode: this.state.courseCode,
      name: this.state.name,
      time: this.state.time,
      day: this.state.day
    };
    var arr = this.state.course;
    arr.push(addCourse);
    this.setState((prevState) => { prevState.course, arr }); //add in array

    for (let index = 0; index < this.state.course.length; index++) {
      console.log(this.state.course[index])
    }
  }


  // Ahmad Syahril Danial bin Che Zainal 1812603
  DropCourse = () => {
    var arr = this.state.course;
    var courseCode = this.state.courseDrop;
    var getIndex = 0;

    arr.map

    for (let i = 0; i < this.state.course.length; i++) {

      if (this.state.course[i].courseCode == courseCode) {
        getIndex = i;
        break;
      }

    }

    console.log(getIndex)
    console.log(arr.splice(getIndex, 1))
    console.log(arr)

    //   var index = arr.indexOf(this.state.course)
    //   if (index !== -1) {
    //   arr.splice(index, 1);
    //   this.setState({course: arr});
    // }

    //   for (let index = 0; index < this.state.course.length; index++) {
    //     console.log(this.state.course[index])
    //   }
  }

  // Ahmad Syahril Danial bin Che Zainal 1812603
  display() {
    var arr = this.state.course;

    return arr.map((item) => {
      return (
        <Text>
          {/* {item} */}
          {arr.map(item => <div>{item.courseCode}</div>)}
          {arr.map(item => <div>{item.name}</div>)}
          {arr.map(item => <div>{item.time}</div>)}
          {arr.map(item => <div>{item.day}</div>)}
        </Text>
      );
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Add Course </Text>

        <View>
          <TextInput
            placeholder='Insert course code'
            style={styles.input}
            onChangeText={(courseCode) => this.setState({ courseCode })}
          />

          <TextInput
            placeholder='Insert course name'
            style={styles.input}
            onChangeText={(name) => this.setState({ name })}
          />
        </View>


        <View>

          {/*Select time*/}
          <Picker
            style={{ margin: 12, }}
            onValueChange={(value, itemIndex) => this.setState({ time: value })}
          >
            <Picker.Item label='Select time' value='Select Time' />
            <Picker.Item label='8.30am - 9.50am' value={this.state.courseTime[0]} />
            <Picker.Item label='10.00am - 11.20am' value={this.state.courseTime[1]} />
            <Picker.Item label='11.30am - 12.50pm' value={this.state.courseTime[2]} />
            <Picker.Item label='2.00pm - 3.20pm' value={this.state.courseTime[3]} />
            <Picker.Item label='3.30pm - 4.50pm' value={this.state.courseTime[4]} />
          </Picker>

          {/*Select day*/}
          <Picker
            style={{ margin: 12, }}
            onValueChange={(value, itemIndex) => this.setState({ day: value })}
          >
            <Picker.Item label='Select day' value='Select Day' />
            <Picker.Item label='Monday' value={this.state.courseDay[0]} />
            <Picker.Item label='Tuesday' value={this.state.courseDay[1]} />
            <Picker.Item label='Wednesday' value={this.state.courseDay[2]} />
            <Picker.Item label='Thursday' value={this.state.courseDay[3]} />
            <Picker.Item label='Friday' value={this.state.courseDay[4]} />
          </Picker>
        </View>


        {/*Submit add course*/}
        <Button style={{ margin: 12, }}
          title='Add'
          onPress={this.addCourse}
        />

        <Text style={styles.header}> Drop Course </Text>

        {/*Drop*/}
        <TextInput
          style={styles.input}
          placeholder='Insert course code'
          style={styles.input}
          onChangeText={(courseDrop) => this.setState({ courseDrop })}
        />
        <Button style={{ margin: 12, }}
          title='Drop'
          color="red"
          onPress={this.DropCourse}
        />

        <View>
          <Text style={styles.header}> Course Display </Text>
          {this.display()}
        </View>

      

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  header: {
    marginTop: 60,
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default AddCourse;
