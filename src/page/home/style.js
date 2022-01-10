import styled from "styled-components";
//主体包裹div
export const HomeWrapper=styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
  background:#eee;
`
//左边栏div
export const HomeLift=styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
      width:625px;
      height:270px;
  }
`
// 右边栏div
export const HomeRight=styled.div`
  float:right;
  width:240px;
  background:#0f0;
`
//热门专题部分
export const TopicWrapper=styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
`
//热门专题单独项
export const TopicItem=styled.div` 
  float:left;
  height:32px;
  margin-left:18px;
  padding-right:10px;
  line-height:32px;
  background:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  margin-bottom:10px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`