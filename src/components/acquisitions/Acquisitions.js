import { useEffect } from "react";
import ReactHighcharts from "react-highcharts";
import { useDispatch, useSelector } from "react-redux";
import fetchAcquisitions from "../../actions/acquisitions";
import chartConfig from "../../helpers/chartConfig";
import chartTheme from "../../helpers/chartTheme";
import { useArrayChunk, useIterator } from "../../hooks";

ReactHighcharts.Highcharts.setOptions(chartTheme);

function Acquisitions() {
  const dispatch = useDispatch();
  const acquisitions = useSelector(state => state.acquisitions)
  const chunked =  useArrayChunk(acquisitions,10)
  const [item = [], prev, next] = useIterator(chunked)

    const timestamps = item.map(time => new Date(time.timestamp * 1000).toLocaleDateString())
    const sites =  item.map(acquisition => acquisition.sites)

console.log(item)
  //const sites =[56] 
 // const timestamps = ['2/3/2020']

  
  useEffect(() => {
    dispatch(fetchAcquisitions());
  }, []);

  return (
    <div className="acquisitions">
     <ReactHighcharts config={chartConfig(sites, timestamps)} />
     <div className="acquzitions-slide">
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
     </div>
    </div>
  );
}

export default Acquisitions;

/*  <ReactHighcharts config={chartConfig(sites, timestamps)} /> */