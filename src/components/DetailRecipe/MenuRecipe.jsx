import React from 'react';
import * as S from './MenuRecipe.styled';
import { ReactComponent as ShareIcon } from '../../assets/DetailrecipeShareIcon.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/DetailrecipeSaveIcon.svg';
import { ReactComponent as CookTimeIcon } from '../../assets/DetailrecipeTimeIcon.svg';

// import { ReactComponent as DifficultyIcon } from '../../assets/DetailrecipeDifficultyIcon.svg';

export default function MenuRecipe() {
  return (
    <S.Wrapper>
      <S.MenuImage src="http://file.okdab.com/UserFiles/searching/recipe/000200.jpg" />
      <S.NameDescriptionContainer>
        <S.MenuName>나물비빔밥</S.MenuName>
        <S.MenuDescription>
          육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥
        </S.MenuDescription>
      </S.NameDescriptionContainer>
      <S.ProfileAddOnContainer>
        <S.ProfileContainer>
          <S.ProfileImage src="https://i.namu.wiki/i/fiJBOkC5Z8L0wIhl-59O3GZeYVHPoBOtJdnv7CzyIHFVmn8NteDpg-KQSQVCdLC5SsJ0R5wuj7emU6n7dvOaSg.webp" />
          <S.ProfileName>닉네임</S.ProfileName>
        </S.ProfileContainer>
        <S.AddOnContainer>
          <S.BookMark>
            <BookmarkIcon />
          </S.BookMark>
          <S.Share>
            <ShareIcon />
          </S.Share>
        </S.AddOnContainer>
      </S.ProfileAddOnContainer>
      <S.SubDetailContainer></S.SubDetailContainer>
    </S.Wrapper>
  );
}