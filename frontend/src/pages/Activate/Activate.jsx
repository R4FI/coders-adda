import React, { useState } from 'react';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import Profile from '../../components/shared/Profile/Profile';

const steps = {
    1: StepName,
    2: StepAvatar,
    3: Profile
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }
    return (
        <div className="cardWrapper">
            <Step onNext={onNext}></Step>
        </div>
    );
};

export default Activate;
