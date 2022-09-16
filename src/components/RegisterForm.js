import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();

      await axios.post('http://localhost:8007/auth/register', input);
      alert('register success.please login to continue.');
      navigate('/login');
    } catch (err) {
      alert('something wrong');
      console.log(err);
    }
  };

  return (
    <div
      className="mx-auto p-4 border border-1 bg-white mt-5 rounded-3 shadow"
      style={{ maxWidth: 600 }}
    >
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={input.username}
            onChange={e => setInput({ ...input, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={input.email}
            onChange={e => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            value={input.password}
            onChange={e => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            value={input.confirmPassword}
            onChange={e =>
              setInput({ ...input, confirmPassword: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
