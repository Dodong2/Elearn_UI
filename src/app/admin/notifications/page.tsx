"use client"
import React, { useState } from 'react';
import { FiVolume2, FiAlertTriangle, FiBell, FiInfo } from 'react-icons/fi';

export default function Notifications() {
  const [recipientGroupLeft, setRecipientGroupLeft] = useState('All Users');
  const [recipientGroupRight, setRecipientGroupRight] = useState('Normal');
  const [notificationType, setNotificationType] = useState('Announcement');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleRecipientGroupLeftChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecipientGroupLeft(event.target.value);
  };

  const handleRecipientGroupRightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecipientGroupRight(event.target.value);
  };

  const handleNotificationTypeChange = (type: string) => {
    setNotificationType(type);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    console.log({
      recipientGroupLeft,
      recipientGroupRight,
      notificationType,
      subject,
      message,
    });
    // In a real application, you would send the notification data here.
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="recipientGroupLeft" className="block text-gray-700 text-sm font-bold mb-2">
            Recipient Group
          </label>
          <select
            id="recipientGroupLeft"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipientGroupLeft}
            onChange={handleRecipientGroupLeftChange}
          >
            <option>All Users</option>
            <option>Specific Group 1</option>
            <option>Specific Group 2</option>
          </select>
        </div>
        <div>
          <label htmlFor="recipientGroupRight" className="block text-gray-700 text-sm font-bold mb-2">
            Recipient Group
          </label>
          <select
            id="recipientGroupRight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipientGroupRight}
            onChange={handleRecipientGroupRightChange}
          >
            <option>Normal</option>
            <option>Priority</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Notification Type</label>
        <div className="flex items-center space-x-2">
          <div className="border rounded-md p-2">
            <label className="inline-flex items-center text-gray-700 mr-4">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                value="Announcement"
                checked={notificationType === 'Announcement'}
                onChange={() => handleNotificationTypeChange('Announcement')}
              />
              <FiVolume2 className="ml-1 h-5 w-5" />
              <span className="ml-2">Announcement</span>
            </label>
          </div>
          <div className="border rounded-md p-2">
            <label className="inline-flex items-center text-gray-700 mr-4">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-yellow-500"
                value="Alert"
                checked={notificationType === 'Alert'}
                onChange={() => handleNotificationTypeChange('Alert')}
              />
              <FiAlertTriangle className="ml-1 h-5 w-5" />
              <span className="ml-2">Alert</span>
            </label>
          </div>
          <div className="border rounded-md p-2">
            <label className="inline-flex items-center text-gray-700 mr-4">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-green-600"
                value="Reminder"
                checked={notificationType === 'Reminder'}
                onChange={() => handleNotificationTypeChange('Reminder')}
              />
              <FiBell className="ml-1 h-5 w-5" />
              <span className="ml-2">Reminder</span>
            </label>
          </div>
          <div className="border rounded-md p-2">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-500"
                value="Update"
                checked={notificationType === 'Update'}
                onChange={() => handleNotificationTypeChange('Update')}
              />
              <FiInfo className="ml-1 h-5 w-5" />
              <span className="ml-2">Update</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter notification subject"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your message here..."
          rows={4}
          value={message}
          onChange={handleMessageChange}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}