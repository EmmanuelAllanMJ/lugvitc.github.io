import TerminalWindow from '../../components/terminal/terminalWindow';
import classes from './recruitment.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function RecruitmentStepOne({
  values,
  nextStep,
  handleChange,
  previousStep,
}) {
  const submit = (e) => {
    e.preventDefault();
    if (!values.name || !values.regno || !values.email || !values.contact) {
      alert('Please fill out all Fields');
    } else {
      nextStep();
    }
  };
  const back = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <div>
      <form className="lug-form" onSubmit={submit}>
        <div className="form-start">Step 1 of 3</div>
        <div className="form-field">
          <label> Name: </label>
          <div className={classes.input}>
            <input
              maxLength="128"
              type="text"
              onChange={handleChange('name')}
              value={values.name}
            />
          </div>
        </div>
        <div className="form-field">
          <label> Registration Number (VIT): </label>
          <div className={classes.input}>
            <input
              type="text"
              maxLength="9"
              onChange={handleChange('regno')}
              value={values.regno}
            />
          </div>
        </div>
        <div className="form-field">
          <label> Email Address (VIT): </label>
          <div className={classes.input}>
            <input
              maxLength="128"
              type="email"
              onChange={handleChange('email')}
              value={values.email}
            />
          </div>
        </div>
        <div className="form-field">
          <label> Contact Number (Whatsapp): </label>
          <div className={classes.input}>
            <input
              type="tel"
              onChange={handleChange('contact')}
              value={values.contact}
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>
        </div>
        <div className="form-field"></div>
        <div className="form-end">
          <button type="submit" onClick={back} className="form-nav-button prev">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button type="submit" className="form-nav-button next">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </div>
      </form>
    </div>
  );
}
