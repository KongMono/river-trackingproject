angular.module('river.factory')
    .factory('DataFactory', function () {

        var dataStatus = [
            {
                title: "ทั้งหมด",
                num: 15
            },
            {
                title: "เกินกำหนด",
                num: 3
            },
            {
                title: "ตามเวลา",
                num: 10
            },
            {
                title: "แล้วเสร็จ",
                num: 2
            }
        ];

        var dataProject = [
            {
                title: "โครงการ A",
                startDate: "01 มกราคม 2015",
                endDate: "21 มีนาคม 2016",
                person: "สมชาย",
                progress: 80,
                status: "ตามเวลา",
                period: 3,
                engineer: [
                    {
                        "name": "ฉัตรชัย นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng2": "สรพงษ์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng3": "เสกสรรค์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    }
                ],
                periodData: [
                    {
                        "id": 1,
                        "periodtime": "01 มกราคม 2015 - 30 มีนาคม 2016",
                        "data": [
                            {
                                "key": "RECEIVE_MAT_Install",
                                "value": "30 มีนาคม 2016"
                            },
                            {
                                "key": "P/R_MAT_Install",
                                "value": "30 มีนาคม 2016"
                            },
                            {
                                "key": "P/O_Contractor",
                                "value": "30 มีนาคม 2016"
                            }

                        ]
                    },
                    {
                        "id": 2,
                        "periodtime": "01 มกราคม 2015 - 30 มีนาคม 2016",
                        "data": [
                            {
                                "key": "RECEIVE_MAT_Install",
                                "value": "30 มีนาคม 2016"
                            },
                            {
                                "key": "P/R_MAT_Install",
                                "value": "30 มีนาคม 2016"
                            },
                            {
                                "key": "P/O_Contractor",
                                "value": "30 มีนาคม 2016"
                            }

                        ]
                    }
                ]
            },
            {
                title: "โครงการ B",
                startDate: "10 กุมภาพันธ์ 2015",
                endDate: "20 ธันวาคม 2015",
                person: "ฉัตรชัย",
                progress: 95,
                status: "ตามเวลา",
                engineer: [
                    {
                        "name": "ฉัตรชัย นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng2": "สรพงษ์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng3": "เสกสรรค์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    }
                ]
            },
            {
                title: "โครงการ C",
                startDate: "10 มีนาคม 2015",
                endDate: "30 ตุลาคม 2015",
                person: "สรพงษ์",
                progress: 100,
                status: "แล้วเสร็จ",
                engineer: [
                    {
                        "name": "ฉัตรชัย นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng2": "สรพงษ์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng3": "เสกสรรค์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    }
                ]
            },
            {
                title: "โครงการ D",
                startDate: "10 พฤษภาคม 2015",
                endDate: "30 พฤศจิกายน 2015",
                person: "สมชาย",
                progress: 60,
                status: "เกินกำหนด",
                engineer: [
                    {
                        "name": "ฉัตรชัย นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng2": "สรพงษ์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    },
                    {
                        "eng3": "เสกสรรค์ นามสกุล",
                        "position": "ฉัตรชัย นามสกุล",
                    }
                ]
            }
        ];

        var selectFilterDate = [
            { name: "ทั้งหมด", scope: "" },
            { name: "7วันล่าสุด", scope: "" },
            { name: "30ล่าสุด", scope: "" },
            { name: "เดือนที่แล้ว", scope: "" },
            { name: "เดือนนี้", scope: "" }
        ];

        return {
            dataStatus: dataStatus,
            dataProject: dataProject,
            selectFilterDate: selectFilterDate
        }

    });