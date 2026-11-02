import { NavLink } from 'react-router-dom';

const navigation = [
  {
    title: 'OVERVIEW',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: '◫' }
    ]
  },
  {
    title: 'ASSESSMENTS',
    items: [
      { name: 'API Inventory', path: '/api-inventory', icon: '◎' },
      { name: 'Security Reviews', path: '/security-reviews', icon: '▤' },
      { name: 'Findings', path: '/findings', icon: '⚑' },
      { name: 'Risk Acceptance', path: '/risk-acceptance', icon: '◇' }
    ]
  },
  {
    title: 'ADMINISTRATION',
    items: [
      { name: 'Users & Roles', path: '/users', icon: '♙' },
      { name: 'Audit Logs', path: '/audit-logs', icon: '◷' }
    ]
  }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">S</div>
        <div>
          <h2>SecureAPI</h2>
          <span>ASSESSMENT PORTAL</span>
        </div>
      </div>

      <div className="workspace">
        <span className="workspace-dot"></span>
        Security Workspace
      </div>

      <nav>
        {navigation.map((section) => (
          <div className="nav-section" key={section.title}>
            <p className="nav-heading">{section.title}</p>

            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="nav-icon">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">MS</div>
        <div>
          <strong>Portal Admin</strong>
          <span>Administrator</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;