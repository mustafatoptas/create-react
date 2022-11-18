import React from 'react';
import { useSearchParams } from 'react-router-dom';

export interface ITestPageProps {}

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
    const [searchParams] = useSearchParams();

    const food = searchParams.get('food');
    const dog = searchParams.get('dog');

    return (
        <div>
            <p>This is the test page.</p>
            {food && <p>Favorite food is: {food}</p>}
            {dog && <p>My dogs name is: {dog}</p>}
        </div>
    );
};

export default TestPage;
