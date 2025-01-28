import { Dashboard } from './components/Dashboard/Dashboard';
import { MockDataProvider } from './services/DataProvider';
import { WidgetFactory } from './services/WidgetFactory';

const dataProvider = new MockDataProvider();
const widgetFactory = new WidgetFactory(dataProvider);

function App() {
  return (
    <div className="App">
      <Dashboard widgetFactory={widgetFactory} />
    </div>
  );
}

export default App;
