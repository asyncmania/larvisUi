const config =  (item) =>  {
  const timestamps = item.map(time => new Date(time.timestamp * 1000).toLocaleDateString())
  const sites =  item.map(acquisition => acquisition.sites)
  return {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Aquisitions",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: timestamps,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Sites",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Timestaps",
        data: sites,
      },
    ],
  }
}

  


export default config;