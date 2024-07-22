<h1>Bus Booking System for Kenyan High School Students</h1>
<h2>Overview</h2>
<P>This project addresses a real-life problem faced by Kenyan High School Students in reaching their schools or homes due to late booking of buses, high cost of tickets, and the complexity of multi-leg journeys.</p>
<p>The Bus Booking System provides a solution by offering a platform where students, parents, and administrators can manage bus bookings effectively.</p>

<h2>Features</h2>

<h3>User Registration:</h3>
<ul>
<li>Different roles: Students, Parents, Admin, Bus Manager.</li></ul>
<h3>Profile Management:</h3>
<ul>
<li>Users can view and update their information, manage payment methods, and log out.</li></ul>
<h3>Bus Schedule Viewing:</h3>
<ul>
<li>Display availability of buses.</li></ul>
<h3>Seat Selection:</h3>
<ul>
<li>Interactive user interface for seat selection.</li></ul>
<h3>Booking Confirmation:</h3>
<ul>
<li>Confirmation via SMS and Email API.</li></ul>
<h3>Booking History:</h3>
<ul>
<li>Users can view their past bookings.</li></ul>
<h3>Real-Time Bus Tracking:</h3>
<ul>
<li>GPS API integration for tracking buses in real-time.</li></ul>
<h3>Calendar Integration:</h3>
<ul>
<li>Google Calendar integration for booking reminders.</li></ul>
<h3>Payment Gateways:</h3>
<ul>
<li>Support for MPESA, Debit/Credit Card.</li></ul>
<h3>Transfers to Airports/Railway Stations:</h3>
<ul>
<li>Facilitate multi-leg journeys.</li></ul>
<h3>Event-Based Booking:</h3>
<ul>
<li>Booking for specific events.</li></ul>
<h3>Multilingual Support:</h3>
<ul>
<li>Support for multiple languages.</li></ul>
<h3>Admin Panel:</h3>
<ul>
<li>Dashboard for administrative tasks.</li></ul>
<h3>OTP: </h3>
<ul>
<li>One-Time Password for secure login and transactions.</li></ul>

<h2>Database Schema</h2>
<h3>Registered Users:</h3>
<ul>
<li>Stores information about users (students, parents, admins, bus managers).</li></ul>
<h3>Registered Buses:</h3>
<ul>
<li>Information about buses available for booking.</li></ul>
<h3>Registered Routes:</h3>
<ul>
<li>Details of different bus routes.</li></ul>
<h3>Registered Drivers:</h3>
<ul>
<li>Information about bus drivers.</li></ul>
<h3>Technology Stack</h3>
<ul>
<li><strong>Frontend:</strong> React</li>
<li><strong>Backend:</strong> Django</li>
<li><strong>Database:</strong> PostgreSQL/MySQL</li>

<li>APIs:</li>
<ol>
<li>SMS and Email API for confirmations</li>
<li>GPS API for real-time tracking</li>
<li>Payment gateways (MPESA, Debit/Credit Card)</li>
<li>Google Calendar API for calendar integration</li></ol>

</ul>
<h2>Installation</h2>

<h3>Clone the repository:</h3>

<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
git clone https://github.com/yourusername/bus-booking-system.git
cd bus-booking-system
</pre>
</div>
<h3>Backend Setup:</h3>
<ul>
<li><strong>Create a virtual environment:</strong></li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
python3 -m venv env
source env/bin/activate
</pre>
</div>
<li><strong>Install dependencies:</strong></li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
pip install -r requirements.txt
</pre>
</div>

<li>Run migrations:</li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
python manage.py migrate
</pre>
</div>

<li>Start the Django server:</li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
python manage.py runserver
</pre>
</div>
</ul>
<h3>Frontend Setup:</h3>
<ul>

<li>Navigate to the frontend directory:</li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
cd frontend
</pre>
</div>
<li>Install dependencies:</li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
npm install
</pre>
</div>

<li>Start the React server:</li>
<div style='border: 1px solid #000; padding: 10px; background-color:#f9f9f9'>
<pre>
bash
Copy code
npm start
</pre>
</div>
</ul>
<h2>Usage</h2>
<ol>

<li><strong>Registration:</strong> Users can sign up as students, parents, admins, or bus managers.</li>

<li><strong>Booking:</strong> After logging in, users can view available buses, select seats, and book tickets.</li>
<li><strong>Tracking:</strong> Real-time tracking of buses for better time management.</li>
<li><strong>Payment:</strong> Multiple payment options available for booking tickets.</li>
</ol>
<h2>Contribution</h2>
<ol>
<li>Fork the repository.</li>
<li>Create your feature branch (```git checkout -b feature/AmazingFeature```).</li>
<li>Commit your changes (git commit -m 'Add some AmazingFeature').</li>
<li>Push to the branch (git push origin feature/AmazingFeature).</li>

<li>Open a Pull Request.</li>
</ol>
<h2>License</h2>
<P>This project is licensed under the MIT License - see the LICENSE.md file for details.</p>

<h2>Acknowledgments</h2>
<p>Inspiration for the project from the real-life challenges faced by Kenyan High School Students.<p>
<p>Special thanks to all contributors and collaborators.</p>
<h2>Contact</h2>
<<<<<<< HEAD:BookingAgency/README.md
<p>For any inquiries or support, please contact Tiffany Kanyingi at [kanyingitiffany@example.com].</p>
=======
<p>For any inquiries or support, please contact Tiffany Kanyingi at [kanyingitiffany@gmail.com].</p>

>>>>>>> 2e26be4bacaa4a27c71405fa016c1b9d7b73b33d:README.md
