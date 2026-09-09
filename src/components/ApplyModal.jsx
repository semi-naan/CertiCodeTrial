import { useState } from 'react';

export default function ApplyModal({ isOpen, onClose, selectedRole }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: selectedRole || 'IT Support Specialist',
    resumeUrl: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 2.5s and close modal
    }, 2500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-orange-100 text-brandOrange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-textDark">Application Received!</h3>
            <p className="text-textMuted mt-2 text-sm max-w-xs mx-auto">
              Thank you, <span className="font-semibold text-textDark">{formData.fullName || 'Applicant'}</span>. We have received your application for <span className="text-brandOrange font-medium">{formData.role}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 bg-brandOrange text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-brandOrangeDark transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brandOrange inline-block" />
              CertiCode Internship Program
            </div>
            <h3 className="mt-2 text-2xl font-serif font-bold text-textDark">
              Apply for Track
            </h3>
            <p className="text-textMuted text-xs mt-1">
              Start your remote professional journey with hands-on mentorship.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-textDark mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Keenan Maze E. Semine"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-lightBg border border-gray-200 text-sm text-textDark focus:outline-none focus:border-brandOrange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-textDark mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-lightBg border border-gray-200 text-sm text-textDark focus:outline-none focus:border-brandOrange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-textDark mb-1">
                    Target Track *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-lightBg border border-gray-200 text-sm text-textDark focus:outline-none focus:border-brandOrange"
                  >
                    <option value="IT Support Specialist">IT Support</option>
                    <option value="UI/UX Designer">UI/UX Design</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Human Resources Assistant">Human Resources</option>
                    <option value="Talent Acquisition Associate">Talent Acquisition</option>
                    <option value="Digital Marketing Specialist">Digital Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-textDark mb-1">
                  Portfolio / LinkedIn / Resume Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.resumeUrl}
                  onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-lightBg border border-gray-200 text-sm text-textDark focus:outline-none focus:border-brandOrange"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-textDark mb-1">
                  Why do you want to join CertiCode?
                </label>
                <textarea
                  rows="2"
                  placeholder="Briefly state your academic background & learning goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-lightBg border border-gray-200 text-sm text-textDark focus:outline-none focus:border-brandOrange resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-medium bg-brandOrange text-white hover:bg-brandOrangeDark shadow-md shadow-brandOrange/20 transition-all"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
