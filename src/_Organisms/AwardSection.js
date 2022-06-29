import React from 'react'
import styled from 'styled-components'
import AwardItem from '../components/AwardItem/AwardItem'
import badgeApple4x from '../src_assets/badge-apple4x.png'
import playStore2x from '../src_assets/play-store2x.png'
import triple2x from '../src_assets/triple2x.png'
import MetricItem from '../components/MetricItem/MetricItem'
import ContentLogo from '../components/ContentLogo/ContentLogo'
import { fadeInY } from '../styles/animation'

const FlexBox = styled.div`
  display: flex;
`

const MainContainer = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  background-color: white;
`

const SectionContainer = styled.section`
  min-width: 1040px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
`

const SectionRightArea = styled(FlexBox)`
  flex-direction: column;
`

const CountUpContainer = styled(FlexBox)`
  flex-direction: column;
  opacity: 0;
  animation: ${fadeInY} 0.7s 0.1s ease-in-out forwards;
`

const AwardItemContainer = styled(FlexBox)`
  justify-content: space-between;
  margin: 30px 0 140px 0;
  opacity: 0;
  animation: ${fadeInY} 0.7s 0.2s ease-in-out forwards;
`

const MetricItemContainer = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: #3a3a3a;
  letter-spacing: -1px;
  strong {
    font-weight: bold;
  }
`

const AWARD_ITEMS = [
  {
    id: 1,
    imageUrl: playStore2x,
    alt: 'playStoreAward',
    text: `2018 구글 플레이스토어\n올해의 앱 최우수상 수상`,
  },
  {
    id: 2,
    imageUrl: badgeApple4x,
    alt: 'appStoreAward',
    text: `2018 애플 앱스토어\n오늘의 여행앱 선정`,
  },
]

const METRIC_ITEMS = [
  {
    id: 1,
    count: 700,
    text1: '만 명',
    text2: `의 여행자`,
  },
  {
    id: 2,
    count: 100,
    text1: '만 개',
    text2: `의 여행 리뷰`,
  },
  {
    id: 3,
    count: 470,
    text1: '만 개',
    text2: `의 여행 일정`,
  },
]

const IMAGE_OPTIONS = {
  imageUrl: triple2x,
  alt: 'tripleLogo',
  width: 400,
  height: 338,
  padding: 280,
  text: '2021년 12월 기준',
}

function AwardSection() {
  return (
    <MainContainer>
      <SectionContainer>
        {/* Triple Content Logo */}
        <ContentLogo option={IMAGE_OPTIONS} />
        <SectionRightArea>
          {/* CountUp */}
          <CountUpContainer>
            {METRIC_ITEMS.map((data) => {
              return (
                <MetricItemContainer key={data.id}>
                  <strong>
                    <MetricItem end={data.count} />
                    {data.text1}
                  </strong>
                  {data.text2}
                </MetricItemContainer>
              )
            })}
          </CountUpContainer>
          {/* Award List */}
          <AwardItemContainer>
            {AWARD_ITEMS.map((item) => {
              return (
                <AwardItem
                  key={item.id}
                  alt={item.alt}
                  imageUrl={item.imageUrl}
                  text={item.text}
                  isLastItem={item.id % 2 === 0}
                />
              )
            })}
          </AwardItemContainer>
        </SectionRightArea>
      </SectionContainer>
    </MainContainer>
  )
}

export default AwardSection
