// src/customDataProvider.ts
import { DataProvider } from 'react-admin';
import incomeProvider from './incomeProvider';
import expensesProvider from './expensesProvider';
import masterDataProvider from './masterDataProvider';
import bookingTextProvider from './bookingTextProvider';

const customDataProvider: DataProvider = {
    getList: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.getList(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.getList(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.getList(resource, params);
        }

        if (resource === 'bookingtext') {
            return bookingTextProvider.getList(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    // Implement other methods in a similar fashion
    getOne: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.getOne(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.getOne(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.getOne(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.getOne(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },

    getMany: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.getMany(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.getMany(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.getMany(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.getMany(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },

    getManyReference: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.getManyReference(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.getManyReference(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.getManyReference(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.getManyReference(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    create: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.create(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.create(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.create(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.create(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    update: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.update(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.update(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.update(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.update(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    updateMany: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.updateMany(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.updateMany(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.updateMany(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.updateMany(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    delete: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.delete(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.delete(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.delete(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.delete(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
    deleteMany: (resource, params) => {
        if (resource === 'income') {
            return incomeProvider.deleteMany(resource, params);
        }
        if (resource === 'expense') {
            return expensesProvider.deleteMany(resource, params);
        }
        if (resource === 'masterdata') {
            return masterDataProvider.deleteMany(resource, params);
        }
        if (resource === 'bookingtext') {
            return bookingTextProvider.deleteMany(resource, params);
        }

        throw new Error(`Unknown resource: ${resource}`);
    },
};

export default customDataProvider;
