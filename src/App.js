import './App.css';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


function App() {
  return (
    <div className="App">
          Hello World!
          <ButtonGroup>
          <Button
          startIcon={<SaveIcon />} 
          variant="contained"
          color="primary"
          >
            Click Me!
          </Button>
          <Button
          startIcon={<SaveIcon />} 
          variant="contained"
          color="primary"
          >
            Don't Click
          </Button>
          </ButtonGroup>
    </div>
  );
}

export default App;
