import React from 'react'

const Security = () => {
  return (
    <div>
        <div className='ml-4'>
            <h1 className='text-2xl mt-2 mb-2'>Bus Booking System - Security Overview</h1>
            <hr />
            <p className='mt-4'>Welcome to the Express Travel Bus Booking System! We prioritize the security and privacy of our users.<br /> This document outlines the various security measures we have implemented to ensure a safe and secure<br /> experience for all users.</p>
            <h2 className='mt-6 text-xl'><strong>Table of Contents</strong></h2>
            <ol className='list-decimal ml-4'>
                <li>Overview of Security Practises</li>
                <li>User Authenticaton and Authorization</li>
                <li>Data Encryption </li>
                <li>Access Control</li>
                <li> Secure Payment Processing</li>
                <li> Secure Coding Practises</li>
                <li> Data Privacy</li>
                <li> Monitoring and Incident Response</li>
                <li> Regular Security Audit</li>
                <li> User Education</li>
                <li> Compliance and Certifications</li>
                <li>Contact Information for Security Concerns</li>

             
            
            </ol>
            <h2 className='text-2xl mt-6'><strong>Overview of Security Practises</strong></h2>
            <p className='mt-2'>At Express Travel, we are committed to maintaining the highest standards of security.<br /> Protecting your personal information and ensuring secure transactions is our top priority</p>
            <h2 className='text-2xl mt-6'><strong>User Authentication and Authorization</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Secure Registration and Login : </strong>We ensure industry-standard practises for user registration and login processes, ensuring secure authentication</li>
                <li><strong>Password Policies : </strong>
                We enforce strong password policies, incluing hashing and salting of passwords
                </li>
             
            </ul>
            <h2 className='text-2xl mt-6'><strong>Data Encryption </strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Data in Transit: </strong>
                All data transmitted between our servers and your browser is encrypted using SSL/TLS protocols
                </li>
                <li><strong>Data in Rest: </strong>
                Sensitive data stored in our databases is encrypted to prevent unauthorized access
                </li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Access Control</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Role-Based Access Control (RBAC):</strong>We implement RBAC to ensure users have appropriate access levels based on their roles</li>
                <li><strong>Regular Audits: </strong>We conduct regular audits of access permissiosn to maintain security </li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Secure Payment Processing</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Secure Gateways: </strong>We secure payment gateways such as MPESA for processing transactions.</li>
                <li><strong>PCI-DSS Compliance: </strong>Our payment processes comply with PCI-DSS standards to protect payment data</li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Secure Coding Practises</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Regulatory Compliance:</strong>
                We comply with data protection regulations such as GDPR AND CCPA</li>
                <li><strong>User Control:</strong>
                Users have control over their personal data, including the ability to request data access and deletion</li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Monitoring and Incident Response</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Continous Monitoring:</strong> Our systems are continously monitored for suspicious activites.</li>
                <li><strong>Incident Response Plan:</strong>We have an incident response plan in place to handle  security breaches effectively </li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Regular Security Audits</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Security Assessments:</strong>We conduct regular security assessments and penetration tests</li>
                <li><strong>Third-Party Audits:</strong>We engage third-party secuirty experts for comprehensive audits</li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>User Education</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Security Tips:</strong>We prvoide users with tips on protecting their accounts such as using strong passwords and recognizing phishing attempts </li>
                <li><strong>Resources:</strong>Additional security best practises and resources are avaialable</li>

            </ul>
            <h2 className='text-2xl mt-6'><strong>Compliance and Certifications</strong></h2>
            <ul className='list-disc ml-2'>
                <li><strong>Industry Standards: </strong>We adhere to industry standards and regulations</li>
               
            </ul>
            <h2 className='text-2xl mt-6'>Contact Information for Security Concerns</h2>
            <p className='mt-2 mb-8'>If you have any security concerns or need to report a security issue, please contact us at kanyingitiffany@gmail.com.</p>

            <hr />

            <p className='mt-8'>Thank you for trusting Express Travel with your travel needs. We are committed to providing a secure and reliable service </p>
            
        </div>
    </div>
  )
}

export default Security