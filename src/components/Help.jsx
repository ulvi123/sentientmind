import React from 'react';

const HelpCenter = () => (
  <div className="container mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-6">Help Center</h1>
    <p className="mb-8">Welcome to the Help Center! Here you can find answers to common questions and issues.</p>
    <h2 className="text-2xl font-semibold mb-4">Common Topics</h2>
    <ul className="space-y-2">
      <li>
        <a href="/help/getting-started" className="hover:underline transition duration-300">Getting Started</a>
      </li>
      <li>
        <a href="/help/account-issues" className="hover:underline transition duration-300">Account Issues</a>
      </li>
      <li>
        <a href="/help/billing" className="hover:underline transition duration-300">Billing and Payments</a>
      </li>
      <li>
        <a href="/help/technical-support" className="hover:underline transition duration-300">Technical Support</a>
      </li>
    </ul>
  </div>
);

export default HelpCenter;