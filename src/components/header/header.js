import React from 'react';
import styled from 'styled-components';

import Grid, { Column } from '../grid/grid';

import Avatar from './avatar';

const Wrapper = styled.div`
  width: 600px;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Name = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Jump = styled.span`
  display: inline-block;
  transition: transform 0.2s;
  cursor: default;
  min-width: 20px;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-20px) rotate(10deg) scale(2);
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Amount = styled.div`
  font-size: 40px;
  font-family: 'Pacifico', sans-serif;
  color: ${({ count }) => (count && count >= 100 ? '#ffc600' : 'inherit')};
`;

const FollowBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  color: #1e1e1e;
  border-radius: 4px;
  text-align: center;
`;

const Social = styled.div`margin: 40px 0;`;

const SVG = styled.svg`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;

const Header = ({ title, avatar, followingCount, followersCount }) =>
  <Wrapper>
    <Avatar picture={avatar} />
    <Name>
      {[...title].map((letter, i) =>
        <Jump key={i}>
          {letter}
        </Jump>
      )}
    </Name>
    <Social>
      <Grid>
        <Column size={2} style={{ textAlign: 'right', paddingRight: 10 }}>
          <a
            href="https://www.linkedin.com/in/nikadzic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG height="32" viewBox="0 0 32 32" width="32">
              <path 
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="#ffffff"  
              />
            </SVG>
          </a>
        </Column>
        <Column size={2} style={{ textAlign: 'left', paddingLeft: 10 }}>
          <a
            href="https://github.com/nadzic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG height="32" viewBox="0 0 32 32" width="32">
              <path 
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="#ffffff"
              />
            </SVG>
          </a>
        </Column>
      </Grid>
    </Social>
    <FollowBox>
      <Grid>
        <Column size={2}>
          <Title>Followers</Title>
          <Amount count={followersCount}>
            {followersCount}
          </Amount>
        </Column>
        <Column size={2}>
          <Title>Following</Title>
          <Amount count={followingCount}>
            {followingCount}
          </Amount>
        </Column>
      </Grid>
    </FollowBox>
  </Wrapper>;

export default Header;
