import { useEffect } from "react";
import ReactHighcharts from "react-highcharts";
import { useDispatch, useSelector } from "react-redux";
import fetchAcquisitions from "../../actions/acquisitions";
import chartConfig from "../../helpers/chartConfig";
import chartTheme from "../../helpers/chartTheme";

ReactHighcharts.Highcharts.setOptions(chartTheme);

function Acquisitions() {
  const dispatch = useDispatch();
  const sites = useSelector((state) => state.acquisitions.sites);
  const timestamps = useSelector((state) => state.acquisitions.timestamps);

  console.log(sites);
  console.log(timestamps)

  useEffect(() => {
    dispatch(fetchAcquisitions());
  }, []);

  return (
    <div className="acquisitions">
    <ReactHighcharts config={chartConfig(sites, timestamps)} />
    </div>
  );
}

export default Acquisitions;

/*  <ReactHighcharts config={chartConfig(sites, timestamps)} /> */