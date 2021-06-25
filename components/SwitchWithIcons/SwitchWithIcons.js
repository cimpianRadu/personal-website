import { useReducer } from 'react';
import { Text, Button, useColorModeValue } from '@chakra-ui/react';

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
      <Button
        padding={1}
        borderRadius="base"
        background={switchBackgroundColor}
        aria-label={ariaLabel}
        onClick={onSetTheme}
        _hover={switchBackgroundColor}
        _focus={{ borderColor: 'transparent' }}
      >
        <Text display={state.isLightTheme ? 'visible' : 'none'} fontSize="2xl">
          {rightIcon}
        </Text>
        <Text display={state.isLightTheme ? 'none' : 'visible'} fontSize="2xl">
          {leftIcon}
        </Text>
      </Button>
    </>
  );
};
