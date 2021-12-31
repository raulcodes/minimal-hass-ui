import { h } from 'preact';
import Dashboard from '../../components/dashboard';

import mockEntities from '../../utils/mocks/entities';

const MockDashboard = () => {
	return(<Dashboard entities={JSON.parse(mockEntities)} connection={{}} />);
};

export default MockDashboard;
