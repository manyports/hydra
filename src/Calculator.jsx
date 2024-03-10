function Calculator({
    area,
    setArea,
    soilType,
    setSoilType,
    fertilizerAmount,
    setFertilizerAmount,
    lightExposure,
    setLightExposure,
    calculate,
  }) {
    const handleLightExposureChange = (e) => {
        let value = parseInt(e.target.value);
        value = isNaN(value) ? 0 : Math.max(0, Math.min(10, value)); // Ограничиваем значение от 0 до 10
        setLightExposure(value);
      };

    return(
        <div id="calculator">
        <h1>Расчёты потребления воды и урожая.</h1>
        <p>Мы стремимся к экологической ответственности и заботимся о будущем нашей планеты. <br></br> Поэтому мы разработали уникальный калькулятор, который поможет вам оптимизировать использование воды при поливе и повысить урожайность вашего сада или огорода. <br></br> Наш инструмент позволит вам принимать осознанные решения в уходе за растениями, снижая негативное воздействие на окружающую среду. </p>
      <label>
        Площадь (в м²):
        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
      </label>
      <label>
        Тип почвы:
        <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
          <option value="">Выберите тип почвы</option>
          <option value="глинистая">Глинистая</option>
          <option value="песчаная">Песчаная</option>
          <option value="другая">Другая</option>
        </select>
      </label>
      <label>
        Количество удобрений (кг):
        <input type="number" value={fertilizerAmount} onChange={(e) => setFertilizerAmount(e.target.value)} />
      </label>
      <label>
      Воздействие света(от 0 до 10):
        <input type="number" value={lightExposure} onChange={handleLightExposureChange} />
      </label>
      <button onClick={calculate}>Рассчитать</button>
        </div>
    )
}

export default Calculator