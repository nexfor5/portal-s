import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faChartBar,
    faDatabase,
    faFile,
    faHandshake,
    faFileImport,
    faFileExport,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
    library.add(
        faChartBar,
        faDatabase,
        faFile,
        faHandshake,
        faFileImport,
        faFileExport,
        faShoppingCart
    );
}