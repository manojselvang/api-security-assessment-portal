
import DashboardCharts from '../../components/DashboardCharts';

const metrics = [
  {
    title: 'Total APIs',
    value: '248',
    change: '+12 this month',
    icon: '◎',
    color: 'blue'
  },
  {
    title: 'Active Reviews',
    value: '36',
    change: '8 awaiting assignment',
    icon: '▤',
    color: 'purple'
  },
  {
    title: 'Open Findings',
    value: '57',
    change: '12 critical / high',
    icon: '⚑',
    color: 'orange'
  },
  {
    title: 'Pending Approvals',
    value: '14',
    change: '5 overdue',
    icon: '◇',
    color: 'green'
  }
];

const reviews = [
  {
    api: 'Payment Gateway API',
    owner: 'Payments Team',
    status: 'In Progress',
    severity: 'High',
    date: '01 Nov 2026'
  },
  {
    api: 'Customer Profile API',
    owner: 'Digital Banking',
    status: 'Pending',
    severity: 'Medium',
    date: '03 Nov 2026'
  },
  {
    api: 'Authentication API',
    owner: 'Identity Team',
    status: 'Completed',
    severity: 'Low',
    date: '30 Oct 2026'
  },
  {
    api: 'Claims Processing API',
    owner: 'Insurance Operations',
    status: 'In Progress',
    severity: 'Critical',
    date: '29 Oct 2026'
  }
];

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Security Overview</h1>
          <p>
            Monitor your API security posture and assessment activities.
          </p>

        </div>

        <button className="primary-button">
          + New Assessment
        </button>
      </div>

      {/* KPI Cards */}
      <section className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric-card" key={metric.title}>
            <div className="metric-top">
              <span>{metric.title}</span>
              <div className={`metric-icon ${metric.color}`}>
                {metric.icon}
              </div>
            </div>

            <h2>{metric.value}</h2>
            <p>{metric.change}</p>
          </div>
        ))}
      </section>

      {/* ECharts Analytics */}
      <DashboardCharts />

      {/* Recent Security Reviews */}
      <section className="dashboard-grid">
        <div className="panel">

          <div className="panel-header">
            <div>
              <h3>Recent Security Reviews</h3>
              <p>Latest assessment activities</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>API NAME</th>
                  <th>OWNER</th>
                  <th>STATUS</th>
                  <th>SEVERITY</th>
                  <th>DUE DATE</th>
                </tr>
              </thead>

              <tbody>
                {reviews.map((review) => (
                  <tr key={review.api}>
                    <td className="api-name">{review.api}</td>
                    <td>{review.owner}</td>

                    <td>
                      <span
                        className={`status ${review.status
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {review.status}
                      </span>
                    </td>

                    <td>
                      <span className={`severity ${review.severity.toLowerCase()}`}>
                        {review.severity}
                      </span>
                    </td>

                    <td>{review.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Dashboard;
