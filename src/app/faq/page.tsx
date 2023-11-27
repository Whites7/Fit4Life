import { NextPage } from "next";

const FaqPage: NextPage = () => {
    
    return (
        <div id="faqContainer">

            <div id="faqContainerHead">
                {/* Your content goes here */}
                <h1 >It is me! The FAQ!</h1>
            </div>
            
            <div id="faqContainerQuestions">
                <li>Who did This?</li>
                <li>Why was this done?</li>
            </div>
        </div>
    );
};

export default FaqPage;
