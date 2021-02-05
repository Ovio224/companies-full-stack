'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('user_roles', [
            {
                id: 1,
                role: 'COMPANY',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                role: 'NORMAL_USER',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})

        await queryInterface.bulkInsert('users', [{
            id: 1,
            active: true,
            user_role_id: 1,
            email: 'test2@gmail.com',
            name: 'Test',
            profile_pic: 'https://image.shutterstock.com/image-vector/awesome-quote-print-vector-600w-502963258.jpg',
            phone_number: '0110',
            address: 'test',
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                id: 2,
                active: true,
                user_role_id: 1,
                email: 'test3@gmail.com',
                name: 'Test2',
                profile_pic: 'https://image.shutterstock.com/image-vector/awesome-quote-print-vector-600w-502963258.jpg',
                phone_number: '0110',
                address: 'test',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})

        await queryInterface.bulkInsert('companies', [{
            id: 1,
            name: 'Company test',
            logo_image_uri: 'https://image.shutterstock.com/image-vector/awesome-quote-print-vector-600w-502963258.jpg',
            lng: 1,
            lat: 1,
            cvr: 'Test',
            is_paid: true,
            is_enabled: true,
            is_visible: true,
            user_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})

        await queryInterface.bulkInsert('jobs', [{
            id: 1,
            is_emergency: false,
            title: 'job test',
            description: 'job test',
            allow_contact_by_app: true,
            can_user_bring_boat: true,
            allow_picking_from_spot: true,
            allow_repair_on_spot: true,
            allow_contact_by_phone: true,
            allow_contact_by_email: true,
            lat: 1,
            lng: 1,
            price: 1250,
            posted: true,
            user_id: 2,
            due_date: new Date(),
            due_time: new Date(),
            is_done: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            is_emergency: false,
            title: 'job test2',
            description: 'job test2',
            allow_contact_by_app: true,
            can_user_bring_boat: true,
            allow_picking_from_spot: true,
            allow_repair_on_spot: true,
            allow_contact_by_phone: true,
            allow_contact_by_email: true,
            lat: 1,
            lng: 1,
            price: 1950,
            user_id: 1,
            posted: true,
            due_date: new Date(),
            due_time: new Date(),
            is_done: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})


        await queryInterface.bulkInsert('proposals', [{
            id: 1,
            date: new Date(),
            time: new Date(),
            description: 'Pending Proposal',
            negotiable: true,
            status: 'pending',
            job_id: 1,
            // company_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                id: 2,
                date: new Date(),
                time: new Date(),
                description: 'Accepted Proposal',
                negotiable: true,
                status: 'accepted',
                job_id: 2,
                // company_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {})

    },

    down: async (queryInterface, Sequelize) => {
    }
};
