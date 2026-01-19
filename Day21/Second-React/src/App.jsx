
import './App.css'
import Card from './Card';
import ChildA from './ChildA'

let data = [
  {
    title: "Cat title",
    desc: "This is cat",
    img: "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"
  },
  {
    title: "Tiger Title",
    desc: "This is tiger",
    img: ""
  },
  {
    title: "Cow Title",
    desc: "This is cow",
    img: ""
  },
  {
    title: "Dog Title",
    desc: "This is dog",
    img: ""
  }
]

function App() {
  let a = 20;
  return (
    <div>
      {/* <h1 className='bg-red-900'>H1 tag</h1>
      <ChildA num={a} str={"hii"} isPassed={true} arr={[1,2,3,4,5]}/> */}

      <div className='max-w-7xl mx-auto flex flex-wrap gap-3'>
        {
          data.map((obj) => (
            <Card obj={obj}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
