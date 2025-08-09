import 'react';
import './AdvocacyPage.css';

const AdvocacyPage = () => {
  return (
    <div className="advocacy-container">
      <div className="advocacy-header">
        <h1>Get Involved</h1>
        <p className="subtitle">Join us in making a positive impact on the world!</p>
      </div>

      <div className="advocacy-content">
        <section className="mission">
          <h2>About Our Advocacy</h2>
          <p>
            At Ahsanullah University of Science & Technology, we are dedicated to creating a lasting and positive impact on the world by tackling the most urgent social issues. From addressing educational disparities, promoting gender equality, to combating climate change, our advocacy initiatives focus on fostering sustainable solutions that empower communities and individuals globally.
          </p>
          <p>
            Our initiatives span across various domains, including education, healthcare, environmental conservation, and social justice. We believe in driving collective change by working together with communities, governments, and organizations around the world.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge gaps, empower marginalized communities, and provide equal opportunities for all. Through education, community outreach programs, and policy advocacy, we strive to eradicate systemic issues that hinder social and economic progress.
          </p>
          <p>
            Our programs focus on creating self-sustaining models that allow individuals to thrive independently and contribute to their communities. By equipping people with the skills, resources, and knowledge they need, we ensure long-term growth and empowerment.
          </p>
        </section>

        <section className="help">
          <h2>How You Can Help</h2>
          <ul>
            <li>
              <strong>Volunteer with Us</strong>: Whether you&apos;re interested in community outreach, event coordination, or helping with advocacy campaigns, we welcome volunteers from all walks of life.
            </li>
            <li>
              <strong>Donate to the Cause</strong>: Your financial support goes directly toward our programs, helping us to provide educational materials, healthcare resources, and scholarships for those in need.
            </li>
            <li>
              <strong>Spread Awareness</strong>: Raise your voice and share our mission with your family, friends, and on social media. The more people who know about our work, the greater the impact we can make.
            </li>
            <li>
              <strong>Join Advocacy Campaigns</strong>: Participate in our campaigns to advocate for change. Whether it’s signing petitions, organizing events, or speaking up for marginalized communities, your involvement makes a difference.
            </li>
            <li>
              <strong>Corporate Sponsorship</strong>: Your organization can sponsor one of our programs, fund an event, or provide resources to help us achieve our goals.
            </li>
          </ul>
        </section>

        <section className="impact">
          <h2>Our Impact</h2>
          <p>We have made significant progress in the last year:</p>
          <ul>
            <li><strong>Over 10,000 students</strong> received scholarships and educational resources in rural areas.</li>
            <li><strong>500+ families</strong> have been provided with healthcare services through our mobile health clinics.</li>
            <li><strong>3,000 trees</strong> planted in deforested regions, combating climate change and preserving natural habitats.</li>
            <li><strong>150,000+ people</strong> reached through our social justice campaigns, advocating for equal rights and justice.</li>
          </ul>
        </section>

        <section className="success">
          <h2>Success Stories</h2>
          <p><strong>&quot;With the help of this organization, I was able to pursue my education despite financial hardships.&quot;</strong></p>
          <p>- A Beneficiary</p>
          <p>
            &quot;Thanks to Ahsanullah University of Science & Technology, I now have access to clean water and proper sanitation, improving my family’s health and quality of life.&quot;
          </p>
          <p>- A Family from Rural Bangladesh</p>
          <p>
            &quot;I never thought I’d have a chance to attend university, but thanks to your scholarship program, I&apos;m now studying engineering. I will pay it forward.&quot;
          </p>
          <p>- A Scholarship Recipient from the Remote Villages of Bangladesh</p>
        </section>
      </div>
    </div>
  );
};

export default AdvocacyPage;
