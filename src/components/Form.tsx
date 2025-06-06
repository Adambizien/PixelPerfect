import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 rounded-lg border border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé avec succès !</h3>
        <p className="text-green-700 mb-4">Ceci est une simulation - pas d'email réel envoyé.</p>
        
        <div className="bg-white p-4 rounded border">
          <h4 className="font-medium text-gray-800 mb-2">Données soumises :</h4>
          <ul className="space-y-1">
            <li><span className="font-medium">Nom :</span> {formData.name}</li>
            <li><span className="font-medium">Email :</span> {formData.email}</li>
            <li><span className="font-medium">Sujet :</span> {formData.subject}</li>
            <li><span className="font-medium">Message :</span> {formData.message}</li>
          </ul>
        </div>

        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-4 py-2 bg-purple-100 text-blue-700 rounded hover:bg-blue-200"
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Envoyer
      </button>
    </form>
  );
}