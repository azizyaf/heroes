import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdOutlineAccountCircle } from 'react-icons/md';

import Loader from '../components/layout/Loader';
import { getHero } from '../store/actions/heroesActions';

const HeroPage = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { heroId } = router.query;

  const isHeroLoading = useSelector(state => state.heroes.currentHeroLoading);
  const selectedHero = useSelector(state => state.heroes.currentHero);

  useEffect(() => {
    if (heroId) {
      dispatch(getHero(heroId));
    }
  }, [heroId]);

  if (isHeroLoading) {
    return <Loader text='Hero Loading' />;
  }

  return (
    <Container>
      <Profile>
        <IconContainer>
          <MdOutlineAccountCircle size={65} />
        </IconContainer>
        <InfoContainer>
          <p>Hero Name : {selectedHero.name}</p>
        </InfoContainer>
        <PowersContainer>
          <p>Powers</p>
          <p>{selectedHero.powers}</p>
        </PowersContainer>
      </Profile>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f0f4f7;
`;

const Profile = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 2px solid #c8cfd5;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
  }
`;

const PowersContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
  }
`;
