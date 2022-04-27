import * as _ from 'lodash';

export default class LodashUtils {
    static isEmpty = array => _.isEmpty(array)

    static isset = (item) => !_.isUndefined(item)

    static isNull = item => _.isNull(item);

}


