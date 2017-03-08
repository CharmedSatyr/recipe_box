import React from 'react';

class BigBox extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-xs-10 col-xs-offset-1 well bigbox'>
                    <h1>Recipe Box</h1>
                    <div className='row'>

                        {this.props.show}
</div>
                </div>
            </div>
        )
    }
}

export default BigBox;
