import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'



export function SkeletonComponent(){

  const array = [1, 2, 3, 4, 5, 6]
return (
    <SkeletonTheme highlightColor="#1A1919">
       <Skeleton 
            height={1000} 
            width={300} 
            count={1} 
            style={{
              position: 'fixed',
              left:0,
              top:0
            }}
        baseColor='#000'/>

{array.map(x=>(
 <Skeleton 
 height={600} 
 width={500} 
 count={1} 
 // style={{
 //   // position: 'fixed',
 //   // left:0,
 //   // top:0
 // }}
baseColor='#615F5F'/> 
))}
  

  </SkeletonTheme> 

  
)
}

//        baseColor='#1A1919'/>

