const stageSelect = document.getElementById('stageSelect');
const stageDescription = document.getElementById('stageDescription');
const stageManagement = document.getElementById('stageManagement');
const managementSteps = document.getElementById('managementSteps');

stageSelect.addEventListener('change', () => {
    const selectedStage = stageSelect.value;
    const stageInfo = stagingData[selectedStage];
    stageDescription.textContent = stageInfo.description;

    // Clear previous management steps
    managementSteps.innerHTML = '';

    // Add new management steps to the list
    stageInfo.management.forEach((step) => {
        const listItem = document.createElement('li');
        listItem.textContent = step;
        managementSteps.appendChild(listItem);
    });
});
const stagingData = {
    stage1: {
        description: "Stage IA Melanoma: pT1aN0M0, pT1bN0M0",
        management: [
            "Wide local excision of melanoma scar",
            "1cm margin - take into account original excision margin of melanoma",
            " ",
            "Follow up schedule:",
            "- OPA 6,12 months",
            "Discharge at 1 year",
        ],
    },
    stage2: {
        description: "Stage IB Melanoma: pT2aN0M0",
        management: [
            "Wide local excision of melanoma scar",
            "If <1mm - 1cm margin, if ≥1mm - 1 to 2cm margin",
            " ",
            "Consider SLNB if the following:",
            "BT >1.0mm",
            "BT 0.8 to 1.0mm and one of the following - ulceration, LVI, MR >2",
            "If no SNB - can be offered US surveillance of nodal basin/s at 6, 12, 24 and 36 months",
            " ",
            "Follow up schedule:",
            "- OPA 6, 12, 24, 36, 48, 60 months",
            "Discharge at 5 years",
        ],
    },
    stage3: {
        description: "Stage IIA Melanoma: pT2bN0M0, pT3aN0M0",
        management: [
            "Wide local excision of melanoma scar - 1 to 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 6, 12, 18, 24 and 36 months",
            " ",
            "Follow up schedule:",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 30, 36, 48, 60 months",
            "Discharge at 5 years",
            "Can be cosidered for MELMART II Trial (must have SNLB)",
        ],
    },
    stage4: {
        description: "Stage IIB Melanoma: pT3bN0M0, pT4aN0M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Follow up schedule:",
            " MRI and CT at 6, 12, 18, 24, 30, 36, 48 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 30, 36, 48, 60 months",
            "Discharge at 5 years",
            "Can be cosidered for MELMART II Trial (must have SNLB)",
        ],
    },
    stage5: {
        description: "Stage IIC Melanoma: pT4bN0M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Refer to Oncology following surgery",
            " ",
            "Follow up schedule:",
            " MRI and CT at 6, 12, 18, 24, 30, 36, 48 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 30, 36, 48, 60 months",
            "Discharge at 5 years",
            "Can be cosidered for MELMART II Trial (must have SNLB)",
        ],
    },
    stage6: {
        description: "Stage IIIA Melanoma: pT1a-2a, N1a/N2a, M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Follow up schedule:",
            "If no adjuvant therapy:",
            "MRI and CT at 6, 12, 18, 24, 30, 36, 48 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60 months",
            "Discharge at 5 years",
        ],
    },
    stage7: {
        description: "Stage IIIB Melanoma: pT1a-3a, N1b-2b, M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Refer to Oncology following surgery",
            " ",
            "Follow up schedule:",
            "If no adjuvant therapy:",
            "- MRI and CT at 6, 12, 18, 24, 30, 36, 48 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60 months",
            "Discharge at 5 years.",
            " ",
            "If adjuvant therapy:",
            "- CT 3 monthly, MRI 6 monthly",
            "- OPA 3 monthly in Oncology and 6 monthly in Melanoma Clinic",
        ],
    },
    stage8: {
        description: "Stage IIIC Melanoma: pT1a-3a if N2c-3c or pT3b-4a and N1+ or pT4v and N3a-c, M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Refer to Oncology following surgery",
            " ",
            "Follow up schedule:",
            "If no adjuvant therapy:",
            "- MRI and CT at 6, 12, 18, 24, 30, 36, 48 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60 months",
            "Discharge at 5 years.",
            " ",
            "If adjuvant therapy:",
            "- CT 3 monthly, MRI 6 monthly",
            "- OPA 3 monthly in Oncology and 6 monthly in Melanoma Clinic",
        ],
    },
    stage9: {
        description: "Stage IIID Melanoma: pT4b, N3a-c, M0",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Refer to Oncology following surgery",
            " ",
            "Follow up schedule:",
            "If no adjuvant therapy:",
            "- MRI and CT at 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60 months. Annually years 5-10",
            "Discharge at 10 years.",
            " ",
            "If adjuvant therapy:",
            "- CT 3 monthly, MRI 6 monthly",
            "- OPA 3 monthly in Oncology and 6 monthly in Melanoma Clinic",
        ],
    },
    stage10: {
        description: "Stage IV Melanoma: Any M staging",
        management: [
            "Staging scans - MRI head with contrast and CT NTAP with contrast",
            "If scans clear: Wide local excision of melanoma scar - 2cm margin",
            " ",
            "Consider SLNB",
            "If no SNB - can be offered US surveillance of nodal basin/s at 3, 9, 15, 21, 27 and 33 months",
            " ",
            "Refer to Oncology following surgery",
            " ",
            "Follow up schedule:",
            "If no adjuvant therapy:",
            "- MRI and CT at 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54 and 60 months",
            "- OPA 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60 months. Annually years 5-10",
            "Discharge at 10 years.",
            " ",
            "If adjuvant therapy:",
            "- CT 3 monthly, MRI 6 monthly",
            "- OPA 3 monthly in Oncology and 6 monthly in Melanoma Clinic",
        ],
    },

    // Add more stages as needed
};

