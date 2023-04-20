import React, {useState} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {setCoords} from '../redux/locationSlice';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You can not use Geolocation');
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const useGetLocation = () => {
  const [location, setLocation] = useState(false);

  const dispatch = useDispatch();

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            dispatch(
              setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }),
            );
          },
          error => {
            console.log(1, error.code, error.message);
            setLocation(false);
          },
        );
      }
    });
  };
  return {getLocation};
};
