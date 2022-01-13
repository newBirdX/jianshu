import React from 'react';
import Loadable from 'react-loadable';
//需要异步加载的组件
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: ()=>{
      return (
          <div>正在加载.....</div>
      )
  }
});

export default ()=>{
  return(
    <LoadableComponent/>
  )
}

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }
