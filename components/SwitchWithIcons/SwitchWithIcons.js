import { useReducer } from 'react';
import { Text, Box, Button, useColorModeValue } from '@chakra-ui/react';
import styles from './SwitchWIthIcons.module.css';

const initialState = {
  isLightTheme: true,
  isLeftAnimation: false,
  isRightAnimation: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return {
        isLightTheme: true,
        isLeftAnimation: false,
        isRightAnimation: true,
      };
    case 'dark':
      return {
        isLightTheme: false,
        isLeftAnimation: true,
        isRightAnimation: false,
      };
    default:
      return initialState;
  }
};
export const SwithWithIcons = ({
  leftIcon = '🌞',
  rightIcon = '🌙',
  onChange = () => {},
  ariaLabel = '',
}) => {
  const [state, dipatch] = useReducer(reducer, initialState);
  const switchBackgroundColor = useColorModeValue('blue.900', 'orange.100');

  const onSetTheme = () => {
    if (state.isLightTheme) {
      dipatch({ type: 'dark' });
    }
    if (!state.isLightTheme) {
      dipatch({ type: 'light' });
    }
    onChange();
  };

  return (
    <>
      <Box
        paddingX={2}
        background={switchBackgroundColor}
        rounded={18}
        width="100px"
        border="2px"
        borderColor="blue.400"
        aria-label="ssssss"
      >
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          background="twitter.300"
          aria-label={ariaLabel}
          className={`
          ${styles.button} 
          ${state.isLeftAnimation && styles.leftIcon} 
          ${state.isRightAnimation && styles.rightIcon}
          `}
          background="transparent"
          onClick={onSetTheme}
          size="xm"
        >
          <Text
            visibility={state.isLightTheme ? 'visible' : 'hidden'}
            fontSize="2xl"
          >
            {rightIcon}
          </Text>
          <Text
            visibility={state.isLightTheme ? 'hidden' : 'visible'}
            fontSize="2xl"
          >
            {leftIcon}
          </Text>
        </Button>
      </Box>
    </>
  );
};
