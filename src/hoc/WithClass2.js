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
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrapperComponent ref={this.props.forwardedRef} {...this.props} />  
                </div>
            )
        }
    }

    return React.forwardRef( (props, ref) => {
        return <WithClass {...props} forwardedRef={ref} /> 
    });
}

export default withClass2; 

