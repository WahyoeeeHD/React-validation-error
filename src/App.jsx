// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import {
//   SayHello,
//   Count,
//   IsSuccess,
//   ListKocak,
//   Company,
// } from './components/contoh-func';
// import { SayKocak, NavigationHeader, User } from './components/contoh-class';
import News from './components/contoh-real';

function App() {
  return (
    // <>
    //   <div>
    //     <a href="" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>React Validation but weird</h1>
    //   <br />
    //   {/* PropTypes.string */}
    //   <SayHello name={[]} />
    //   <SayHello name={23} />
    //   <br />
    //   {/* Class PropTypes.string */}
    //   <SayKocak name="Adit" />
    //   <SayKocak name={[]} />
    //   <br />
    //   {/* PropTypes.number */}
    //   <Count count={69} />
    //   <br />
    //   {/* PropTypes.bool */}
    //   <IsSuccess smart={0} />
    //   <IsSuccess smart={[]} />
    //   <br />
    //   {/* PropTypes.func */}
    //   <ListKocak data={['adit', 'ananta', 'bintang', 'tude']} />
    //   {/* PropTypes.object */}
    //   <Company
    //     data={{
    //       name: 'Dicoding',
    //       city: 'Bandung',
    //       since: 2005,
    //     }}
    //   />
    //   {/* PropTypes.instanceOf(Class)
    //   <NavigationHeader user={new User('Dicoding')} />
    //   <NavigationHeader user={{ name: 'Dicoding' }} /> */}
    // </>
      <News
        title="Annual Planting"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet sagittis metus, eget dapibus risus laoreet sed. Praesent ante magna ..."
        image="https://picsum.photos/id/239/800/600"
        isFeatured={true}
        tags={['plant', 'nature', 2, 4, 8, 4]}
        bookmark={() => alert('Bookmarked!')}
        style={{
          // ini opsional
          width: 300,
          border: '1px solid black',
          margin: '0 auto',
          padding: 16,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left'
        }}
      />
  );
}

export default App;
