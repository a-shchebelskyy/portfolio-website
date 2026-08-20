import React, { useState } from 'react';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import whiteboard from '../../public/icons/whiteboard.png';
import application from '../../public/icons/application.png';
import appstore from '../../public/icons/app-store.png';
import chatgpt from '../../public/icons/chatgpt.png';
import more from '../../public/icons/more.png';

const serviceOptions = [
  {
    id: "design",
    name: "Product Design",
    icon: whiteboard,
  },
  {
    id: "webapp",
    name: "Web Application",
    icon: application,
  },
  {
    id: "mobile",
    name: "Mobile Application",
    icon: appstore,
  },
  {
    id: "ai",
    name: "AI-Powered Application",
    icon: chatgpt,
  },
  {
    id: "other",
    name: "Other",
    icon: more,
  },
];

const budgetOptions = [
  {
    id: 0,
    range: "<$1000"
  },
  {
    id: 1,
    range: "$1000-$5000"
  },
  {
    id: 2,
    range: "$5000-$10,000"
  },
  {
    id: 3,
    range: ">$10,000"
  },
];

const timelineOptions = [
  {
    id: 0,
    range: "<1 month"
  },
  {
    id: 1,
    range: "1-6 months"
  },
  {
    id: 2,
    range: "6-12 months"
  },
  {
    id: 3,
    range: ">12 months"
  },
];

const Contact = () => {
  const { t } = useTranslation();
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ selectedServices, setSelectedServices ] = useState([]);
  const [ desc, setDesc ] = useState("");
  const [ budget, setBudget ] = useState(0);
  const [ timeline, setTimeline ] = useState(0);

  // const handleServicePress = (e) => {
  //   let newServiceList = selectedServices;
  //   const selectedService = e.currentTarget.id;
  //   if (selectedServices.includes(selectedService)) {
  //     newServiceList.filter(item => item !== selectedService)
  //   } else {
  //     newServiceList.push(selectedService);
  //   }
  //   setSelectedServices(newServiceList);
  // };

  const handleToggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service) // Remove if already selected
        : [...prev, service] // Add if not selected
    );
  };

  const handleChangeBudget = (e) => {
    const selectedBudget = e.target.value;
    setBudget(selectedBudget);
  };

  const handleChangeTimeline = (e) => {
    const selectedTimeline = e.target.value;
    setTimeline(selectedTimeline);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("services", selectedServices);
    formData.append("description", desc);
    formData.append("budget", budgetOptions[budget].range);
    formData.append("timeline", timelineOptions[timeline].range);
    formData.append("access_key", "58dafa63-3afb-44d9-b934-d57747ef845a");

    //console.log(Object.fromEntries(formData));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data.success ? "Success!" : "Error");
  };

  return (
    <section className="main" id="contact">
      <h2 className='subtitle'>
        {t("contact")}
      </h2>
      <div className="input-row">
        <div className="input-container">
          <p className="input-label">Name</p>
          <input 
            id="name"
            type="text"
            className="input-field"
            placeholder="Your name"
            value={name}     // 3. Bind input value to state
            onChange={(e) => setName(e.target.value)} // 4. Attach change handler
          />
        </div>
        <div className="input-container">
          <p className="input-label">E-mail</p>
          <input 
            id="email"
            type="text"
            className="input-field"
            placeholder="you@example.com"
            value={email}     // 3. Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // 4. Attach change handler
          />
        </div>
      </div>
      <div className="services-container">
        <p className="input-label">Choose a Service</p>
        <div className="services-row">
          {serviceOptions.map((service, key) => (
            <button 
              id={service.id} 
              key={key}
              className={`service-card ${selectedServices.includes(service.id) ? 'selected' : 'unselected'}`} 
              onClick={() => handleToggleService(service.id)}
            >
              <p className="service-label">{service.name}</p>
              <img src={service.icon} width="94" height="94" />
            </button>
            ))}
        </div>
      </div>
      <div className="input-row">
        <div className="input-container wide">
          <p className="input-label">What are you building?</p>
          <textarea
            id="description"
            className="input-area"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={5} // Sets the initial visible height in text rows
            placeholder="Description of our project, product, or problem..."
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-container">
          <p className="input-label">Budget</p>
          <select
            id="budget"
            value={budget}
            onChange={handleChangeBudget}
            className="input-field"
          >
            {budgetOptions.map(({ id, range }, key) => (
              <option value={id} key={key}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <p className="input-label">Timeline</p>
          <select
            id="timeline"
            value={timeline}
            onChange={handleChangeTimeline}
            className="input-field"
          >
            {timelineOptions.map(({ id, range }, key) => (
              <option value={id} key={key}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button 
        className="button-main" 
        onClick={() => handleSubmit(event)}
      >
        SUBMIT
      </button>
    </section>
  )
}
//Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
export default Contact;