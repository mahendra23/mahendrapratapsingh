import React, { useState } from "react";
import "./PublicHolidays.scss";
import { UtilsCardControlsButtons, UtilSelectField, UtilSelectFieldOption } from "../UtilCardControls/UtilCardControls";
import { getSortedPublicHolidays, Holiday } from "../../../service/HolidaysAndDateUtilFunctions";
import { CountryCodeEnum, CountryNamesEnum } from "../../../service/AppEnums";

export const PublicHolidays = () => {
  const year = `${new Date().getFullYear()}`;
  const [countryCode, setCountryCode] = useState<string>("NZ");
  const [holidays, setHolidays] = useState<Holiday[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetAll = async () => {
    setHolidays([]);
    setError(null);
    setLoading(false);
  }

  const fetchHolidays = async (localCountryCode: string) => {
    setLoading(true);
    setError(null);
    try {
      setHolidays(await getSortedPublicHolidays(localCountryCode));
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const countryCodeSelectOptions: UtilSelectFieldOption[] = Object.values(CountryCodeEnum).map((val) => ({
      value: val,
      label: CountryNamesEnum[val],
    }));

  return (
    <div id="publicholidays" className="publicholidays">
      <div className="publicholidayscontrols">
        <UtilSelectField
          id="countryselect"
          label="Country Code:"
          value={countryCode}
          onChange={(e) => {
            resetAll();
            setCountryCode(e.target.value as CountryCodeEnum);
          }}
          options={countryCodeSelectOptions}
          required={true}
        />
        <UtilsCardControlsButtons onCalculate={() => fetchHolidays(countryCode)} onClear={resetAll} />
      </div>
      {(loading || error) &&
        <div className="publicholidaysoutputError">
          {loading && <div>Loading public holidays...</div>}
          {error && <div>Error: {error}</div>}
          {!loading && !error && holidays && holidays.length === 0 && (
            <div>No public holidays found. Click "Fetch Holidays" to load.</div>
          )}
        </div>
      }
      {!loading && !error && holidays && holidays.length > 0 && (
        <div className="publicholidaysoutput">
          <p>
            Public Holidays in {CountryNamesEnum[countryCode as CountryCodeEnum]} for year {year}:
          </p>
          <table>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr key={`${holiday.date}-${index}`}>
                    <td>{holiday.date}</td>
                    <td>{holiday.localName}</td>
                    <td>{holiday.types}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
