const clusterComplaintsByLocation = (complaints) => {

    const clusters = {};

    complaints.forEach((complaint) => {

        const location = complaint.location.trim();

        if (!clusters[location]) {
            clusters[location] = {
                location: location,
                complaints: [],
                complaintTypes: {},
                totalComplaints: 0,
                totalPriority: 0
            };
        }

        clusters[location].complaints.push(complaint);

        const type = complaint.complaintType;

        if (!clusters[location].complaintTypes[type]) {
            clusters[location].complaintTypes[type] = 0;
        }

        clusters[location].complaintTypes[type]++;

        clusters[location].totalComplaints++;

        clusters[location].totalPriority += complaint.priorityScore || 0;
    });

    return Object.values(clusters);
};

module.exports = clusterComplaintsByLocation;