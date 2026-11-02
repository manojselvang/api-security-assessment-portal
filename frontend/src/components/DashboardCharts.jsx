import ReactECharts from 'echarts-for-react';

const trendOption = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom: 0,
    textStyle: { color: '#64748b' }
  },
  grid: {
    left: 35,
    right: 20,
    top: 25,
    bottom: 55
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    axisLine: { lineStyle: { color: '#e2e8f0' } }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: { color: '#edf0f4' }
    }
  },
  series: [
    {
      name: 'Assessments',
      type: 'line',
      smooth: true,
      data: [12, 18, 21, 27, 32, 36],
      symbolSize: 7,
      lineStyle: { width: 3, color: '#3986d8' },
      itemStyle: { color: '#3986d8' },
      areaStyle: { color: 'rgba(57,134,216,0.10)' }
    },
    {
      name: 'Findings',
      type: 'line',
      smooth: true,
      data: [34, 42, 38, 51, 44, 29],
      symbolSize: 7,
      lineStyle: { width: 3, color: '#e99a3d' },
      itemStyle: { color: '#e99a3d' }
    }
  ]
};

const severityOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 0,
    top: 'center',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: { color: '#64748b' }
  },
  series: [
    {
      name: 'Findings',
      type: 'pie',
      radius: ['48%', '72%'],
      center: ['35%', '50%'],
      avoidLabelOverlap: true,
      label: { show: false },
      data: [
        { value: 5, name: 'Critical', itemStyle: { color: '#dc4545' } },
        { value: 7, name: 'High', itemStyle: { color: '#ed9138' } },
        { value: 21, name: 'Medium', itemStyle: { color: '#e5b84a' } },
        { value: 24, name: 'Low', itemStyle: { color: '#398bd5' } }
      ]
    }
  ]
};

const statusOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: 90,
    right: 25,
    top: 15,
    bottom: 25
  },
  xAxis: {
    type: 'value',
    splitLine: {
      lineStyle: { color: '#edf0f4' }
    }
  },
  yAxis: {
    type: 'category',
    data: ['Pending', 'In Progress', 'Completed'],
    axisLine: { show: false },
    axisTick: { show: false }
  },
  series: [
    {
      type: 'bar',
      data: [
        { value: 6, itemStyle: { color: '#e5b84a' } },
        { value: 12, itemStyle: { color: '#3986d8' } },
        { value: 18, itemStyle: { color: '#2aab76' } }
      ],
      barWidth: 17,
      showBackground: true,
      backgroundStyle: {
        color: '#f1f4f8',
        borderRadius: 5
      },
      itemStyle: {
        borderRadius: 5
      }
    }
  ]
};


const owaspOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: (params) => {
      const item = params[0];
      return `${item.data.fullName}<br/>Findings: ${item.value}`;
    }
  },

  grid: {
    left: 85,
    right: 30,
    top: 15,
    bottom: 30
  },

  xAxis: {
    type: 'value',
    minInterval: 1,
    splitLine: {
      lineStyle: {
        color: '#edf0f4'
      }
    }
  },

  yAxis: {
    type: 'category',
    data: [
      'API10:2026',
      'API9:2026',
      'API8:2026',
      'API7:2026',
      'API6:2026',
      'API5:2026',
      'API4:2026',
      'API3:2026',
      'API2:2026',
      'API1:2026'
    ],
    axisLabel: {
      color: '#64748b',
      fontSize: 10
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },

  series: [
    {
      name: 'Findings',
      type: 'bar',
      barWidth: 14,
      data: [
        {
          value: 3,
          fullName: 'API10:2026 - Unsafe Consumption of APIs'
        },
        {
          value: 4,
          fullName: 'API9:2026 - Improper Inventory Management'
        },
        {
          value: 5,
          fullName: 'API8:2026 - Security Misconfiguration'
        },
        {
          value: 6,
          fullName: 'API7:2026 - Server Side Request Forgery'
        },
        {
          value: 7,
          fullName: 'API6:2026 - Unrestricted Access to Sensitive Business Flows'
        },
        {
          value: 8,
          fullName: 'API5:2026 - Broken Function Level Authorization'
        },
        {
          value: 10,
          fullName: 'API4:2026 - Unrestricted Resource Consumption'
        },
        {
          value: 12,
          fullName: 'API3:2026 - Broken Object Property Level Authorization'
        },
        {
          value: 14,
          fullName: 'API2:2026 - Broken Authentication'
        },
        {
          value: 18,
          fullName: 'API1:2026 - Broken Object Level Authorization'
        }
      ],
      itemStyle: {
        color: '#3986d8',
        borderRadius: [0, 5, 5, 0]
      }
    }
  ]
};


const agingOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}<br/>Open Findings: {c}'
  },

  grid: {
    left: 90,
    right: 30,
    top: 20,
    bottom: 30
  },

  xAxis: {
    type: 'value',
    minInterval: 1,
    splitLine: {
      lineStyle: {
        color: '#edf0f4'
      }
    }
  },

  yAxis: {
    type: 'category',
    data: [
      '60+ days',
      '31–60 days',
      '8–30 days',
      '0–7 days'
    ],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },

  series: [
    {
      name: 'Open Findings',
      type: 'bar',
      barWidth: 20,

      data: [
        {
          value: 10,
          itemStyle: { color: '#dc4545' }
        },
        {
          value: 15,
          itemStyle: { color: '#ed9138' }
        },
        {
          value: 20,
          itemStyle: { color: '#e5b84a' }
        },
        {
          value: 12,
          itemStyle: { color: '#398bd5' }
        }
      ],

      showBackground: true,

      backgroundStyle: {
        color: '#f1f4f8',
        borderRadius: 5
      },

      itemStyle: {
        borderRadius: 5
      }
    }
  ]
};


const coverageOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} APIs ({d}%)'
  },

  graphic: [
    {
      type: 'text',
      left: 'center',
      top: '40%',
      style: {
        text: '71.8%',
        textAlign: 'center',
        fill: '#17243a',
        fontSize: 27,
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      left: 'center',
      top: '53%',
      style: {
        text: 'Coverage',
        textAlign: 'center',
        fill: '#8290a3',
        fontSize: 12
      }
    }
  ],

  series: [
    {
      type: 'pie',
      radius: ['68%', '82%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: true,
      label: {
        show: false
      },
      data: [
        {
          value: 178,
          name: 'Assessed',
          itemStyle: {
            color: '#2aab76'
          }
        },
        {
          value: 70,
          name: 'Not Assessed',
          itemStyle: {
            color: '#e8edf3'
          }
        }
      ]
    }
  ]
};


function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <div className={`panel chart-card ${className}`}>
      <div className="panel-header">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function DashboardCharts() {
  return (
    <section className="charts-grid">

      <ChartCard
        title="API Security Posture"
        subtitle="Monthly assessments and findings"
        className="trend-chart"
      >
        <ReactECharts
          option={trendOption}
          style={{ height: '280px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
          notMerge
        />
      </ChartCard>

      <ChartCard
        title="Findings by Severity"
        subtitle="Distribution of open findings"
      >
        <ReactECharts
          option={severityOption}
          style={{ height: '280px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
          notMerge
        />
      </ChartCard>

      <ChartCard
        title="Assessment Status"
        subtitle="Current assessment distribution"
      >
        <ReactECharts
          option={statusOption}
          style={{ height: '220px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
          notMerge
        />
      </ChartCard>

      <ChartCard
        title="OWASP API Top 10"
        subtitle="Distribution of identified API security weaknesses"
      >
        <ReactECharts
          option={owaspOption}
          style={{ height: '360px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
          notMerge
        />
      </ChartCard>

            
      <ChartCard
        title="Findings Aging"
        subtitle="Age of unresolved security findings"
      >
        <ReactECharts
          option={agingOption}
          style={{ height: '300px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
          notMerge
        />
      </ChartCard>

      <ChartCard
          title="Assessment Coverage"
          subtitle="Assessed versus unassessed APIs"
        >
          <ReactECharts
            option={coverageOption}
            style={{ height: '280px', width: '100%' }}
            opts={{ renderer: 'canvas' }}
            notMerge
          />
      </ChartCard>

    </section>
  );

}

export default DashboardCharts;