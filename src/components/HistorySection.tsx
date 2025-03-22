
import React from "react";
import { HistoryItem } from "@/lib/types";
import { useFadeIn } from "@/lib/animations";
import { Clock, Trash } from "lucide-react";

interface HistorySectionProps {
  history: HistoryItem[];
  onSelectHistoryItem: (id: string) => void;
  onClearHistory: () => void;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  history,
  onSelectHistoryItem,
  onClearHistory,
}) => {
  const fadeIn = useFadeIn(400);

  if (history.length === 0) {
    return (
      <div className={`mt-8 ${fadeIn}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Histórico</h3>
        </div>
        <div className="glass-panel rounded-xl p-4 text-center text-muted-foreground">
          <p>Seu histórico aparecerá aqui</p>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    }).format(date);
  };

  return (
    <div className={`mt-8 ${fadeIn}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Histórico</h3>
        <button
          onClick={onClearHistory}
          className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center"
        >
          <Trash size={14} className="mr-1" />
          Limpar
        </button>
      </div>
      <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
        {history.map((item, index) => (
          <div
            key={item.id}
            className="history-item p-3 rounded-lg bg-white/50 hover:bg-white/80 cursor-pointer transition-all duration-300 border border-gray-100/50 shadow-sm"
            onClick={() => onSelectHistoryItem(item.id)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <p className="font-medium text-sm line-clamp-2">{item.query}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-2">
                  <Clock size={12} className="mr-1" />
                  {formatDate(item.timestamp)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
