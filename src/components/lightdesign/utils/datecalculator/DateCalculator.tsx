
import { useState, useEffect } from "react";
import "./DateCalculator.scss";

export const DateCalculator = (): JSX.Element => {
    const calculateDateDifference = (date1: Date, date2: Date): number => {
        const timeDifference = Math.abs(date2.getTime() - date1.getTime());
        const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return dayDifference;
    };
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [difference, setDifference] = useState<number | null>(0);


    useEffect(() => {
        if (startDate && endDate) {
            const diff = calculateDateDifference(startDate, endDate);
            setDifference(diff);
        } else {
            setDifference(0);
        }
    }, [startDate, endDate]);

    return (
        <div className="datecalculator">
            <div className="datecalculatorcontrols">
                <label>
                    Start Date: &nbsp;
                    <input
                        id="startDate"
                        type="date"
                        value={startDate ? startDate.toISOString().split("T")[0] : ""}
                        onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                    />
                </label>
                <label>
                    End Date: &nbsp;&nbsp;
                    <input
                        id="endDate"
                        type="date"
                        value={endDate ? endDate.toISOString().split("T")[0] : ""}
                        onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                    />
                </label>
            </div>
            <div className="datecalculatoroutput">
                <div className="datecalculatoroutputresultdisplay">
                    <input id="datedifference" type="text" value={`Difference: ${difference} days`} readOnly />
                </div>
            </div>
        </div>
    );
}