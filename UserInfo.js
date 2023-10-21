import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  const displayInfo = () => {
    const name = "Yazeed Shboul"; 
    const universityID = "136522"; 
    setUserInfo(`Name: ${name}\nUniversity ID: ${universityID}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userInfo}>{userInfo}</Text>
      <Button title="My Info" onPress={displayInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default UserInfo;
