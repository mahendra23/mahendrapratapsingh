
import { useState } from "react";
import "./DateCalculator.scss";
import { UtilInputField, UtilsCardControlsButtons } from "../UtilCardControls/UtilCardControls";

export default function DateCalculator() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [difference, setDifference] = useState<number | null>(null);

    const calculateDateDifference = () => {
        if (startDate && endDate) {
            const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
            const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            setDifference(dayDifference);
        } else {
            setDifference(null);
        }
    };

    const resetAll = () => {
        setDifference(null);
        setStartDate(new Date());
        setEndDate(new Date());
    };

    return (
        <div id="datecalculator" className="datecalculator">
            <div className="datecalculatorcontrols">
                <UtilInputField
                    id="startDate"
                    type="date"
                    label="Start Date:"
                    value={startDate ? startDate.toISOString().split("T")[0] : ""}
                    onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                    required={true}
                />
                <div className="earningcalculatorcontrols-rowtwo">
                    <UtilInputField
                        id="endDate"
                        type="date"
                        label="End Date: "
                        value={endDate ? endDate.toISOString().split("T")[0] : ""}
                        onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                        required={true}
                    />
                    <UtilsCardControlsButtons onCalculate={calculateDateDifference} onClear={resetAll} />
                </div>
            </div>
            {difference && (
                <div className="datecalculatoroutput">
                    <UtilInputField 
                        id="datedifference" 
                        label="Days:"
                        value={difference}
                        readOnly={true}
                    />
                </div>
            )}
        </div>
    );
}