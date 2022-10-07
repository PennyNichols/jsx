// function Header(){
//     return(
//         <h1>Hello World!</h1>
//     )
// }

// export default Header;
import React from 'react';

// class Header extends React.Component {
//     render(){
//         return(
//             <h1>Hello World!</h1>
//         )
//     }
// }

const Header = (props)=>{
    return (
        <div style={{backgroundColor:props.bg}}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;