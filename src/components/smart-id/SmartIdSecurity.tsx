export default function SmartIdSecurity() {
  return (
    <>
      <section className="section smart-security" id="security" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container security-grid">
        <div class="security-copy reveal"><div class="eyebrow light"><span></span> Enterprise-Grade Security</div><h2>Secure employee access and protected business data.</h2><p>Smart ID provides a secure, scalable platform with role-based permissions and reliable activity records.</p><div class="security-list"><span>Role-Based Access Control</span><span>Secure Authentication</span><span>Data Encryption</span><span>Audit Logs</span><span>Activity Tracking</span><span>Mobile Security</span><span>Secure Cloud Infrastructure</span><span>Permission-Based Access</span></div></div>
        <div class="fingerprint-card reveal delay-1"><span>Employee Management</span><h3>At Your Fingertips</h3><ul><li>Check-in and check-out</li><li>Apply leave</li><li>Track attendance</li><li>Submit expenses</li><li>Receive notifications</li><li>View announcements</li><li>Complete surveys</li><li>Manage profile information</li></ul></div>
      </div>` }} />
    </>
  );
}
