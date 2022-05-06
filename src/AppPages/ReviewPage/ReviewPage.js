import React from 'react';
import { Link } from 'react-router-dom';
import FizzBuzz from '../../Constants/FizzBuzz';
import { homepath } from '../../Constants/Path';

const ReviewPage = () => {
    const sessionStorageKeys = Object.keys(sessionStorage);
    return (<div>
        <Link to={homepath}>More Entries!</Link>
        {
            sessionStorageKeys.map(key => {
                const ourObject = JSON.parse(sessionStorage.getItem(key));
                if (ourObject === undefined)
                    return (<></>);
                else {
                    const { ["An Arbitrary Integer"]: fizzBuzzInteger, ...trimmedObject } = ourObject;
                    return (<div key={key}>
                        <span>
                            FizzBuzz? = {FizzBuzz(fizzBuzzInteger)}
                        </span>
                        <div>
                            {Object.keys(trimmedObject).map(
                                (entry) => (<>{`${entry} has value ${trimmedObject[entry]}`}<br /></>))}
                        </div>
                    </div>)
                }
            }
            )
        }
    </div>);
}
export default ReviewPage;