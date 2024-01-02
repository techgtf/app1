import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/work-with-us"  text="FIND JOB OPENINGS" {...restProps}>
            We Are Hiring!
        </NextPage>
        
    );
}

export default NextPageContent;