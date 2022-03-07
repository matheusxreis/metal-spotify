import styled from "styled-components";


export const AlbumContainer = styled.div`

margin-top:30px;
height:300px;

width:100%;


/* background: linear-gradient(to bottom, #910614 40%, #910614 30%, rgba(0, 0, 0, 0.7)); */

height: 800px;

padding-left: 10px;
`

export const Header = styled.div`
display:flex;
//flex-wrap: wrap;
height:300px;

max-width:100%;
margin:20px;

img {
    max-width:400px;
    height:300px;
    border-radius: 2px;
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);


}
div {
    height:auto;
    display:block;
    margin-top:auto;
   // margin-bottom: 50px;
    margin-left: 10px;
}
h3 {
    font-size: 16px;
    font-family: arial;

}

h1 {
    font-size:70px;
    font-weight:1000;
    font-family: arial;
    
}

p {
    font-weight:500;
    font-size:19px;
}
`
export const Content = styled.div`

background:rgba(0, 0, 0, 0.7);

max-width:100%;
padding:10px;

max-height: 3000px; 
div.musics {
    margin-top:30px;
    margin-left:25px;
    margin-bottom:0;


}

div.title {
    h3 {
    font-size:24px;
    font-weight:200;
    color:rgba(252, 252, 252, 0.5);
    margin-top:5px;
    margin-left:30px;
   // margin-right:30px;

    padding-bottom:10px;

    border-bottom: 0.5px solid rgba(252, 252, 252, 0.5);
}   
}

h3 {
    font-size:24px;
    font-weight:200;
}
p {
    font-size:20px;
    color:rgba(252, 252, 252, 0.5);

}

`


export const PlayerDiv = styled.div`

margin-top:5px;
    margin-left:30px;

cursor: pointer;
  margin-bottom:20px;
width:60px;
height:60px;
box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

border-radius:100%;
//background: linear-gradient(151.67deg, rgba(145, 6, 20, 0.8) 35.66%, rgba(144, 15, 36, 0.795005) 51.4%, rgba(200, 82, 89, 0.8) 86.44%);
background: rgb(145, 6, 20);


transition: opacity 0.6s;

transition:0.6s;


img {
    margin:5px auto;
    margin-left:8px;
    filter: brightness(0);
    width: 50px;
    box-shadow: 0;
}

&:hover {
    filter: brightness(0.8)
}    

`


export const HeartDiv = styled.div`

width:60px;
height:60px;
margin-left:30px;

img {
    width:50px;
    margin-top:2px;
    margin:10px auto;

    cursor: pointer;

}

`