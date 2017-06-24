import { createSelector } from 'reselect';
import { mapObject } from './../services/utils';

export const isFetching = state => state.center.isFetching;
export const didInvalidate = state => state.center.didInvalidate;
export const center = (state, centerId) => state.center.centers[centerId];
export const centersHashTable = state => state.center.centers;

export const centersByCountryByCluster = createSelector(centersHashTable, centersHashTable => mapObject(centersHashTable, (key, value) => value).reduce((previous, current) => {
    const countryIndex = previous.findIndex(item => item.country === current.country);

    if (countryIndex !== -1) {
        const clusterIndex = previous[countryIndex].clusters.findIndex(item => item.cluster === current.clusterName);

        if (clusterIndex !== -1) {
            previous[countryIndex].clusters[clusterIndex].centers.push(current);
        } else {
            previous[countryIndex].clusters.push({
                cluster: current.clusterName,
                centers: [current],
            });
        }
    } else {
        previous.push({
            country: current.country,
            clusters: [{
                cluster: current.clusterName,
                centers: [current],
            }],
        });
    }

    return previous;
}, []));
