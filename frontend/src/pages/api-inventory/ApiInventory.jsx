import { useEffect, useState } from 'react';
import {
  getAllApis,
  createApi
} from '../../services/apiInventoryService';

const initialForm = {
  name: '',
  description: '',
  baseUrl: '',
  apiType: 'REST',
  owner: '',
  environment: 'DEVELOPMENT',
  authenticationType: 'NONE',
  dataClassification: 'INTERNAL',
  criticality: 'MEDIUM'
};

function ApiInventory() {
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchApis = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getAllApis();
      setApis(data);
    } catch (err) {
      console.error('Failed to fetch APIs:', err);
      setError('Unable to load API inventory. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApis();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setFormError('');
      setSuccessMessage('');

      await createApi(formData);

      setShowModal(false);
      setFormData(initialForm);
      setSuccessMessage('API registered successfully.');

      await fetchApis();
    } catch (err) {
      console.error('API registration failed:', err);

      setFormError(
        err.response?.data?.message ||
        'Failed to register API. Please check your input and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    if (submitting) return;

    setShowModal(false);
    setFormError('');
    setFormData(initialForm);
  };

  return (
    <div className="dashboard">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>API Inventory</h1>
          <p>Manage and monitor registered APIs across your environment.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setFormError('');
            setSuccessMessage('');
            setShowModal(true);
          }}
        >
          + Register API
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      {/* API Metrics */}
      <section className="metrics-grid">
        <div className="metric-card">
          <div className="metric-top">
            <span>Total Registered APIs</span>
            <div className="metric-icon blue">◎</div>
          </div>

          <h2>{apis.length}</h2>
          <p>Fetched from backend</p>
        </div>
      </section>

      {/* API Inventory Table */}
      <section className="dashboard-grid">
        <div className="panel">

          <div className="panel-header">
            <div>
              <h3>Registered APIs</h3>
              <p>API inventory records</p>
            </div>
          </div>

          {loading && <p>Loading APIs...</p>}

          {error && <p className="form-error">{error}</p>}

          {!loading && !error && apis.length === 0 && (
            <p>No APIs registered yet.</p>
          )}

          {!loading && !error && apis.length > 0 && (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>API NAME</th>
                    <th>TYPE</th>
                    <th>OWNER</th>
                    <th>ENVIRONMENT</th>
                    <th>CRITICALITY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {apis.map((api) => (
                    <tr key={api.id}>
                      <td className="api-name">{api.name}</td>
                      <td>{api.apiType}</td>
                      <td>{api.owner || '-'}</td>
                      <td>{api.environment}</td>

                      <td>
                        <span
                          className={`severity ${(api.criticality || '').toLowerCase()}`}
                        >
                          {api.criticality}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status ${(api.status || '').toLowerCase()}`}
                        >
                          {api.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* Register API Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div
            className="modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-api-title"
          >

            <div className="modal-header">
              <div>
                <h2 id="register-api-title">Register New API</h2>
                <p>Add an API to your security inventory.</p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={handleCloseModal}
                disabled={submitting}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="name">API Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={150}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Payment Gateway API"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="baseUrl">Base URL *</label>
                  <input
                    id="baseUrl"
                    name="baseUrl"
                    type="url"
                    maxLength={500}
                    value={formData.baseUrl}
                    onChange={handleInputChange}
                    placeholder="https://api.example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apiType">API Type *</label>
                  <select
                    id="apiType"
                    name="apiType"
                    value={formData.apiType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="REST">REST</option>
                    <option value="SOAP">SOAP</option>
                    <option value="GRAPHQL">GraphQL</option>
                    <option value="GRPC">gRPC</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="owner">Owner</label>
                  <input
                    id="owner"
                    name="owner"
                    type="text"
                    value={formData.owner}
                    onChange={handleInputChange}
                    placeholder="e.g. Payments Team"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="environment">Environment *</label>
                  <select
                    id="environment"
                    name="environment"
                    value={formData.environment}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="DEVELOPMENT">Development</option>
                    <option value="SIT">SIT</option>
                    <option value="UAT">UAT</option>
                    <option value="PRODUCTION">Production</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="authenticationType">
                    Authentication Type
                  </label>
                  <select
                    id="authenticationType"
                    name="authenticationType"
                    value={formData.authenticationType}
                    onChange={handleInputChange}
                  >
                    <option value="NONE">None</option>
                    <option value="API_KEY">API Key</option>
                    <option value="BASIC">Basic Authentication</option>
                    <option value="OAUTH2">OAuth 2.0</option>
                    <option value="JWT">JWT</option>
                    <option value="MUTUAL_TLS">Mutual TLS</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dataClassification">
                    Data Classification
                  </label>
                  <select
                    id="dataClassification"
                    name="dataClassification"
                    value={formData.dataClassification}
                    onChange={handleInputChange}
                  >
                    <option value="PUBLIC">Public</option>
                    <option value="INTERNAL">Internal</option>
                    <option value="CONFIDENTIAL">Confidential</option>
                    <option value="RESTRICTED">Restricted</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="criticality">Criticality *</label>
                  <select
                    id="criticality"
                    name="criticality"
                    value={formData.criticality}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                    <option value="CRITICAL">Critical</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the purpose of this API..."
                  />
                </div>

              </div>

              {formError && (
                <p className="form-error">{formError}</p>
              )}

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={handleCloseModal}
                  disabled={submitting}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                  disabled={submitting}
                >
                  {submitting ? 'Registering...' : 'Register API'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default ApiInventory;