import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#999',
})`
  height: 100%;
`;
