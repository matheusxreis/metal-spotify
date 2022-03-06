import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'



export function SkeletonComponent(){

  const array = [1, 2, 3, 4]
return (
    <SkeletonTheme highlightColor="#1A1919">
       <Skeleton 
            height={1000} 
            width={320} 
            count={1} 
            style={{
              position: 'fixed',
              left:0,
              top:0,
              zIndex:2
            }}
        baseColor='#000'/>

      <Skeleton 
            height={80} 
            width={3000} 
            count={1} 
            style={{
              position: 'fixed',
              left:0,
              top:0,
            }}
        baseColor='#313131'/>
    <div style={{
          marginTop:30

          }}>
      <Skeleton 
          height={30} 
          width={700} 
          count={1} 
          style={{
          margin: 10,
          marginTop:20

          }}
          baseColor='#313131'/> 
    </div>

    <div style={{display:"flex", justifyContent:"space-around"}}>
        {array.map(x=>(
        <Skeleton 
        height={500} 
        width={380} 
        count={1} 
        style={{
        marginLeft: 10,
        }}
        baseColor='#313131'/> 
        ))}
    </div>


    <Skeleton 
          height={30} 
          width={700} 
          count={1} 
          style={{
          margin: 5,
          marginTop:20

          }}
          baseColor='#313131'/> 


<div style={{display:"flex", justifyContent:"space-around"}}>
        {array.map(x=>(
        <Skeleton 
        height={500} 
        width={380} 
        count={1} 
        style={{
        margin: 10,
        }}
        baseColor='#313131'/> 
        ))}
    </div>

  

  </SkeletonTheme> 

  
)
}

//        baseColor='#1A1919'/>

