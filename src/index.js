import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author ="Sami" timeAgo="Today at 4:45pm" comment="ooo! wha go my Lord?!" pic={faker.image.avatar()}/>
            </ApprovalCard>  

            <ApprovalCard> 
                <CommentDetail author="Toya" timeAgo="Today at 10:00am" comment="yessi King! i normEL. u?" pic={faker.image.avatar()}/>
            </ApprovalCard> 

            <ApprovalCard>
                <CommentDetail author="Tyson" timeAgo="Yesterday at 2:00am" comment="nice to hear my bredrins doing well man" pic={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
        
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));