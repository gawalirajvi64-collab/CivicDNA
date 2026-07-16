const detectRootCause = (cluster) => {

    const types = cluster.complaintTypes;

    let rootCause = "Multiple Infrastructure Issues";
    let explanation = "Several civic complaints were detected in this area.";
    let confidence = 50;

    // RULE 1: Pipeline Failure
    if (
        types["Pothole"] &&
        types["Water Leakage"] &&
        types["Road Damage"]
    ) {
        rootCause = "Underground Pipeline Failure";

        explanation =
            "Potholes, water leakage and road damage occurring in the same area indicate a possible underground pipeline failure.";

        confidence = 90;
    }

    // RULE 2: Drainage Failure
    else if (
        types["Garbage"] &&
        types["Flooding"]
    ) {
        rootCause = "Drainage System Failure";

        explanation =
            "Garbage accumulation combined with flooding suggests blocked or inadequate drainage infrastructure.";

        confidence = 85;
    }

    // RULE 3: Electrical Infrastructure
    else if (
        types["Streetlight"] &&
        types["Road Damage"]
    ) {
        rootCause = "Electrical and Road Infrastructure Issue";

        explanation =
            "Streetlight failures combined with road damage indicate possible infrastructure maintenance problems.";

        confidence = 70;
    }

    // Single type pattern
    else if (cluster.totalComplaints >= 3) {
        rootCause = `${Object.keys(types)[0]} Problem Cluster`;

        explanation =
            `Multiple ${Object.keys(types)[0]} complaints have been reported in the same area.`;

        confidence = 65;
    }

    return {
        location: cluster.location,
        rootCause,
        explanation,
        confidence,
        complaintsLinked: cluster.totalComplaints,
        complaintTypes: cluster.complaintTypes,
        totalPriority: cluster.totalPriority
    };
};


module.exports = detectRootCause;