import styled from "styled-components";
import img1 from './images/22.png'
import img2 from './images/33.png'
import img3 from './images/44.png'
import img4 from './images/55.png'
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
  width:280px;
`
//热门专题部分
export const TopicWrapper=styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
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
//列表项
export const ListItem=styled.div`
  padding:20px 0;
  overflow:hidden;
  border-bottom :1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`
//列表内容及标题
export const ListInfo=styled.div`
  width:500px;
  float:left;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`
//右边栏的推荐外div
export const RecomendWrapper=styled.div`
  margin:30px 0;
  width:280px;
`
//四个跳转（日更，会员，连载，版权）
export const RecomendItem=styled.a`
  width:280px;
  height:50px;
  display:block;
  background-size:contain;
  &.it1{
    background:url(${img1});
    background-size:contain;
  }
  &.it2{
    background:url(${img2});
    background-size:contain;
  }
  &.it3{
    background:url(${img3});
    background-size:contain;
  }
  &.it4{
    background:url(${img4});
    background-size:contain;
  }
`
//写留言
export const WritterWrapper=styled.div`
  width:278px;
  height:300px;
  line-height:300px;
  border:1px solid #dcdcdc;
  border-radius:3px;
  text-align:center;
`
//阅读更多按钮
export const LoadMore=styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  background:#a5a5a5;
  border-radius:20px;
  text-align:center;
  color:#fff;
  margin:30px 0;
  cursor:pointer;
`
export const BackTop=styled.div`
  position:fixed;
  bottom:100px;
  right:100px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
  .hidd{
    display:none;
  }
`