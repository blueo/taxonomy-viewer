import Injector from 'lib/Injector';
import TaxonomyViewer from '../components/TaxonomyViewer';

export default () => {
  Injector.component.registerMany({
    TaxonomyViewer,
  });
};
