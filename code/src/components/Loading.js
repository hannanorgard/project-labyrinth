import React from 'react';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Container>
      <Styled.LoadingGif src="assets/running.webp" alt="running gif" />
    </Styled.Container>
  )
};

export default Loading;

// import React from 'react';
// import { useSelector } from 'react-redux';
// const LoadingIndicator = () => {
//   const isLoading = useSelector((state) => state.game.isLoading);
//   return <>{isLoading && <div> LOADING </div>}</>;
// };
// export default LoadingIndicator;