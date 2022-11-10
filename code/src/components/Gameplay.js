/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/game'
import { Loading } from './Loading';
import { Styled } from './Gameplay.styled';

export const Gameplay = () => {
  const dispatch = useDispatch();
  const progress = useSelector((store) => store.game.progress);
  const isLoading = useSelector((store) => store.game.isLoading)

  const onClickAction = (type, direction) => {
    dispatch(gameProgress(type, direction));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styled.Container>
          <div>
            <Styled.GamePlayText>Description: {progress.description}</Styled.GamePlayText>
            <div>
              {progress.actions.map((item) => (
                <>
                  <Styled.GamePlayText>{item.description}</Styled.GamePlayText>
                  <Styled.GamePlayButton
                    type="button"
                    onClick={
                      () => onClickAction(item.type, item.direction)
                    }> Go {item.direction}
                  </Styled.GamePlayButton>
                </>
              ))}
            </div>
          </div>
        </Styled.Container>
        // Here the footer needs to go but eslint hates me....!!!
      )}
    </>
  )
};