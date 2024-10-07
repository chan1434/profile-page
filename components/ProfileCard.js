import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProfileCard = ({ name, imageUrl, isDarkMode }) => {
  return (
    <View style={[
      styles.card,
      { backgroundColor: isDarkMode ? '#333333' : '#f5f5f5' }
    ]}>
      <Image
        source={imageUrl}
        style={styles.image}
      />
      <Text style={[
        styles.name,
        { color: isDarkMode ? '#ffffff' : '#000000' }
      ]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileCard;