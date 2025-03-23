
import React, { useState } from 'react';

interface InputAreaProps {
  selectedTool: string;
  onSubmit: (text: string, file?: File | null, youtubeUrl?: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ selectedTool, onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 rounded-lg bg-white/10"
        placeholder="Digite sua pergunta..."
        rows={4}
      />
      <button 
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 rounded-lg"
      >
        Enviar
      </button>
    </form>
  );
};

export default InputArea;
