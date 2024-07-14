import { Button, GestureResponderEvent, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'

const index = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <Text style={styles.selectedText}>Selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          mode={mode}
          onChange={onChange}
          style={styles.dateTimePicker}
        />
      )}
    </SafeAreaView>
  );
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  selectedText: {
    marginVertical: 20,
    fontSize: 18,
    color: '#333',
  },
  dateTimePicker: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
