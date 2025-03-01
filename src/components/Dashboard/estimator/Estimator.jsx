
"use client"
import { useEffect,useState } from "react";
export default function Estimator() {
  // Array of background images for slider
  const images = [
    // "https://content.jdmagicbox.com/quickquotes/images_main/building-integrated-solar-photovoltaic-bipv-375841257-wm5vg.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    // "https://leelineenergy.com/wp-content/uploads/2023/11/5-82.webp",
    // "https://www.gainsolarbipv.com/data/watermark/20240418/6620e09721dee.jpg",
    "https://heliene.com/wp-content/uploads/image2-3.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background slider effect (changes image every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Step control for progressive reveal (1 to 9)
  const [step, setStep] = useState(1);

  // State for input fields (initially empty)
  const [costPerSqFt, setCostPerSqFt] = useState("");
  const [inputOption, setInputOption] = useState("amount"); // "amount" or "area"
  const [inputValue, setInputValue] = useState("");
  const [subsidy, setSubsidy] = useState("");

  // Convert inputs to numbers
  const costPerSqFtNum = parseFloat(costPerSqFt) || 0;
  const inputValueNum = parseFloat(inputValue) || 0;
  const subsidyNum = parseFloat(subsidy) || 0;

  // Calculate computed area and total wall construction cost based on user's selection:
  let computedArea = 0;
  let totalConstructingWall = 0;
  if (costPerSqFtNum > 0) {
    if (inputOption === "amount") {
      totalConstructingWall = inputValueNum;
      computedArea = inputValueNum / costPerSqFtNum;
    } else {
      computedArea = inputValueNum;
      totalConstructingWall = costPerSqFtNum * inputValueNum;
    }
  }

  // Calculate other costs based on computed area:
  const solarPanelCost = computedArea * 680;
  const nonRemovableBipvCost = computedArea * 978;
  const removableBipvCost = computedArea * 1237;

  // Adjust the BIPV costs based on the government subsidy:
  const adjustedNonRemovable = nonRemovableBipvCost * (1 - subsidyNum / 100);
  const adjustedRemovable = removableBipvCost * (1 - subsidyNum / 100);

  // Combined cost and profit calculations:
  const combinedCost = totalConstructingWall + solarPanelCost;
  const profitNonRemovable = combinedCost - adjustedNonRemovable;
  const profitRemovable = combinedCost - adjustedRemovable;

  // Progressive reveal effects:
  useEffect(() => {
    if (step === 1 && costPerSqFt !== "") {
      const timer = setTimeout(() => setStep(2), 300);
      return () => clearTimeout(timer);
    }
  }, [costPerSqFt, step]);

  useEffect(() => {
    if (step === 2) {
      // Radio option is default so move to next step
      const timer = setTimeout(() => setStep(3), 300);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    if (step === 3 && inputValue !== "") {
      const timer = setTimeout(() => setStep(4), 300);
      return () => clearTimeout(timer);
    }
  }, [inputValue, step]);

  useEffect(() => {
    if (step === 4 && computedArea > 0) {
      const timer = setTimeout(() => setStep(5), 300);
      return () => clearTimeout(timer);
    }
  }, [computedArea, step]);

  useEffect(() => {
    if (step === 5 && computedArea > 0) {
      const timer = setTimeout(() => setStep(6), 300);
      return () => clearTimeout(timer);
    }
  }, [computedArea, step]);

  useEffect(() => {
    if (step === 6) {
      const timer = setTimeout(() => setStep(7), 300);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    if (step === 7 && subsidy !== "") {
      const timer = setTimeout(() => setStep(8), 300);
      return () => clearTimeout(timer);
    }
  }, [subsidy, step]);

  useEffect(() => {
    if (step === 8 && subsidy !== "") {
      const timer = setTimeout(() => setStep(9), 300);
      return () => clearTimeout(timer);
    }
  }, [subsidy, step]);

  return (
    <div className="relative min-h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        {/* Semi-transparent overlay for content visibility */}
        <div className="absolute inset-0 bg-white opacity-80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4">
        <header className="bg-[#1D2D35] text-white p-4 text-center text-3xl font-bold mb-8">
          Costing Page
        </header>
        <main className="max-w-4xl mx-auto">
          {/* Step 1: Cost per Square Foot Input */}
          {step >= 1 && (
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-4">
                Cost of Wall per Square Foot in Your Area
              </h1>
              <input
                type="number"
                value={costPerSqFt}
                onChange={(e) => setCostPerSqFt(e.target.value)}
                placeholder="Enter cost per sq. ft"
                className="border p-2 rounded-md w-full"
              />
            </div>
          )}

          {/* Step 2: Input Option Selection */}
          {step >= 2 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Select Input Type</h2>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="amount"
                    checked={inputOption === "amount"}
                    onChange={() => setInputOption("amount")}
                    className="mr-2"
                  />
                  Total Amount for Constructing Wall
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="area"
                    checked={inputOption === "area"}
                    onChange={() => setInputOption("area")}
                    className="mr-2"
                  />
                  Total Area of Wall (sq ft)
                </label>
              </div>
            </div>
          )}

          {/* Step 3: Total Amount or Area Input */}
          {step >= 3 && (
            <div className="mb-4">
              <label className="block mb-2">
                {inputOption === "amount"
                  ? "Enter Total Amount for Constructing Wall"
                  : "Enter Total Area of Wall (sq ft)"}
              </label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  inputOption === "amount" ? "Total Amount" : "Area in sq ft"
                }
                className="border p-2 rounded-md w-full"
              />
            </div>
          )}

          {/* Step 4: Display Computed Wall Data */}
          {step >= 4 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Wall Construction Details:
              </h2>
              <p>Computed Area of Wall: {computedArea.toFixed(2)} sq ft</p>
              <p>
                Total Cost of Constructing Wall: ₹
                {totalConstructingWall.toFixed(2)}
              </p>
            </div>
          )}

          {/* Step 5: Solar Panel Cost */}
          {step >= 5 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Solar Panel Cost</h2>
              <p>Total Cost of Solar Panel: ₹{solarPanelCost.toFixed(2)}</p>
            </div>
          )}

          {/* Step 6: BIPV Panel Costs (Before Subsidy) */}
          {step >= 6 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                BIPV Panel Costs (Before Subsidy)
              </h2>
              <p>
                Non-Removable BIPV Panel: ₹{nonRemovableBipvCost.toFixed(2)}
              </p>
              <p>Removable BIPV Panel: ₹{removableBipvCost.toFixed(2)}</p>
            </div>
          )}

          {/* Step 7: Subsidy Input */}
          {step >= 7 && (
            <div className="mb-4">
              <label className="block mb-2">
                Subsidy by Government (%) (30 to 100)
              </label>
              <input
                type="number"
                value={subsidy}
                onChange={(e) => setSubsidy(e.target.value)}
                placeholder="Enter subsidy percentage"
                className="border p-2 rounded-md w-full"
                min="30"
                max="100"
              />
            </div>
          )}

          {/* Step 8: Adjusted BIPV Costs */}
          {step >= 8 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Adjusted BIPV Costs (After Subsidy)
              </h2>
              <p>
                Non-Removable BIPV Panel: ₹{adjustedNonRemovable.toFixed(2)}
              </p>
              <p>Removable BIPV Panel: ₹{adjustedRemovable.toFixed(2)}</p>
            </div>
          )}

          {/* Step 9: Combined Cost and Profit */}
          {step >= 9 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Combined Cost and Profit
              </h2>
              <p>
                Combined Cost (Constructing Wall + Solar Panel): ₹
                {combinedCost.toFixed(2)}
              </p>
              <p>
                Profit from Non-Removable BIPV: ₹{profitNonRemovable.toFixed(2)}
              </p>
              <p>Profit from Removable BIPV: ₹{profitRemovable.toFixed(2)}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}