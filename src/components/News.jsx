import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

import { useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import Loader from './Loader';

const {Title} = Typography;

const News = ({simplified}) => {
  const pathname = window.location.pathname
  const {data: title} = useGetCryptoNewsQuery();
  // console.log(title);

  if(title?.length<1) return <Loader />;
  
  return (
    <Row gutter={[24,24]}>
      {title?.map((news,i) => 
      pathname !== '/news' ?
        i < 10 &&
        (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
            <div className="news-image-container">
              <Title className='news-title' level={4}>{news.title}</Title>
            </div>
            </a>
          </Card>
        </Col>):
        (
        <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className='news-card'>
          <a href={news.url} target='_blank' rel='noreferrer'>
          <div className="news-image-container">
            <Title className='news-title' level={4}>{news.title}</Title>
          </div>
          </a>
        </Card>
      </Col>
))}
    </Row>
  )
}

export default News