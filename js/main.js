const ctx = document.getElementById("myChart").getContext("2d");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let incomeData = [];
let expensesData = [];

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: expensesData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

document.getElementById("chart-tab").addEventListener("click", function () {
  incomeData.length = 0;
  expensesData.length = 0;

  for (let month of months) {
    incomeData.push(document.getElementById(`income-${month}`).value);
    expensesData.push(document.getElementById(`expenses-${month}`).value);
  }

  myChart.update();
});
