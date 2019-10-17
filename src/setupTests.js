import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import registerFaIcons from './utils/register-fa-icons';

registerFaIcons();
configure({adapter: new Adapter()});