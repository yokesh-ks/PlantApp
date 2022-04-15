import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import data from './data';
import MobileContainer from '../../components/MobileContainer';

const GetStarted = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (goToSlide < data.length - 1) {
        setGoToSlide(goToSlide + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [goToSlide]);

  const goNext = () => {
    if (goToSlide === data.length - 1) {
      console.log('go to sign in page');
    } else {
      setGoToSlide(goToSlide + 1);
    }
  };

  return (
    <MobileContainer style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Image source={data[goToSlide].image} />
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
        <TouchableOpacity style={styles.ctaButton} onPress={goNext}>
          <Text style={styles.ctaText}>
            {goToSlide === data.length - 1 ? 'Sign up' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </MobileContainer>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 19,
    lineHeight: 23,
    marginTop: 64,
    color: 'rgba(255, 255, 255, 1)',
  },
  description: {
    fontSize: 13,
    lineHeight: 16,
    marginTop: 23,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 55,
  },
  activeIcon: {
    width: 20,
    height: 7,
    backgroundColor: '#2DDA93',
    borderRadius: 7,
    marginRight: 9,
  },
  nonActiveIcon: {
    width: 7,
    height: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 7,
    marginRight: 9,
  },
  ctaButton: {
    width: '100%',
    height: 50,
    marginTop: 54,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    fontSize: 15,
    lineHeight: 18,
    color: '#2DDA93',
    fontWeight: '600',
    letterSpacing: 0.24,
    textTransform: 'uppercase',
  },
});

export default GetStarted;
