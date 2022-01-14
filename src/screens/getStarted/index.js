import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import data from './data';
import start from '../../../assets/getStarted1.png';

const GetStarted = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (goToSlide === data.length - 1) {
        setGoToSlide(0);
      } else {
        setGoToSlide(goToSlide + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [goToSlide]);

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Image source={start} />
        <Text style={styles.title}>{data[goToSlide].title}</Text>
        <Text style={styles.description}>{data[goToSlide].description}</Text>
        <View style={styles.iconContainer}>
          {data.map((value, index) => (
            <TouchableOpacity key={index} onPress={() => setGoToSlide(index)}>
              <View
                style={
                  index === goToSlide ? styles.activeIcon : styles.nonActiveIcon
                }
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    lineHeight: 23,
    marginTop: 64,
  },
  description: {
    fontSize: 13,
    lineHeight: 16,
    marginTop: 23,
    color: 'rgba(106, 111, 125, 0.8)',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 55,
  },
  activeIcon: {
    width: 7,
    height: 7,
    backgroundColor: '#2DDA93',
    borderRadius: 7,
    marginRight: 9,
  },
  nonActiveIcon: {
    width: 7,
    height: 7,
    backgroundColor: '#DBDBDB',
    borderRadius: 7,
    marginRight: 9,
  },
  ctaButton: {
    width: '100%',
    height: 50,
    marginTop: 54,
    backgroundColor: '#2DDA93',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
});

export default GetStarted;
