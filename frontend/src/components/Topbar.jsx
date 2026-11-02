import BackendStatus from './BackendStatus';

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <span className="breadcrumb">Workspace /</span>
        <strong>Dashboard</strong>
      </div>

      <div className="topbar-actions">
        <BackendStatus />

        <button className="icon-button" aria-label="Notifications">
          ♧
        </button>

        <div className="topbar-profile">
          <div className="user-avatar small">MS</div>
          <span>Manoj Selvan</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;