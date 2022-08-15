function groupBy(executeData, groupByFns) {
    if (!groupByFns.length) {
        return executeData;
    }
    const groupByFn = groupByFns.shift();
    const groupTypes = {};
    const grouped = executeData.reduce((arr, item) => {
        const key = groupByFn(item);
        groupTypes[key] = typeof key;
        arr[key] = arr[key] || [];
        arr[key].push(item);
        return arr;
    }, {});
    return Object.entries(grouped).map(([groupName, values]) => {
        if (groupTypes[groupName] === 'number') {
            groupName = Number(groupName);
        }
        return [groupName, groupBy(values, groupByFns.slice())];
    });
}


class Query {
    constructor() {
        this.elems = [];
        this.selectFuntion = undefined;
        this.orderByFunction = undefined;
        this.groupByFunctions = [];
        this.havingFunctions = [];
        this.whereFunctions = [];
        this.chainWhereFunctions = [];
        this.called = {};
    }

    select(fn) {
        if (this.called.SELECT) {
            throw new Error("Duplicate SELECT");
        }

        this.selectFuntion = fn;
        this.called.SELECT = true;
        return this;
    }

    from(elems, joinElems) {
        if (this.called.FROM) {
            throw new Error("Duplicate FROM");
        }

        this.elems = elems;
        if (joinElems) {
            const joined = [];
            for (const elem of elems) {
                for (const joinElem of joinElems) {
                    joined.push([elem, joinElem]);
                }
            }
            this.elems = joined;
        }

        this.called.FROM = true;
        return this;
    }

    where(...fns) {
        if (!this.whereFunctions.length) {
            this.whereFunctions = fns;
        } else if (!this.chainWhereFunctions.length) {
            this.chainWhereFunctions = fns;
        } else {
            this.chainWhereFunctions = this.chainWhereFunctions.concat(fns);
        }
        return this;
    }

    orderBy(fn) {
        if (this.called.ORDERBY) {
            throw new Error("Duplicate ORDERBY");
        }

        this.orderByFunction = fn;
        this.called.ORDERBY = true;
        return this;
    }

    groupBy(...fns) {
        if (this.called.GROUPBY) {
            throw new Error("Duplicate GROUPBY");
        }

        this.groupByFunctions = fns;
        this.called.GROUPBY = true;
        return this;
    }

    having(fn) {
        this.havingFunctions.push(fn);
        return this;
    }

    execute() {
        let result = this.elems.slice();
        
        if (this.whereFunctions && this.whereFunctions.length) {
            result = result.filter(elem => {
                return this.whereFunctions.some(func => func(elem));
            });
        }

        if (this.chainWhereFunctions && this.chainWhereFunctions.length) {
            result = result.filter(elem => {
                return this.chainWhereFunctions.every(func => func(elem));
            });
        }

        if (this.groupByFunctions && this.groupByFunctions.length) {
            result = groupBy(result, this.groupByFunctions.slice());
        }

        if (this.havingFunctions && this.havingFunctions.length) {
            result = result.filter(elem => {
                return this.havingFunctions.every(func => func(elem));
            });
        }

        if (this.selectFuntion) {
            result = result.map(this.selectFuntion);
        }

        if (this.orderByFunction) {
            result = result.sort(this.orderByFunction);
        }

        return result;
    }
}

function query() {
    return new Query();
}