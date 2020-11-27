import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { Platform } from 'react-native';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={20}
    color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    {...props}
  />
);
export default CustomHeaderButton;