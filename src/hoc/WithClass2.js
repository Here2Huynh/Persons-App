import React, { Component } from 'react';

// const withClass2 = (WrapperComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrapperComponent {...props} />  
//         </div>
//     )
// }
// passing unknown props 

// stateful component, there is not name after class
const withClass2 = (WrapperComponent, className) => {
    return class extends Component {
        render() {
            return (
                (props) => (
                    <div className={className}>
                        <WrapperComponent {...this.props} />  
                    </div>
                )
            )
        }
    }
}

export default withClass2; 

