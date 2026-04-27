export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="features">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Как это работает</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Ребёнок фотографирует животное — приложение мгновенно определяет его и рассказывает всё самое интересное: где живёт, чем питается, как называется на разных языках.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-neutral-700 text-base">
          <div>🔍 Распознавание по фото — за секунду</div>
          <div>📚 База из 1000+ животных со всего мира</div>
          <div>🎮 Викторины и мини-игры для закрепления</div>
          <div>👨‍👩‍👧 Безопасно для детей от 4 лет</div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Скачать приложение
        </button>
      </div>
    </div>
  );
}