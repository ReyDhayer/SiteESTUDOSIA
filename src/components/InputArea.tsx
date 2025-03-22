
import React, { useState } from "react";
import { Paperclip, Send, Mic, Trash, Youtube } from "lucide-react";
import { useFadeIn } from "@/lib/animations";

interface InputAreaProps {
  selectedTool: string | null;
  onSubmit: (text: string, fileData?: File | null, youtubeUrl?: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ selectedTool, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [showYoutubeInput, setShowYoutubeInput] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const fadeIn = useFadeIn(300);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!inputText && !file && !youtubeUrl) || !selectedTool) return;
    
    onSubmit(inputText, file, youtubeUrl);
    setInputText("");
    setFile(null);
    setYoutubeUrl("");
    setShowYoutubeInput(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const toggleYoutubeInput = () => {
    setShowYoutubeInput(!showYoutubeInput);
  };

  if (!selectedTool) return null;

  return (
    <div className={`w-full mt-6 ${fadeIn}`}>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
        {file && (
          <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg border border-blue-100 shadow-sm">
            <span className="flex-1 truncate text-gray-700">{file.name}</span>
            <button 
              type="button"
              onClick={handleRemoveFile}
              className="ml-2 text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
            >
              <Trash size={18} />
            </button>
          </div>
        )}
        
        {showYoutubeInput && (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cole o link do YouTube aqui"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
          </div>
        )}
        
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={selectedTool === "youtube" ? "Digite um comentário ou deixe em branco para apenas resumir" : "Digite sua mensagem..."}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300 pr-32"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
              <label className="cursor-pointer text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                <Paperclip size={20} />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.docx,.txt"
                />
              </label>
              <button
                type="button"
                className={`text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 ${isRecording ? 'text-red-500 animate-pulse' : ''}`}
                onClick={() => setIsRecording(!isRecording)}
              >
                <Mic size={20} />
              </button>
              {selectedTool === "youtube" && (
                <button
                  type="button"
                  className={`text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 ${youtubeUrl ? "text-blue-500" : ""}`}
                  onClick={toggleYoutubeInput}
                >
                  <Youtube size={20} />
                </button>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary h-[50px] w-[50px] flex items-center justify-center p-0 rounded-full"
            disabled={!inputText && !file && !youtubeUrl}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputArea;
