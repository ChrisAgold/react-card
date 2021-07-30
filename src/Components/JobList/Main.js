import React, {useEffect,useState} from "react";
import {runNewSearch} from "../../api";
import {JobListCard} from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
// 12
import {
    StyledJobListMain,
    StyledJobListBody,
    StyledJobListHeader,
    StyledJobListMainList,
    StyledCardMain,
} from "../styles";
import {JobListModal} from "./Modal";

//HOOKS
//useState & useEffect

export const JobListMain = () => {
    const [loading, setLoading] = useState("LOADING...");
    const [jobs, setJobs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        runNewSearch(
            new Date("January 1, 2022 00:00:00"),
            new Date("December 31, 2022 23:00:00")
        ).then((result) => {
            // API CALL IS RESOLVED HERE
            console.log(result);
            setJobs(result);
            setLoading();
        });
    }, []);

    const JobListHeader = () => {
        return <StyledJobListHeader>Available Jobs</StyledJobListHeader>;
    };

    const JobListMainList = () => {
        return (
            <StyledJobListMainList>
                {jobs.length > 0 ? "" : "No Jobs To Display"}
            </StyledJobListMainList>
        );
    };

    // eslint-disable-next-line no-unused-vars
    const exampleJob = {
        contractorname: "Extra Duty Solutions",
        defaultjobname: "test takable",
        dayofweek: "Saturday",
        hourlyrate: 0,
        note: "test job takeable",
        officialagencyname: "Greensboro TEST",
        openings: 1,
        scheduledpaidhours: 17,
        totalpay: 0,
    };

    return (
        <StyledJobListMain>
            <JobListHeader/>

            {showModal && (
                <JobListModal setShowModal={setShowModal}/>
            )}

            <StyledJobListBody>
                {loading}

                <JobListMainList/>

                {jobs.map((j) => {
                    return (
                        <JobListCard
                            showModal={showModal}
                            setShowModal={setShowModal}
                            job={j}
                        />
                    );
                })}

                {/*javascript*/}
            </StyledJobListBody>
        </StyledJobListMain>
    );
};
