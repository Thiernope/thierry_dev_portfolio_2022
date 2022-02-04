export const chartData = {
    datasets: [{
      data: [90, 80, 70, 80,70,75, 40, 50, 60, 50],
      backgroundColor: ["#00cc44", "#73e600","#00e673","#00cc66","#99ff99", "#1f601f", "#748C6B", "#3C9D17","#C3F5B0", "#54930E"]
    }],
    
    labels : ["HTML", "CSS", "TailWindCSS","flowbite", "React Js", "Material UI", "Vue", "Node Js", "PostgreSQL", "express"]
    
  };


  export const chartData2 = {
    datasets: [{
      data: [70, 60, 80, 30,99,80, 20, 40, 30, 40],
      backgroundColor: ["#cc0099", "#9900cc", "#cc00cc"," #ff66d9", "#e600e6","#cc0099", "#B244E8", "#5A4564", "#59356C", "#401C52"]
    }],
    
    labels : ["HTML", "CSS", "TailWindCSS","flowbite", "React Js", "Material UI", "Vue", "Node Js", "PostgreSQL", "express"]
    
  };



  export const lineData = {
    labels: ["HTML", "CSS", "TailWindCSS","flowbite", "React Js", "Material UI", "Vue", "Node Js", "PostgreSQL", "express"],
    datasets : [
      {
        label: "coding stack knowledge in [%]",
        data: [90, 80, 70, 80,70,75, 40, 50, 60, 50],
        borderColor: ["rgba(35, 197, 127, 0.76)"],
        backgroundColor: ["rgba(35, 197, 127, 0.76)"],
        pointBackgroundColor: ["rgba(35, 197, 127, 0.76)"],
        pointBorderColor:["rgba(35, 197, 127, 0.76)"]
      },
      {
        label: "Level of usability in [%]",
        data: [70, 60, 80, 30,99,80, 20, 40, 30, 40],
        borderColor: ["rgba(138, 44, 182, 0.76)"],
        backgroundColor: ["rgba(138, 44, 182, 0.76)"],
        pointBackgroundColor: ["rgba(138, 44, 182, 0.76)"],
        pointBorderColor:["rgba(138, 44, 182, 0.76)"]
      }

    ]
  }



  export const barChartData = {
    labels: ["HTML", "CSS", "TailWindCSS","flowbite", "React Js", "Material UI", "Vue", "Node Js", "PostgreSQL", "express"],
    datasets : [
      {
        label: "coding stack knowledge in [%]",
        data: [90, 80, 70, 80,70,75, 40, 50, 60, 50],
        borderColor: ["rgba(35, 197, 127, 0.76)"],
        backgroundColor: ["rgba(35, 197, 127, 0.76)"],
        pointBackgroundColor: ["rgba(35, 197, 127, 0.76)"],
        pointBorderColor:["rgba(35, 197, 127, 0.76)"]
      },
      {
        label: "Level of usability in [%]",
        data: [70, 60, 80, 30,99,80, 20, 40, 30, 40],
        borderColor: ["rgba(138, 44, 182, 0.76)"],
        backgroundColor: ["rgba(138, 44, 182, 0.76)"],
        pointBackgroundColor: ["rgba(138, 44, 182, 0.76)"],
        pointBorderColor:["rgba(138, 44, 182, 0.76)"]
      }

    ]
  }


  export const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        autoPadding: true
    },
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            align: "start"
        }
    },
      interaction: {
        mode: 'index',
        intersect: false
      },

      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Stacks'
          }
        },
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10
          }
        }
      }
  }

  export const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        autoPadding: true
    },
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            align: "start"
        }
    },
      interaction: {
        mode: 'index',
        intersect: false
      },

      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Stacks'
          }
        },
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10
          }
        }
      }
  }

  export const polarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        autoPadding: true
    },
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            align: "start"
        }
    },
      interaction: {
        mode: 'index',
        intersect: false
      },

  }


  