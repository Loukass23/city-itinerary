import React, { Component } from 'react';

class Activity extends Component {
    render() {
        const { activity } = this.props;
        console.log(activity);
        return (
            <div className='card z-depth-0 activity-card'>
                <div className='card-image'>
                    <img src={activity.image} alt='' className='activity-img' />
                </div>
                <p className='card-title center-align activity-card-title'>
                    {activity.title}
                </p>
                <div className='card-content'>
                    <p className='activity-summary center-align red-text text-lighten-2'>
                        {activity.summary}
                    </p>

                    <div className='activity-detail'>
                        <i className='fas fa-map-marker-alt small red-text text-lighten-2 left' />
                        <p>{activity.location}</p>
                    </div>
                    <div className='activity-detail'>
                        <i className='far fa-lightbulb small red-text text-lighten-2 right' />
                        <p>
                            <span style={{ fontSize: '1.6em' }}>Local Tip:</span>{' '}
                            {activity.localTip}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Activity;